"use client"

import { useState, useSyncExternalStore } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  ComputerIcon,
  Moon02Icon,
  Sun02Icon,
} from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

import { cn } from "@/lib/shared/utils"

type ThemeOption = {
  label: string
  value: "light" | "dark" | "system"
  icon: IconSvgElement
}

const themeOptions: ThemeOption[] = [
  {
    label: "Light",
    value: "light",
    icon: Sun02Icon,
  },
  {
    label: "Dark",
    value: "dark",
    icon: Moon02Icon,
  },
  {
    label: "System",
    value: "system",
    icon: ComputerIcon,
  },
]

export function ThemeModeToggle() {
  const isMounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  )
  const [isOpen, setIsOpen] = useState(false)
  const { theme = "system", resolvedTheme, setTheme } = useTheme()

  const activeTheme = themeOptions.find((option) => option.value === theme)
  const activeIcon =
    resolvedTheme === "dark" ? Moon02Icon : activeTheme?.icon ?? Sun02Icon

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex h-9 items-center gap-1 rounded-md px-2 text-slate-500 hover:bg-white/5 hover:text-white"
        aria-label="Change theme mode"
        aria-expanded={isOpen}
      >
        <HugeiconsIcon
          icon={isMounted ? activeIcon : ComputerIcon}
          size={20}
          strokeWidth={1.7}
        />
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={14}
          strokeWidth={1.7}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-11 w-36 rounded-md bg-white p-1 text-slate-700 shadow-lg dark:bg-[#1b1e29] dark:text-slate-300">
          {themeOptions.map((option) => {
            const isActive = option.value === theme

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTheme(option.value)
                  setIsOpen(false)
                }}
                className={cn(
                  "flex h-9 w-full items-center gap-2 rounded px-2 text-left text-sm transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
                    : "hover:bg-slate-100 dark:hover:bg-white/5"
                )}
              >
                <HugeiconsIcon icon={option.icon} size={17} strokeWidth={1.7} />
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
