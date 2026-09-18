import { SignJWT, jwtVerify } from "jose"

const accessSecret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET!)

const refreshSecret = new TextEncoder().encode(
  process.env.REFRESH_TOKEN_SECRET!
)

export async function createAccessToken(userId: number) {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(accessSecret)
}

export async function createRefreshToken(userId: number) {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(refreshSecret)
}

export async function verifyAccessToken(token: string) {
  return jwtVerify(token, accessSecret)
}

export async function verifyRefreshToken(token: string) {
  return jwtVerify(token, refreshSecret)
}
