import { cn } from "@/lib/utils"

export default function PostInfoTag({
  children,
  icon,
  className,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn("flex items-center gap-2 text-muted-foreground", className)}
    >
      {icon}
      {children}
    </span>
  )
}
