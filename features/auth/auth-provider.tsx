"use client"

import { useAuth } from "@/features/auth/hooks/use-auth"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuth()

  return children
}
