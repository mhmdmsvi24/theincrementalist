import "./globals.css"
import { cn } from "@/lib/utils"
import { vazirmatn, fontSekuya, fontIrSans, roboto } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"

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
        roboto.variable
      )}
    >
      <body className="font-vazir">
        <ThemeProvider
          defaultTheme="dark"
          disableTransitionOnChange
          attribute="class"
        >
        <div>
          <div className="flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
