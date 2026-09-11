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
    <div className={cn("flex flex-col md:gap-3 text-center", className)}>
      <p className="text-md font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl sm:leading-14">
        {headline}
      </p>
      <div className="text-sm xs:text-lg sm:text-xl">{subhead}</div>
    </div>
  )
}
