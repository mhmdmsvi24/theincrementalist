export default function BlogCardSkeleton({
  height,
}: {
  height: number
}) {
  return (
    <article
      className="relative w-full overflow-hidden rounded-xl bg-card"
      style={{ height }}
    >
      <div className="absolute inset-0 animate-pulse bg-muted" />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-5">
        <div className="mb-3 h-3 w-16 animate-pulse rounded bg-white/20" />

        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-white/20" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-white/20" />
        </div>

        <div className="mt-3 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-white/10" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-white/10" />
        </div>

        <div className="mt-4 h-3 w-20 animate-pulse rounded bg-white/10" />
      </div>
    </article>
  )
}