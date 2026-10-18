import Link from "next/link"

import Logo from "./Logo"
import Brand from "./Brand"

const footerLinks = {
  explore: [
    { label: "نوشته‌ها", href: "/blog" },
    { label: "پروژه‌ها", href: "/projects" },
    { label: "منابع", href: "/resources" },
    { label: "درباره من", href: "/about" },
  ],
  connect: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Telegram", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blog-border-strong bg-[#080d18]">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[120px]"
      />

      {/* Decorative line */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-[-10%] h-px w-[60%] rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        {/* System label */}
        <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-5">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-blog-dim">
            <span className="h-px w-6 bg-cyan-400/40" />
            SYSTEM_TERMINATION
          </div>

          <span className="font-mono text-[10px] text-blog-faint">
            INCREMENTALIST // 001
          </span>
        </div>

        {/* Main footer */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="The Incrementalist"
            >
              <Logo />
              <Brand />
            </Link>

            <p
              dir="rtl"
              className="mt-6 max-w-sm text-sm leading-7 text-blog-muted"
            >
              ساختن، اندازه‌گیری و بهتر شدن؛
              <br />
              یک گام در هر تکرار.
            </p>

            {/* System status */}
            <div className="mt-8 inline-flex items-center gap-2 border border-white/5 bg-white/[0.015] px-3 py-2 font-mono text-[10px]">
              <span className="h-1.5 w-1.5 animate-pulse bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />

              <span className="text-blog-dim">وضعیت:</span>

              <span className="text-blog-muted">درحال توسعه</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-blog-accent/60">
                01
              </span>

              <h3 className="font-mono text-xs tracking-[0.2em] text-blog-subtle">
                اکتشاف
              </h3>
            </div>

            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blog-subtle transition-colors duration-200 hover:text-blog-text-primary"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-200 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-purple-400/60">
                02
              </span>

              <h3 className="font-mono text-xs tracking-[0.2em] text-blog-subtle">
                اتصال
              </h3>
            </div>

            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blog-subtle transition-colors duration-200 hover:text-blog-text-primary"
                  >
                    <span className="h-px w-0 bg-purple-400 transition-all duration-200 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/5" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-xs text-blog-dim sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono">
            © {new Date().getFullYear()} THE INCREMENTALIST
          </div>

          <div dir="rtl" className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-blog-text-secondary"
            >
              حریم خصوصی
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-blog-text-secondary"
            >
              قوانین
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="font-mono text-[10px] tracking-wider text-blog-faint">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
