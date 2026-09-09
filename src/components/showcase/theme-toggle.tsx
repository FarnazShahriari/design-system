"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@farnazshahriari/design-system/ui/button"

/**
 * Both icons are always rendered and swapped with CSS on the `.dark` class,
 * so there is no mounted-state guard and nothing to mismatch on hydration.
 */
export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setTheme(
          document.documentElement.classList.contains("dark") ? "light" : "dark"
        )
      }
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
    >
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </Button>
  )
}
