"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

export function SiteThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-md border border-[var(--site-border)] bg-[var(--site-surface)] text-[var(--site-primary)] transition-colors hover:bg-[var(--site-primary-soft)]"
      aria-label="Toggle site theme"
    >
      <HugeiconsIcon
        icon={isDark ? Sun02Icon : Moon02Icon}
        size={18}
        strokeWidth={1.8}
      />
    </button>
  )
}
