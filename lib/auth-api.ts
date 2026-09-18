import { api } from "@/lib/api"
import type { AuthUser } from "@/stores/auth-store"

type AuthResponse = {
  user: AuthUser
  accessToken: string
}

type CurrentUserResponse = {
  user: AuthUser
}

export async function getCurrentUser() {
  const { data } = await api.get<CurrentUserResponse>("/auth/me")

  return data.user
}

export async function login(email: string, password: string) {
  const { data } = await api.post<AuthResponse>("/auth/login", {
    email,
    password,
  })

  return data
}

export async function register(
  name: string,
  username: string,
  email: string,
  password: string
) {
  const { data } = await api.post<AuthResponse>("/auth/register", {
    name,
    username,
    email,
    password,
  })

  return data
}

export async function refreshAccessToken() {
  const { data } = await api.post<AuthResponse>("/auth/refresh")

  return data
}

export async function logout() {
  await api.post("/auth/logout")
}
