import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import PostTag from "../components/PostTag"
import PostInfoTag from "../components/PostInfoTag"

type BlogPost = {
  id: string
  slug: string
  title: string
  description: string
  image: string
  tag: string
  date: string
  height: number
}

const mockPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-react-server-components",
    title: "آشنایی با React Server Components",
    description:
      "مقدمه‌ای کاربردی درباره React Server Components و اینکه چگونه شیوه ساخت اپلیکیشن‌های مدرن را تغییر می‌دهند.",
    image: "https://picsum.photos/id/1015/800/1000",
    tag: "React",
    date: "۱۱ سپتامبر ۲۰۲۶",
    height: 480,
  },
]

const articleContent = {
  intro: [
    "میو، React Server Components یکی از مهم‌ترین تغییرات در شیوه ساخت اپلیکیشن‌های مدرن React محسوب می‌شود.",
    "به‌جای اینکه هر کامپوننت را چیزی در نظر بگیریم که حتماً باید داخل مرورگر اجرا شود، React به ما اجازه می‌دهد مشخص کنیم هر کامپوننت کجا باید اجرا شود. بعضی کامپوننت‌ها می‌توانند کاملاً روی سرور باقی بمانند، در حالی که کامپوننت‌های تعاملی در مرورگر اجرا می‌شوند.",
    "این تفاوت در نگاه اول ساده به نظر می‌رسد، اما نحوه برخورد ما با دریافت داده، حجم JavaScript، معماری برنامه و عملکرد آن را به شکل قابل توجهی تغییر می‌دهد.",
  ],
  sections: [
    {
      id: "what-are-rsc",
      title: "React Server Components چیستند؟",
      paragraphs: [
        "React Server Components کامپوننت‌هایی هستند که به‌جای اجرا شدن در مرورگر، روی سرور رندر می‌شوند.",
        "این موضوع به یک Server Component اجازه می‌دهد مستقیماً به منابع سمت سرور دسترسی داشته باشد. برای مثال می‌تواند داده دریافت کند، با دیتابیس ارتباط برقرار کند و عملیات دیگری را در سمت سرور انجام دهد؛ بدون اینکه تمام منطق آن به مرورگر ارسال شود.",
        "در نهایت مرورگر نتیجه رندر شدن کامپوننت را دریافت می‌کند، نه الزاماً تمام پیاده‌سازی آن را.",
      ],
    },
    {
      id: "server-vs-client",
      title: "تفاوت Server Component و Client Component",
      paragraphs: [
        "نکته مهم این است که یکی از این دو نوع کامپوننت بهتر از دیگری نیست. هرکدام برای حل مسئله متفاوتی طراحی شده‌اند.",
        "Server Component زمانی مناسب است که عمدتاً نیاز به نمایش محتوا و دریافت داده دارید. در مقابل، Client Component زمانی کاربرد دارد که به تعاملات سمت مرورگر مانند state، event handler، انیمیشن یا APIهای مرورگر نیاز داشته باشید.",
      ],
    },
    {
      id: "why-it-matters",
      title: "چرا این موضوع اهمیت دارد؟",
      paragraphs: [
        "یکی از مهم‌ترین مزایا این است که می‌توانید JavaScript غیرضروری را از مرورگر خارج کنید.",
        "فرض کنید صفحه‌ای دارید که باید حجم زیادی از اطلاعات را از یک دیتابیس دریافت کند. در یک معماری کاملاً client-side ممکن است JavaScript را به مرورگر ارسال کنید، آن را اجرا کنید، درخواست بفرستید، منتظر پاسخ بمانید و در نهایت محتوا را رندر کنید.",
        "با استفاده از Server Components بخش زیادی از این عملیات می‌تواند قبل از رسیدن نتیجه به مرورگر روی سرور انجام شود.",
      ],
    },
    {
      id: "practical-example",
      title: "یک مثال کاربردی",
      paragraphs: [
        "یک صفحه مقاله وبلاگ را در نظر بگیرید. این صفحه باید یک مقاله را از دیتابیس دریافت کرده و نمایش دهد.",
        "هیچ دلیلی وجود ندارد که نمایش متن مقاله به تنهایی به JavaScript سمت کاربر نیاز داشته باشد.",
        "بنابراین می‌توان خود صفحه را به صورت یک Server Component نگه داشت و فقط بخش‌های تعاملی کوچک، مانند دکمه لایک یا سیستم نظرات، را به Client Component تبدیل کرد.",
      ],
    },
  ],
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  // Mock fetching a post by slug
  const post = mockPosts.find((post) => post.slug === slug)

  if (!post) notFound()

  return (
    <main className="container mx-auto min-h-screen text-foreground">
      {/* Header */}
      <header className="w-full px-10 py-8 pb-8">
        <Button
          variant="link"
          className="mr-auto mb-10 flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Link href="/blog" className="flex h-full w-min items-center gap-4">
            بازگشت به وبلاگ
            <ArrowLeft className="size-4" />
          </Link>
        </Button>

        <div className="mx-auto flex w-full max-w-6xl flex-col lg:px-10">
          <h1 className="text-3xl leading-[1.08] font-bold tracking-tight sm:text-5xl md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-7 w-full text-lg leading-8 text-muted-foreground md:text-xl">
            {post.description}
          </p>

          <div className="item-center mt-8 flex justify-between">
            <PostInfoTag icon={<CalendarDays className="size-4" />}>
              {post.date}
            </PostInfoTag>
            <PostInfoTag icon={<Clock className="size-4" />} className="mt-4">
              <span>زمان مطالعه ۸ دقیقه</span>
            </PostInfoTag>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative aspect-16/8 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Article */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:px-10 lg:grid-cols-[180px_minmax(0,720px)] lg:gap-20">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-4 text-lg font-black tracking-[0.2em] text-muted-foreground uppercase">
              محتوای پیش رو
            </p>

            <nav className="space-y-3 border-l border-border pl-4">
              {articleContent.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article body */}
        <article className="article-content">
          {/* Introduction */}
          {articleContent.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Sections */}
          {articleContent.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="article-section"
            >
              <h2>{section.title}</h2>

              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}

          {/* Example */}
          <section className="article-section">
            <h2>Keep the Boundary Clear</h2>

            <p>
              A useful mental model is to think of the server as the place where
              you prepare information and the client as the place where the user
              interacts with that information.
            </p>

            <blockquote>
              Not everything needs to be interactive. Don&apos;t send JavaScript
              to the browser unless the browser actually needs it.
            </blockquote>

            <p>
              Once this distinction becomes natural, deciding whether a
              component should be a Server Component or Client Component becomes
              much easier.
            </p>
          </section>

          {/* Conclusion */}
          <section className="article-ending">
            <h2>Conclusion</h2>

            <p>
              React Server Components aren&apos;t simply another React feature.
              They encourage a different way of thinking about application
              architecture.
            </p>

            <p>
              Instead of making everything run in the browser by default, you
              can keep server-side work on the server and introduce client-side
              JavaScript only where interaction actually requires it.
            </p>
          </section>

          {/* Tags */}
          <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
            <PostTag className="bg-primary px-3 py-1.5 text-sm">
              {post.tag}
            </PostTag>
            <PostTag className="bg-primary px-3 py-1.5 text-sm">
              Next.js
            </PostTag>
          </div>
        </article>
      </div>
    </main>
  )
}
