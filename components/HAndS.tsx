import { cn } from "@/lib/utils"

export default function HAndS({
  headline,
  subhead,
  className,
}: {
  headline: string
  subhead: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col text-center md:gap-3", className)}>
      <p className="text-md font-bold text-foreground sm:text-3xl sm:leading-14 md:text-4xl lg:text-5xl">
        {headline}
      </p>
      <div className="xs:text-lg text-sm sm:text-xl">{subhead}</div>
    </div>
  )
}
