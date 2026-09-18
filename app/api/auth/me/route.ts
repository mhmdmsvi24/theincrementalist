import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"
import { verifyAccessToken } from "@/lib/auth/jwt"

export async function GET(request: Request) {
  try {
    const authorization = request.headers.get("authorization")

    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Access token required" },
        { status: 401 }
      )
    }

    const token = authorization.slice("Bearer ".length)

    const { payload } = await verifyAccessToken(token)

    if (typeof payload.userId !== "number") {
      return NextResponse.json(
        { error: "Invalid access token" },
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
        createdAt: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 })
    }

    return NextResponse.json({ user })
  } catch {
    return NextResponse.json(
      { error: "Invalid or expired access token" },
      { status: 401 }
    )
  }
}
