"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { login } from "@/lib/auth-api"
import { useAuthStore } from "@/stores/auth-store"

import { useRouter } from "next/navigation"

export function useLogin() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const setUser = useAuthStore((state) => state.setUser)
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),

    onSuccess: ({ user, accessToken }) => {
      setUser(user)
      setAccessToken(accessToken)
      queryClient.setQueryData(["auth", "me"], user)

      toast.success("Logged in successfully")
      router.push("/")
    },

    onError: (error) => {
      if (typeof error === "object" && error !== null && "response" in error) {
        const response = (
          error as {
            response?: {
              data?: {
                error?: string
              }
            }
          }
        ).response

        toast.error(response?.data?.error ?? "Login failed")
        return
      }

      toast.error("Login failed")
    },
  })
}
