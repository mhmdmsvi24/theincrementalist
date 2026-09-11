import "./globals.css"
import { cn } from "@/lib/utils"
import { vazirmatn, fontSekuya, fontIrSans, roboto, caacupeOne } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import { FullModeToggle } from "@/components/mode-toggle"
import SideRayReloaded from "@/components/SideRayReloaded"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html
      lang="fa-IR"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        vazirmatn.variable,
        fontSekuya.variable,
        fontIrSans.variable,
        roboto.variable,
        caacupeOne.variable
      )}
    >
      <body className="relative font-vazir">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideRayReloaded />
          <Navbar />
          {children}
          <div className="sticky right-0 bottom-0 m-5">
            <FullModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
