import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

type Pagination = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  isFetching: boolean
  totalPages: number
}

export default function BlogPagination({
  page,
  setPage,
  isFetching,
  totalPages,
}: Pagination) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="flex items-center justify-between border-t border-blog-border-strong pt-6">
        <button
          type="button"
          disabled={isFetching || page <= 1}
          onClick={() => setPage((current) => current - 1)}
          className="flex items-center gap-2 font-mono text-xs tracking-wide text-blog-muted uppercase transition-colors hover:text-blog-accent-hover disabled:cursor-not-allowed disabled:text-blog-faint"
        >
          <ChevronRight className="h-4 w-4" />
          قبلی
        </button>

        <span className="font-mono text-xs text-blog-subtle">
          <Pagination>
            <PaginationContent>
              {page - 1 > 0 && (
                <PaginationItem onClick={() => setPage(page - 1)}>
                  <PaginationLink>{page - 1}</PaginationLink>
                </PaginationItem>
              )}
              {/*Center*/}
              <PaginationItem>
                <PaginationLink isActive>{page}</PaginationLink>
              </PaginationItem>
              {/*Center*/}
              {page + 1 < totalPages && (
                <PaginationItem onClick={() => setPage(page + 1)}>
                  <PaginationLink>{page + 1}</PaginationLink>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </span>

        <button
          type="button"
          disabled={isFetching || totalPages === 0 || page >= totalPages}
          onClick={() => setPage((current) => current + 1)}
          className="flex items-center gap-2 font-mono text-xs tracking-wide text-blog-muted uppercase transition-colors hover:text-blog-accent-hover disabled:cursor-not-allowed disabled:text-blog-faint"
        >
          بعدی
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
