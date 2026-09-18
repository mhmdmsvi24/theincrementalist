import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/auth/password"
import { registerSchema } from "@/lib/auth/validation"
import { z } from "zod"
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = registerSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: z.treeifyError(result.error),
        },
        { status: 400 }
      )
    }

    const { email, username, name, password } = result.data

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, ...(username ? [{ username }] : [])],
      },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email or username already exists" },
        { status: 409 }
      )
    }

    const passwordHash = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        passwordHash,
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        createdAt: true,
      },
    })

    const accessToken = await createAccessToken(user.id)
    const refreshToken = await createRefreshToken(user.id)

    const response = NextResponse.json(
      {
        user,
        accessToken,
      },
      { status: 201 }
    )

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 60 * 60 * 24 * 30,
    })

    return response
  } catch (error) {
    console.error("Registration error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
