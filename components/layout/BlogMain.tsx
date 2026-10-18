"use client"

import { useEffect, useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlogHero } from "./BlogHero"
import BlogCard from "@/app/(site)/blog/components/BlogCard"
import BlogCardSkeleton from "@/app/(site)/blog/components/BlogCardSkeleton"
import RoadmapCTA from "../RoadmapCTA"
import type { BlogPost, BlogPostsResponse } from "@/types/blog"

const PAGE_SIZE = 9

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim())
      setPage(1)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPosts() {
      setLoading(true)
      setError(false)

      try {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(PAGE_SIZE),
        })

        if (debouncedQuery) params.set("q", debouncedQuery)

        const response = await fetch(`/api/posts?${params}`, {
          signal: controller.signal,
        })

        if (!response.ok) throw new Error("Failed to fetch posts")

        const result: BlogPostsResponse = await response.json()

        setPosts(result.data)
        setTotal(result.pagination.total)
        setTotalPages(result.pagination.totalPages)
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return
        setError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchPosts()

    return () => controller.abort()
  }, [page, debouncedQuery])

  return (
    <main className="bg-blog-page text-slate-50">
      <BlogHero />

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-14">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-blog-subtle">
                جستجوی آرشیو
              </span>

              <span className="hidden font-mono text-xs text-blog-dim sm:block">
                {total} ورودی
              </span>
            </div>

            <div className="group relative max-w-3xl">
              <Search
                aria-hidden
                className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-blog-dim transition-colors group-focus-within:text-blog-accent"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="جستجوی راهنما ها، آنالیز ها و استارتاپ ها ..."
                className={cn(
                  "h-16 w-full border border-blog-border-strong bg-blog-surface-raised/70 pr-5 pl-14",
                  "font-mono text-sm text-slate-200 placeholder:text-blog-dim",
                  "transition-all outline-none",
                  "focus:border-blog-accent-border focus:bg-blog-surface-raised"
                )}
              />
            </div>
          </div>

          <div className="mb-8 flex items-end justify-between border-b border-blog-border-strong pb-5">
            <div>
              <div className="mb-2 font-mono text-[10px] tracking-[0.2em] text-blog-accent/70">
                آخرین های کسب و کار
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-blog-text-primary">
                آنالیز های اخیر
              </h2>
            </div>

            <span className="font-mono text-xs text-blog-dim">
              {String(page).padStart(2, "0")} /{" "}
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>

          {error ? (
            <div className="border border-red-400/20 p-8 text-sm text-red-300">
              دریافت مطالب ناموفق بود. دوباره تلاش کنید.
              <button
                type="button"
                onClick={() => setPage((current) => current)}
                className="mr-3 underline"
              >
                تلاش مجدد
              </button>
            </div>
          ) : loading ? (
            <div className="grid gap-px overflow-hidden border border-blog-border-strong bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: PAGE_SIZE }, (_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="border border-blog-border-strong p-12 text-center text-blog-muted">
              مطلبی پیدا نشد.
            </div>
          ) : (
            <div className="grid gap-px overflow-hidden border border-blog-border-strong bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>
          )}
        </div>
      </section>

      <RoadmapCTA />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="flex items-center justify-between border-t border-blog-border-strong pt-6">
          <button
            type="button"
            disabled={loading || page <= 1}
            onClick={() => setPage((current) => current - 1)}
            className="flex items-center gap-2 font-mono text-xs tracking-wide text-blog-muted uppercase transition-colors hover:text-blog-accent-hover disabled:cursor-not-allowed disabled:text-blog-faint"
          >
            <ChevronRight className="h-4 w-4" />
            قبلی
          </button>

          <span className="font-mono text-xs text-blog-subtle">
            صفحه {page} از {Math.max(totalPages, 1)}
          </span>

          <button
            type="button"
            disabled={loading || page >= totalPages}
            onClick={() => setPage((current) => current + 1)}
            className="flex items-center gap-2 font-mono text-xs tracking-wide text-blog-muted uppercase transition-colors hover:text-blog-accent-hover disabled:cursor-not-allowed disabled:text-blog-faint"
          >
            بعدی
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
