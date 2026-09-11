import HAndS from "./HAndS"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-14 h-[calc(100svh-320px)]">
      <HAndS
        headline="آرزو هاتو به دستاورد تبدیل کن"
        subhead="با کمترین انرژی و زمان یادبگیر استارتاپ آرزو هاتو راه بندازی"
      />
      <Button type="button" className="px-15 py-6">
        از آخرین اخبار ما با خبر بشید!
      </Button>
    </header>
  )
}
