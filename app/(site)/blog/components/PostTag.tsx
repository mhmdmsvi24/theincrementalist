import { cn } from "@/lib/utils"

export default function PostTag({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex items-center justify-center bg-primary px-3 py-1 font-medium text-primary-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
