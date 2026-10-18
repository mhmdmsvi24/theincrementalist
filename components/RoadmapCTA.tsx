import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function RoadmapCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="relative overflow-hidden border border-cyan-400/20 bg-[#0e1728]">
        {/* Grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-size-[32px_32px]"
        />

        {/* Accent */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]"
        />

        <div className="relative flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-blog-accent/70">
              <span className="h-px w-6 bg-cyan-400/50" />
              کویر پرست بی هدف
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-blog-text-primary sm:text-3xl">
              خسته شدید از سردرگمی توی
              <span className="text-blog-accent">
                &nbsp;کویر بی پایان یادگیری؟
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              از جمع‌آوری منابع تصادفی دست بردارید. نقشه‌های راه ساختاریافته‌ای
              را دنبال کنید که برای رساندن شما از جایی که هستید به جایی که
              می‌خواهید باشید، طراحی شده‌اند.
            </p>
          </div>

          <Link
            href="/roadmaps"
            className="group inline-flex shrink-0 items-center justify-center gap-3 border border-blog-accent-border bg-blog-accent-soft px-6 py-3.5 font-mono text-xs tracking-[0.12em] text-blog-accent-hover uppercase transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/[0.14] hover:text-cyan-200"
          >
            کشف مسیر های یادگیری
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
