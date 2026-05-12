import type { ReactNode } from "react"

import { cn } from "@/lib/shared/utils"

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
  action?: ReactNode
  className?: string
  contentClassName?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  action,
  className,
  contentClassName,
}: SectionTitleProps) {
  const isSplit = Boolean(action) && align === "left"

  return (
    <div
      className={cn(
        isSplit
          ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : "mx-auto max-w-2xl",
        align === "left" && !isSplit && "mx-0 text-left",
        align === "center" && !isSplit && "text-center",
        align === "right" && !isSplit && "mr-0 text-right",
        className
      )}
    >
      <div className={cn(isSplit && "max-w-2xl", contentClassName)}>
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--site-primary)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-bold text-[var(--site-text)] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-[var(--site-muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
