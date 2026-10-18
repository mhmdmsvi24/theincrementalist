export default function BlogCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className="relative flex min-h-85 flex-col bg-blog-surface p-6"
    >
      {/* Number + arrow */}
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 animate-pulse bg-slate-700/60" />
        <div className="h-4 w-4 animate-pulse bg-slate-700/50" />
      </div>

      {/* Content — matches BlogCard spacing */}
      <div className="mt-12">
        {/* Category */}
        <div className="mb-4 h-3 w-24 animate-pulse bg-cyan-400/10" />

        {/* Title — two lines */}
        <div className="space-y-2">
          <div className="h-5 w-[92%] animate-pulse bg-slate-700/60" />
          <div className="h-5 w-[68%] animate-pulse bg-slate-700/60" />
        </div>

        {/* Excerpt — three lines */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full animate-pulse bg-slate-700/40" />
          <div className="h-3 w-[94%] animate-pulse bg-slate-700/40" />
          <div className="h-3 w-[62%] animate-pulse bg-slate-700/40" />
        </div>
      </div>

      {/* Footer pinned to bottom */}
      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
        <div className="h-3 w-24 animate-pulse bg-slate-700/40" />
        <div className="h-3 w-16 animate-pulse bg-slate-700/40" />
      </div>

      {/* Match the card's bottom accent position */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/5" />
    </article>
  )
}
