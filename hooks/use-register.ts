"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

import { register } from "@/lib/auth-api"
import { useAuthStore } from "@/stores/auth-store"

import { useRouter } from "next/navigation"

export function useRegister() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const setUser = useAuthStore((state) => state.setUser)
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  return useMutation({
    mutationFn: ({
      name,
      username,
      email,
      password,
    }: {
      name: string
      username: string
      email: string
      password: string
    }) => register(name, username, email, password),

    onSuccess: ({ user, accessToken }) => {
      setUser(user)
      setAccessToken(accessToken)
      queryClient.setQueryData(["auth", "me"], user)

      toast.success("Account created successfully")
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

        toast.error(response?.data?.error ?? "Registration failed")
        return
      }

      toast.error("Registration failed")
    },
  })
}
