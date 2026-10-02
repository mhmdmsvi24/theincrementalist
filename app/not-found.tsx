"use client"

import Counter from "@/components/Counter"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const numbers = [201, 504, 404]

export default function NotFound() {
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
    <div className="bg-background">
      <Navbar />
      <div className="flex h-[calc(100svh-540px)] flex-col items-center justify-center">
        <div className="relative bg-transparent font-roboto **:border-none **:shadow-none flex flex-col justify-center items-center select-none">
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
          <div className="flex justify-center items-center">
            <Link href="/" className="text-center underline">
              خونه
            <ArrowLeft className="inline mr-2" />
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
