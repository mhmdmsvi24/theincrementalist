import type { BlogPost } from "@/types/blog"
import Image from "next/image"
import Link from "next/link"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative h-full w-full overflow-hidden rounded-xl bg-card shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]">
      <Image
          fill
          src={post.image}
          alt={post.title}
          sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
          unoptimized
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/10" />

        <div className="relative flex h-full flex-col justify-end p-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          <span className="mb-3 w-fit text-xs font-medium tracking-wider uppercase">
            {post.tag}
          </span>

          <h2 className="text-xl leading-tight font-bold">
            {post.title}
          </h2>

          <p className="mt-2 line-clamp-3 text-sm text-white/75">
            {post.description}
          </p>

          {post.date && (
            <time className="mt-4 text-xs text-white/55">
              {post.date}
            </time>
          )}
        </div>
      </article>
    </Link>
  )
}