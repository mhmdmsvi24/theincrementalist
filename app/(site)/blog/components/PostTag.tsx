import { cn } from "@/lib/utils"
import Link from "next/link"

export default function PostTag({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <Link
      href={`/blog?children=${encodeURIComponent(children)}`}
      className={cn(
        "px-3 font-mono group text-[16px] flex items-center justify-center gap-2 tracking-[0.12em] text-blog-muted uppercase transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/4 hover:text-blog-accent",
        className
      )}
    >
      [ <span className="group-hover:animate-neon text-[12px]">{children}</span> ]
    </Link>
  )
}
