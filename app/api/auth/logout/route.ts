import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({
    message: "Logged out successfully",
  })

  response.cookies.set("refreshToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/api/auth",
    maxAge: 0,
  })

  return response
}
