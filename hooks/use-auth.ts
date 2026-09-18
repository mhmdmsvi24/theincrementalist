"use client"

import { useEffect } from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUser, refreshAccessToken } from "@/lib/auth-api"
import { useAuthStore } from "@/stores/auth-store"

export function useAuth() {
  const setUser = useAuthStore((state) => state.setUser)
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const clearAuth = useAuthStore((state) => state.clearAuth)

  const query = useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      try {
        return await getCurrentUser()
      } catch (error) {
        if (!axios.isAxiosError(error) || error.response?.status !== 401) {
          throw error
        }

        const refreshed = await refreshAccessToken()

        setAccessToken(refreshed.accessToken)

        return refreshed.user
      }
    },
    retry: false,
  })

  useEffect(() => {
    if (query.isSuccess) {
      setUser(query.data)
    }

    if (query.isError) {
      clearAuth()
    }
  }, [
    query.isSuccess,
    query.isError,
    query.data,
    setUser,
    setAccessToken,
    clearAuth,
  ])

  return query
}
