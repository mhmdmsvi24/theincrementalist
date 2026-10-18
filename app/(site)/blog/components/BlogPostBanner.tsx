import Image from "next/image"

export default function BlogPostBanner({
  postNumber,
  image,
  title,
}: {
  postNumber: string
  image: string
  title: string
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
      <div className="relative overflow-hidden border border-blog-border bg-blog-surface-raised">
        <div className="relative aspect-16/7">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b1120]/40 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 border-t border-r border-blog-border-strong bg-blog-page/90 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-[10px] tracking-[0.15em] text-blog-subtle">
            FIG_{postNumber} / ARTICLE_COVER
          </span>
        </div>
      </div>
    </section>
  )
}
