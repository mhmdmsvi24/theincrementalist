"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "../Navbar"
import Footer from "../Footer"
import SideRayReloaded from "../SideRayReloaded"
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
      <SideRayReloaded />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
