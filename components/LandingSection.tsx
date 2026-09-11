import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

interface DataBoxProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export default function LandingSection({
  children,
  className,
  ...props
}: DataBoxProps) {
  const LandingSectionVariants = cva(
    "flex w-full text-foreground flex justify-center items-center container mx-auto"
  )

  return (
    <section className={cn(LandingSectionVariants({ className }))} {...props}>
      {children}
    </section>
  )
}
