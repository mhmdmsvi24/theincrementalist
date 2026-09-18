import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { verifyPassword } from "@/lib/auth/password"
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt"
import { loginSchema } from "@/lib/auth/validation"
import z from "zod"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = loginSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: z.treeifyError(result.error),
        },
        { status: 400 }
      )
    }

    const { email, password } = result.data

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    const passwordValid = await verifyPassword(user.passwordHash, password)

    if (!passwordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      )
    }

    const accessToken = await createAccessToken(user.id)
    const refreshToken = await createRefreshToken(user.id)

    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
      },
      accessToken,
    })

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 60 * 60 * 24 * 30,
    })

    return response
  } catch (error) {
    console.error("Login error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
