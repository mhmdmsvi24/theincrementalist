import { BlogHero } from "@/components/layout/BlogHero"
import { BlogMain } from "@/components/layout/BlogMain"

export default function Page() {
  return (
    <main>
      <div className="relative">
        <BlogHero />
        <BlogMain />
      </div>
    </main>
  )
}
