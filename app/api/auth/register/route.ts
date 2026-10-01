import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/auth/password"
import { registerApiSchema } from "@/lib/auth/validation"
import { z } from "zod"
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const result = registerApiSchema.safeParse(body)

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

    // if yes trhow error
    if (existingUser) {
      return NextResponse.json(
        { error: "یکی قبلا با این ایمیل یا نام کاربری وارد شده" },
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

    // mount refresh token as http cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      // 30 days
      maxAge: 60 * 60 * 24 * 30,
    })

    // return the data
    return response
  } catch (error) {
    console.error("Registration error:", error)

    return NextResponse.json(
      { error: "مشکل از تو نیست، از ماست :)" },
      { status: 500 }
    )
  }
}
