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
    "container mx-auto flex w-full items-center justify-center text-foreground"
  )

  return (
    <section className={cn(LandingSectionVariants({ className }))} {...props}>
      {children}
    </section>
  )
}
