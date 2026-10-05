"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "../shared/sonner"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
