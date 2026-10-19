import { cn } from "@/lib/utils"
import { prisma } from "@/lib/prisma"
import BlogTopicButtons from "@/app/(site)/blog/components/BlogTopicButtons"

export async function BlogHero() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    select: { category: true },
  })

  const topics = posts
    .flatMap((post) => post.category)
    .reduce<Record<string, number>>((acc, tag) => {
      acc[tag] = (acc[tag] ?? 0) + 1
      return acc
    }, {})

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-blog-page">
      {/* Background grid */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)]",
          "bg-size-[48px_48px]",
          "mask-[linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)]"
        )}
      />

      {/* Gradient atmosphere */}
      <div
        aria-hidden
        className="absolute -top-48 -right-40 h-155 w-155 rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="max-w-4xl text-center sm:text-right">
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-5xl lg:text-7xl">
            کسب و کار، آنالیز
            <br />
            <span className="bg-linear-to-r from-slate-100 via-slate-200 to-slate-500 bg-clip-text text-transparent">
              & ساخت چیز هایی که کار میکنند
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-blog-muted sm:text-lg">
            راهنماهای عملی، تحلیل‌ها و یادداشت‌های میدانی در مورد کسب‌وکار،
            استارتاپ‌ها، محصول، امور مالی و سیستم‌هایی که مانند قلب تپنده
            آنهاست.
          </p>
        </div>

        {/* Topic index */}
        <div className="mt-20 border-t border-blog-border-strong pt-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.2em] text-blog-subtle">
              فهرست موضوعی
            </span>

            <div className="flex gap-2 font-mono text-xs text-blog-dim">
              <span>موضوعات:</span>
              <span>{Object.entries(topics).length}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.entries(topics).map(([topic, count], index) => (
              <BlogTopicButtons
                key={topic}
                topic={topic}
                count={count}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
