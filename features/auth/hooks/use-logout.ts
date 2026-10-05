"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "@/lib/auth-api"
import { useAuthStore } from "@/stores/auth-store"

export function useLogout() {
  const queryClient = useQueryClient()
  const clearAuth = useAuthStore((state) => state.clearAuth)

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      clearAuth()
      queryClient.removeQueries({ queryKey: ["auth"] })
    },
  })
}
