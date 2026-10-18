import { formatPersianDate } from "@/lib/utils"
import { CalendarDays, Clock } from "lucide-react"

export default function BlogDateAndDuration({ publishedAt, readTime }: {publishedAt: Date | null, readTime: number}) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 pt-6">
      <div className="flex items-center gap-3">
        <CalendarDays className="size-4 text-blog-accent" />
        <div>
          <div className="font-mono text-[9px] tracking-[0.15em] text-blog-dim">
            منتشر شده در
          </div>
          <div className="mt-1 text-sm text-blog-text-secondary">
            {formatPersianDate(publishedAt)}
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-white/8" />

      <div className="flex items-center gap-3">
        <Clock className="size-4 text-blog-accent" />
        <div>
          <div className="font-mono text-[9px] tracking-[0.15em] text-blog-dim">
            زمان مطالعه
          </div>
          <div className="mt-1 text-sm text-blog-text-secondary">
            {readTime} دقیقه
          </div>
        </div>
      </div>
    </div>
  )
}
