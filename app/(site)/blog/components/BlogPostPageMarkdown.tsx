import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function BlogPostPageMarkdown({
  children,
}: {
  children?: string | null | undefined
  }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children, ...props }) => {
          const title = String(children)
          const id = title
            .toLowerCase()
            .replace(/[^\p{L}\p{N}\s-]/gu, "")
            .trim()
            .replace(/\s+/g, "-")

          return (
            <section id={id} className="article-section mb-16 scroll-mt-28">
              <div className="mb-7 flex items-center gap-4" dir="ltr">
                <span className="font-mono text-xs tracking-[0.15em] text-blog-accent">
                  SECTION
                </span>
                <div className="h-px flex-1 bg-white/8" />
              </div>
              <h2
                {...props}
                className="mb-7 text-2xl leading-tight font-semibold tracking-tight text-blog-text-primary sm:text-3xl"
              >
                {children}
              </h2>
            </section>
          )
        },
        h3: ({ children, ...props }) => (
          <h3
            {...props}
            className="mt-10 mb-4 text-xl font-semibold text-blog-text-primary"
          >
            {children}
          </h3>
        ),
        p: ({ children, ...props }) => (
          <p {...props} className="mb-6 leading-loose">
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul {...props} className="mb-6 list-disc space-y-2 pr-6">
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol {...props} className="mb-6 list-decimal space-y-2 pr-6">
            {children}
          </ol>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            {...props}
            className="my-10 border-r-2 border-cyan-400 bg-cyan-400/[0.035] px-6 py-5 text-blog-text-secondary"
          >
            {children}
          </blockquote>
        ),
        a: ({ children, href, ...props }) => (
          <a
            {...props}
            href={href}
            className="text-blog-accent-hover underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
          >
            {children}
          </a>
        ),
        pre: ({ children, ...props }) => (
          <pre
            {...props}
            dir="ltr"
            className="my-8 overflow-x-auto border border-blog-border-strong bg-blog-code-surface p-5 text-left text-sm leading-6"
          >
            {children}
          </pre>
        ),
        code: ({ children, className, ...props }) => (
          <code
            {...props}
            className={`${className ?? ""} font-mono text-[0.9em]`}
          >
            {children}
          </code>
        ),
        table: ({ children, ...props }) => (
          <div className="my-8 overflow-x-auto">
            <table {...props} className="w-full border-collapse text-sm">
              {children}
            </table>
          </div>
        ),
        th: ({ children, ...props }) => (
          <th
            {...props}
            className="border border-blog-border-strong bg-white/5 p-3 text-right font-semibold text-blog-text-primary"
          >
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td
            {...props}
            className="border border-blog-border-strong p-3 align-top"
          >
            {children}
          </td>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
