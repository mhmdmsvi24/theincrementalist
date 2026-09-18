import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createAccessToken, verifyRefreshToken } from "@/lib/auth/jwt"

export async function POST(request: Request) {
  try {
    const refreshToken = request.headers
      .get("cookie")
      ?.split("; ")
      .find((cookie) => cookie.startsWith("refreshToken="))
      ?.split("=")[1]

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token not found" },
        { status: 401 }
      )
    }

    const { payload } = await verifyRefreshToken(refreshToken)

    if (typeof payload.userId !== "number") {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 })
    }

    const accessToken = await createAccessToken(user.id)

    return NextResponse.json({
      user,
      accessToken,
    })
  } catch {
    return NextResponse.json(
      { error: "Invalid or expired refresh token" },
      { status: 401 }
    )
  }
}
