"use client"

import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import BlogCard from "@/app/(site)/blog/components/BlogCard"
import BlogCardSkeleton from "@/app/(site)/blog/components/BlogCardSkeleton"
import RoadmapCTA from "../RoadmapCTA"
import type { BlogPostsResponse } from "@/types/blog"
import { useFetch } from "@/hooks/useFetch"
import BlogPagination from "../shared/Pagination"

const PAGE_SIZE = 9

type PostSearchParams = {
  page?: number
  limit?: number
  q: string | undefined
}

export function BlogMain() {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim())
      setPage(1)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const params: PostSearchParams = {
    q: debouncedQuery || undefined,
  }

  if (page > 1) {
    params.page = page
  }

  if (PAGE_SIZE !== 9) {
    params.limit = PAGE_SIZE
  }

  const {
    data: result,
    error,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useFetch<BlogPostsResponse>("/api/posts", {
    params,
    keepPreviousData: true,
  })

  const posts = result?.data ?? []
  const total = result?.pagination.total ?? 0
  const totalPages = result?.pagination.totalPages ?? 0
  const isInitialLoading = isLoading || (!result && !isError)
  
  return (
    <main className="bg-blog-page">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-14">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-blog-subtle">
                جستجوی آرشیو
              </span>
              <span className="hidden font-mono text-xs text-blog-dim sm:block">
                تعداد : {total}
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

          {isError ? (
            <div className="border border-red-400/20 p-8 text-sm text-red-300">
              دریافت مطالب ناموفق بود.
              {error?.message && (
                <p className="mt-2 text-xs text-red-300/70">{error.message}</p>
              )}
              <button
                type="button"
                onClick={refetch}
                className="mr-3 underline"
              >
                تلاش مجدد
              </button>
            </div>
          ) : isInitialLoading ? (
            <div className="grid gap-px overflow-hidden border border-blog-border-strong bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: PAGE_SIZE }, (_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          ) : !isLoading && posts.length === 0 ? (
            <div className="border border-blog-border-strong p-12 text-center text-blog-muted">
              مطلبی پیدا نشد.
            </div>
          ) : (
            <div
              className={cn(
                "grid gap-px overflow-hidden border border-blog-border-strong bg-white/10 md:grid-cols-2 lg:grid-cols-3",
                isFetching && "opacity-60 transition-opacity"
              )}
              aria-busy={isFetching}
            >
              {posts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>
          )}
        </div>
      </section>
      <BlogPagination
        page={page}
        isFetching={isFetching}
        totalPages={totalPages}
        setPage={setPage}
      />
      <RoadmapCTA />
    </main>
  )
}
