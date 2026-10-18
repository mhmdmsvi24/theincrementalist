import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogHeaderNav({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group mr-auto mb-16 flex w-max items-center gap-3 font-mono text-xs tracking-[0.12em] text-blog-subtle transition-colors hover:text-blog-accent"
    >
      <span>{children}</span>
      <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
    </Link>
  )
}
