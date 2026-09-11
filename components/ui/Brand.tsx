import { cn } from "@/lib/utils"

export default function Brand({ extraClasses }: { extraClasses?: string }) {
  return (
    <div
      className={cn(
        "w-min font-caacupeOne text-xl text-nowrap text-foreground select-none",
        extraClasses
      )}
    >
      The Incrementalist
    </div>
  )
}
