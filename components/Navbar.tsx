import { Button } from "./ui/button"
import Logo from "./ui/Logo"
import Brand from "./ui/Brand"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="">
      <div className="bg-secondary py-3 max-md:px-3">
        <div className="container mx-auto flex items-center justify-between">
          {/*Right*/}
          <div className="flex items-stretch justify-between gap-2">
            <Button size="lg" className="px-4 sm:w-25">
              ثبت نام
            </Button>
            <Button size="lg" variant="outline" className="px-4 sm:w-25 text-primary">
              ورود
            </Button>
            {/*<div className="max-lg:hidden bg-secondary-foreground rounded-lg h-min my-auto">
              <ModeToggle />
            </div>*/}
          </div>
          {/*Left*/}
          <div>
            {/*Brand*/}
            <div className="flex items-center">
              <Brand />
              <Logo />
            </div>
            {/*Navigation*/}
            <ul></ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
