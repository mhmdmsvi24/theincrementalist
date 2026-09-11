"use client"

import { useSyncExternalStore } from "react"
import { Contrast, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const emptySubscribe = () => () => {}

const themes = [
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
] as const

export function FullModeToggle() {
  const { theme, setTheme } = useTheme()

  const mounted = useSyncExternalStore( emptySubscribe, () => true, () => false )

  const toggleTheme = () => { setTheme(theme === "dark" ? "light" : "dark") }

  if (!mounted) {
    return (
      <div className="flex items-center p-1 w-min">
        {themes.map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label}
            disabled
            onClick={toggleTheme}
          >
            <Icon className="size-4" />
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center p-1 w-min">
      {themes.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value

        return (
          <Button
            key={value}
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "rounded-md transition-all",
              isActive
                ? "text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
            )}
          >
            <Icon className="size-4" />
          </Button>
        )
      })}
    </div>
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  
  const mounted = useSyncExternalStore( emptySubscribe, () => true, () => false )

  const toggleTheme = () => { setTheme(theme === "dark" ? "light" : "dark") }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        disabled
      >
        <Contrast className="size-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      <Contrast className="size-5" color={theme === "dark" ? "#000" : "#fff"} />
    </Button>
  )
}