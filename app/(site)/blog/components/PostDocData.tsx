export default function PostDocData({
  postNumber,
  category,
  analysisType,
}: {
  postNumber: string
  category: string
  analysisType?: string
}) {
  return (
    <div className="mb-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.16em] text-blog-subtle uppercase">
      <span className="text-blog-accent">شماره_پرونده_{postNumber}</span>
      <span className="text-blog-faint">/</span>
      <span>{category}</span>
      <span className="text-blog-faint">/</span>
      <span>{analysisType || "کارشناسی تکنیکال"}</span>
    </div>
  )
}
