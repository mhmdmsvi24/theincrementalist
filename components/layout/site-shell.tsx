"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "../ui/sonner"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {children}
    </ThemeProvider>
  )
}
