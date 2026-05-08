import { ThemeModeToggle } from "@/components/common/layout/ThemeModeToggle"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BarChartIcon,
  Menu02Icon,
  Notification02Icon,
  Search01Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const topLinks = ["Dashboards", "Pages", "Apps", "Help"]

type NavbarProps = {
  onOpenMenu: () => void
}

export function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-[#11131a] px-3 text-slate-400 sm:px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onOpenMenu}
          className="grid size-9 place-items-center rounded-md text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <HugeiconsIcon icon={Menu02Icon} size={21} strokeWidth={1.7} />
        </button>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {topLinks.map((item, index) => (
            <span
              key={item}
              className={index === 0 ? "text-white" : "text-slate-500"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {[Search01Icon, Settings02Icon, Notification02Icon, BarChartIcon].map(
          (icon, index) => (
            <button
              key={index}
              type="button"
              className={cn(
                "size-9 place-items-center rounded-md text-slate-500 hover:bg-white/5 hover:text-white",
                index > 1 ? "hidden sm:grid" : "grid"
              )}
              aria-label="Navbar action"
            >
              <HugeiconsIcon icon={icon} size={20} strokeWidth={1.7} />
            </button>
          )
        )}
        <ThemeModeToggle />
        <div className="ml-2 size-9 overflow-hidden rounded-md bg-slate-700">
          <div className="grid size-full place-items-center text-sm font-semibold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  )
}
