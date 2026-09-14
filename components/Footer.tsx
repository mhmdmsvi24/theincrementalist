import Link from "next/link"
import Logo from "./ui/Logo"
import Brand from "./ui/Brand"
import { FullModeToggle } from "./mode-toggle"

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
    <footer className="relative mt-32 overflow-hidden border-t border-white/5 bg-[#f8fafc] dark:bg-[#0b1120]">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-50 w-full -translate-x-1/2 rounded-full bg-indigo-600/30 animate-pulse blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
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

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              ساختن، اندازه‌گیری و بهتر شدن؛
              <br />
              یک گام در هر تکرار.
            </p>

            {/* Terminal status */}
            <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse m-1" />
              <span>وضعیت:</span>
              <span className="text-slate-300">
                در حال توسعه
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-slate-500">
              EXPLORE
            </h3>

            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-100"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-slate-500">
              CONNECT
            </h3>

            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-100"
                  >
                    <span className="h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-3" />
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
        <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 items-center">
            © {new Date().getFullYear()}
            <div className="sticky right-0 bottom-0 m-5">
              <FullModeToggle />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              حریم خصوصی
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              قوانین
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="font-mono text-[10px] tracking-wider text-slate-600">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}