import { create } from "zustand"

export type AuthUser = {
  id: number
  email: string
  username: string
  name: string | null
  avatar?: string | null
}

type AuthState = {
  user: AuthUser | null
  isAuthenticated: boolean
  setUser: (user: AuthUser | null) => void
  accessToken: string | null
  setAccessToken: (accessToken: string | null) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: user !== null,
    }),

  setAccessToken: (accessToken) =>
    set({
      accessToken,
    }),

  clearAuth: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}))
