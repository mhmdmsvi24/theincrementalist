import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import PostTag from "../components/PostTag"
import BlogHeaderNav from "../components/BlogHeaderNav"
import PostDocData from "../components/PostDocData"
import BlogDateAndDuration from "../components/BlogDateAndDuration"
import BlogPostBanner from "../components/BlogPostBanner"
import BlogPostPageMarkdown from "../components/BlogPostPageMarkdown"

interface PageProps {
  params: Promise<{ slug: string }>
}

function getHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => {
      const level = line.match(/^#+/)?.[0].length ?? 2
      const title = line.replace(/^#{2,3}\s+/, "").trim()
      const id = title
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .trim()
        .replace(/\s+/g, "-")

      return { level, title, id }
    })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  const post = await prisma.post.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
      publishedAt: { not: null },
    },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      image: true,
      category: true,
      tags: true,
      readTime: true,
      publishedAt: true,
      content: true,
    },
  })

  if (!post) notFound()

  const headings = getHeadings(post.content)
  const postNumber = String(post.id).padStart(3, "0")
  
  return (
    <main className="incrementalist-grid relative min-h-screen overflow-hidden bg-blog-page text-blog-text">
      <header className="border-b border-blog-border">
        <div className="max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <BlogHeaderNav href="/blog">بازگشت / فهرست دانش</BlogHeaderNav>

          <div className="max-w-5xl">
            <PostDocData category={post.category} postNumber={postNumber} />

            <h1 className="max-w-4xl text-2xl md:text-4xl leading-[1.12] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {post.title}
            </h1>

            <p className="mt-8 max-w-3xl text-md md:text-lg leading-8 text-blog-muted sm:text-xl">
              {post.excerpt}
            </p>

            <BlogDateAndDuration
              publishedAt={post.publishedAt}
              readTime={post.readTime}
            />
          </div>
        </div>
      </header>

      <BlogPostBanner
        postNumber={postNumber}
        image={post.image}
        title={post.title}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 lg:grid-cols-[200px_minmax(0,760px)] lg:gap-20 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="mb-5 font-mono text-[10px] tracking-[0.18em] text-blog-accent">
              محتوای پرونده
            </div>

            <nav className="border-r border-blog-border pr-5">
              {headings.map((heading, index) => (
                <a
                  key={`${heading.id}-${index}`}
                  href={`#${heading.id}`}
                  className={`group mb-4 flex gap-3 text-right text-xs leading-5 text-blog-subtle transition-colors hover:text-slate-200 ${
                    heading.level === 3 ? "mr-4" : ""
                  }`}
                >
                  <span className="font-mono text-[10px] text-blog-faint transition-colors group-hover:text-blog-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{heading.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 border-t border-blog-border pt-5">
              <div className="font-mono text-[9px] tracking-[0.15em] text-blog-dim">
                سند
              </div>
              <div className="mt-2 font-mono text-xs text-blog-subtle">
                {post.slug}
              </div>
            </div>
          </div>
        </aside>

        <article
          dir="rtl"
          className="article-content min-w-0 text-right text-[17px] leading-loose text-blog-text-secondary"
        >
          <div className="relative mb-16 border-r-2 border-cyan-400/60 pr-6">
            <div className="mb-4 font-mono text-[10px] tracking-[0.16em] text-blog-accent">
              چکیده
            </div>
            <p className="text-lg leading-loose font-medium text-slate-200">
              {post.excerpt}
            </p>
          </div>

          {post.content.trim() ? (
            <div className="space-y-6">
              <BlogPostPageMarkdown>{post.content}</BlogPostPageMarkdown>
            </div>
          ) : (
            <div className="border border-blog-border-strong p-8 text-blog-subtle">
              محتوای این مقاله هنوز منتشر نشده است.
            </div>
          )}

          <div
            dir="ltr"
            className="mt-14 flex flex-wrap gap-2 border-t border-blog-border pt-7"
          >
            {post.tags.map((tag) => (
              <PostTag key={tag}>{tag}</PostTag>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
