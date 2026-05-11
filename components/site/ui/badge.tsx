import type { ReactNode } from "react"

import { cn } from "@/lib/shared/utils"

type SiteBadgeProps = {
  children: ReactNode
  className?: string
}

export function SiteBadge({ children, className }: SiteBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-[var(--site-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--site-primary)]",
        className
      )}
    >
      {children}
    </span>
  )
}
