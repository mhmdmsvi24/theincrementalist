import { cn } from "@/lib/utils"

type Topic = {
  name: string
  count: number
}

export default function BlogTopicButtons({
  topic,
  index,
}: {
  topic: Topic
  index: number
}) {
  return (
    <button
      type="button"
      className={cn(
        "group flex items-center gap-3 border px-4 py-2.5",
        "font-mono text-xs tracking-wide uppercase",
        "transition-all duration-200",
        index === 0
          ? [
              "border-blog-accent-border",
              "bg-blog-accent-soft",
              "text-blog-accent-hover",
              "hover:border-cyan-300/70",
              "hover:bg-cyan-400/12",
            ]
          : [
              "border-blog-border-strong",
              "bg-white/1.5",
              "text-blog-muted",
              "hover:border-white/20",
              "hover:bg-white/4",
              "hover:text-slate-200",
            ]
      )}
    >
      <span>{topic.name}</span>

      <span
        className={cn(
          "text-[10px]",
          index === 0
            ? "text-cyan-500/70"
            : "text-blog-dim group-hover:text-blog-subtle"
        )}
      >
        {String(topic.count).padStart(2, "0")}
      </span>
    </button>
  )
}
