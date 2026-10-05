import "@/app/globals.css"
import { cn } from "@/lib/utils"
import {
  vazirmatn,
  fontSekuya,
  fontIrSans,
  roboto,
  caacupeOne,
} from "@/app/fonts"
import { Providers } from "@/components/providers"

export default function ProfileLayout({
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
