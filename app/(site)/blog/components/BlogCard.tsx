import { formatPersianDate } from "@/lib/utils"
import type { BlogPost } from "@/types/blog"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function BlogCard({ post }: { post: BlogPost }) {
  console.log(post)
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative flex min-h-85 flex-col bg-blog-surface p-6 transition-colors duration-300 hover:bg-blog-surface-hover">
        {/* Card number */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-blog-dim">
            شماره - {post.id}
          </span>

          <ArrowUpRight className="h-4 w-4 text-blog-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blog-accent" />
        </div>

        {/* Content */}
        <div className="mt-12">
          <div className="mb-4 font-mono text-[10px] tracking-[0.15em] text-blog-accent/70">
            {post.category}
          </div>

          <h3 className="text-xl leading-snug font-medium tracking-tight text-blog-text-primary transition-colors group-hover:text-white">
            {post.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-blog-subtle">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5 font-mono text-[10px] text-blog-dim">
          <span>{formatPersianDate(post.publishedAt)}</span>
          <span>{post.readTime} دقیقه </span>
        </div>

        {/* Hover accent */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
      </article>
    </Link>
  )
}
