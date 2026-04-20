"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@lib/util/cn"
import { useEffect, useState } from "react"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch — render placeholder until mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={cn(
          "size-9 flex items-center justify-center rounded-md text-muted-foreground opacity-0",
          className
        )}
        disabled
      >
        <Sun size={16} />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "size-9 flex items-center justify-center rounded-md",
        "text-muted-foreground hover:text-foreground hover:bg-accent",
        "transition-colors duration-200",
        className
      )}
    >
      {isDark ? (
        <Sun size={16} className="transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Moon size={16} className="transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}
