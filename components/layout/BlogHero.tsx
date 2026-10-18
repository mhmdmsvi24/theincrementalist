"use client"

import { cn } from "@/lib/utils"

const topics = [
  { name: "همه", count: 84 },
  { name: "آنالیز کسب و کار", count: 44 },
  { name: "استارتاپ ها", count: 21 },
  { name: "توسعه محصول", count: 18 },
  { name: "استراتژی", count: 16 },
  { name: "هوش مصنوعی", count: 14 },
  { name: "MVP", count: 12 },
  { name: "رشد", count: 11 },
  { name: "Agile", count: 9 },
  { name: "امور مالی", count: 8 },
  { name: "عملیاتی", count: 7 },
  { name: "مشاغل", count: 6 },
]

export function BlogHero() {
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

      <div
        aria-hidden
        className="absolute top-[20%] right-[15%] h-100 w-100 rounded-full bg-indigo-500/10 blur-[120px]"
      />

      {/* Decorative diagonal lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] right-[-5%] h-125 w-175 opacity-20"
      >
        <div className="absolute top-20 right-0 h-px w-full rotate-[-27deg] bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute top-40 right-[-5%] h-px w-[90%] rotate-[-27deg] bg-linear-to-r from-transparent via-indigo-400/30 to-transparent" />
        <div className="absolute top-60 right-[5%] h-px w-[75%] rotate-[-27deg] bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-blog-accent/80">
          <span className="h-px w-8 bg-cyan-400/60" />
          <span>/ منابع دانش</span>
          <span className="text-blog-dim">فهرست - ۰۰۱</span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl">
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

            <div className="font-mono text-xs flex gap-2 text-blog-dim">
              <span>موضوعات:</span>
              <span>{topics.length - 1}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <button
                key={topic.name}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
