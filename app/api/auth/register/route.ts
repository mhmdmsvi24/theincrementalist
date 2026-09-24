import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/auth/password"
import { registerSchema } from "@/lib/auth/validation"
import { z } from "zod"
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt"

export async function POST(request: Request) {
  try {
    // get the body
    const body = await request.json()

    // verify the structure
    const result = registerSchema.safeParse(body)

    // if it doesn't fit the schema reject
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: z.treeifyError(result.error),
        },
        { status: 400 }
      )
    }

    // otherwise get the provided data
    const { email, username, name, password } = result.data

    // check if email or username exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, ...(username ? [{ username }] : [])],
      },
    })

    // if yes trhow error
    if (existingUser) {
      return NextResponse.json(
        { error: "Email or username already exists" },
        { status: 409 }
      )
    }

    // otherwise hash the password
    const passwordHash = await hashPassword(password)

    // create user
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

    // create access/refresh tokens
    const accessToken = await createAccessToken(user.id)
    const refreshToken = await createRefreshToken(user.id)

    // user and access token
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

    // anything beyond error handling return 500
  } catch (error) {
    console.error("Registration error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
