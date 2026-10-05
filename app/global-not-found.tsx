"use client"

import Counter from "@/components/reactbits/Counter"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { caacupeOne, fontIrSans, fontSekuya, roboto, vazirmatn } from "./fonts"
import { SiteShell } from "@/components/layout/site-shell"
import { Providers } from "@/components/providers"
import "@/app/globals.css"
import { cn } from "@/lib/utils"

const numbers = [201, 504, 404]

export default function GlobalNotFound() {
  const [counterNum, setCounterNum] = useState(numbers[0])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let counter = 0

    const interval = setInterval(() => {
      counter += 1

      setCounterNum(numbers[counter])

      if (numbers[counter] === 404) {
        clearInterval(interval)
        setShowMessage(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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
      <body className="relative rounded bg-linear-to-b from-background from-60% to-indigo-600/30 font-vazir">
        <Providers>
          <SiteShell>
            <div className="bg-background">
              <div className="flex h-[calc(100svh-456px)] flex-col items-center justify-center">
                <div className="relative flex flex-col items-center justify-center bg-transparent font-roboto select-none **:border-none **:shadow-none">
                  <Counter
                    value={counterNum}
                    places={[100, 10, 1]}
                    fontSize={80}
                    padding={5}
                    gap={15}
                    textColor="white"
                    fontWeight={900}
                    gradientFrom="transparent"
                  />
                  <h3 className="my-2 text-xl">
                    چیزی که دنبالشی یا حذف شده یا وجود نداره
                  </h3>
                </div>

                {showMessage && (
                  <div className="flex items-center justify-center">
                    <Link href="/" className="text-center underline">
                      خونه
                      <ArrowLeft className="mr-2 inline" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </SiteShell>
        </Providers>
      </body>
    </html>
  )
}
