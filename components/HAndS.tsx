import { cn } from "@/lib/utils"

export default function HAndS({
  headline,
  subhead,
  size = 3,
  className,
  children,
}: {
  headline: string
  subhead: string
  size?: number
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col text-center gap-2 md:gap-3 pt-40 px-2", className)}>
      <p
        className={cn(
          "text-md font-bold text-foreground sm:leading-14",
          `sm:text-${size}xl md:text-${size + 1}xl lg:text-${size + 2}xl"`
        )}
      >
        {headline}
      </p>
      <div className="xs:text-lg text-sm sm:text-xl">{subhead}</div>
      <div className="py-10">{children}</div>
    </div>
  )
}
