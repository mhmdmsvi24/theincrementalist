"use client"

import Link from "next/link"
import { CircleUserRound } from "lucide-react"

import Logo from "./Logo"
import Brand from "./Brand"
import { useAuthStore } from "@/features/auth/store/auth-store"

const navItems = [
  { label: "نوشته‌ها", href: "/blog" },
  { label: "پروژه‌ها", href: "/projects" },
  { label: "منابع", href: "/resources" },
  { label: "درباره من", href: "/about" },
]

export default function Navbar() {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-blog-page/95 backdrop-blur-xl">
      {/* Very subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Account */}
          <div className="flex shrink-0 items-center">
            {isAuthenticated ? (
              <Link
                href="/me"
                className="group flex items-center gap-3 border border-blog-border-strong bg-white/2 px-3 py-2 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/4"
              >
                <CircleUserRound className="size-5 text-blog-muted transition-colors group-hover:text-blog-accent" />

                <span className="hidden text-sm text-blog-text-secondary transition-colors group-hover:text-blog-text-primary sm:block">
                  {user?.name}
                </span>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="border border-blog-border-strong px-4 py-2.5 text-xs text-blog-muted transition-all duration-200 hover:border-white/20 hover:text-blog-text-primary"
                >
                  ورود
                </Link>

                <Link
                  href="/register"
                  className="border border-blog-accent-border bg-blog-accent-soft px-4 py-2.5 text-xs text-blog-accent-hover transition-all duration-200 hover:border-cyan-300/70 hover:bg-cyan-400/14"
                >
                  ثبت نام
                </Link>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 font-mono text-xs text-blog-subtle transition-colors duration-200 hover:text-blog-text-primary"
              >
                {item.label}

                {/* Hover line */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-200 group-hover:w-5" />
              </Link>
            ))}
          </div>
          
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="The Incrementalist"
          >
            <div className="flex items-center gap-3">
              <Brand extraClasses="hidden sm:block" />
              <Logo />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
