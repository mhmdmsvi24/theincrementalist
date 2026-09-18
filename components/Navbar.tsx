import { buttonVariants } from "./ui/button"
import Logo from "./ui/Logo"
import Brand from "./ui/Brand"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CircleUserRound } from "lucide-react"
import { useAuthStore } from "@/stores/auth-store"

export default function Navbar() {
  const user = useAuthStore((state) => state.user)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-[80%] pt-4">
        <div className="overflow-hidden rounded-2xl bg-gray-500/20 px-4 backdrop-blur-2xl">
          <div className="py-3 max-md:px-3">
            <div className="container mx-auto flex items-center justify-between">
              {/* Right */}
              <div className="flex items-stretch justify-between gap-2">
                {isAuthenticated ? (
                  <Link
                    href="/me"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "lg",
                      }),
                      "gap-4 px-4"
                    )}
                  >
                    <CircleUserRound className="size-7" color="#fff"/>
                    <span className="pt-px text-lg">{user?.name}</span>
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/register"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "lg",
                        }),
                        "px-4 sm:w-25"
                      )}
                    >
                      ثبت نام
                    </Link>

                    <Link
                      href="/login"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                        }),
                        "px-4 text-primary sm:w-25"
                      )}
                    >
                      ورود
                    </Link>
                  </>
                )}
              </div>

              {/* Left */}
              <div>
                {/* Brand */}
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3"
                  aria-label="The Incrementalist"
                >
                  <div className="flex items-center">
                    <Brand extraClasses="hidden sm:block" />
                    <Logo />
                  </div>
                </Link>

                {/* Navigation */}
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="container mx-auto max-w-187.5 bg-indigo-600 py-4 rounded-b-2xl">
        <div className="flex items-center justify-center gap-2">
          <div className="aspect-square w-2 animate-ping rounded-full bg-yellow-500"></div>
          <div className="font-mono font-">

          </div>
        </div>
      </div>*/}
    </nav>
  )
}
