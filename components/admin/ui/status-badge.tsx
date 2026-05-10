import type { ReactNode } from "react"

import { cn } from "@/lib/shared/utils"

type StatusBadgeTone = "success" | "warning" | "danger" | "info" | "muted"

type StatusBadgeProps = {
  children: ReactNode
  tone?: StatusBadgeTone
  className?: string
}

const toneClassName: Record<StatusBadgeTone, string> = {
  success:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  warning:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  danger: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
  info: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  muted: "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
}

function StatusBadge({
  children,
  tone = "muted",
  className,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded px-2 text-xs font-medium",
        toneClassName[tone],
        className
      )}
    >
      {children}
    </span>
  )
}

export { StatusBadge, type StatusBadgeTone }
