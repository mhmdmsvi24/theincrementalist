import { Button } from "./ui/button"
import Logo from "./ui/Logo"
import Brand from "./ui/Brand"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-[80%] pt-4">
        <div className="overflow-hidden rounded-2xl bg-gray-500/20 px-3 backdrop-blur-2xl">
          <div className="py-3 max-md:px-3">
            <div className="container mx-auto flex items-center justify-between">
              {/* Right */}
              <div className="flex items-stretch justify-between gap-2">
                <Button size="lg" className="px-4 sm:w-25">
                  ثبت نام
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-4 text-primary sm:w-25"
                >
                  ورود
                </Button>
              </div>

              {/* Left */}
              <div>
                {/* Brand */}
                <div className="flex items-center">
                  <Brand extraClasses="hidden sm:block" />
                  <Logo />
                </div>

                {/* Navigation */}
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}