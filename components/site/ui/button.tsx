import * as React from "react"

import { cn } from "@/lib/shared/utils"

type SiteButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary"
}

export function SiteButton({
  className,
  variant = "primary",
  ...props
}: SiteButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary"
          ? "bg-[var(--site-primary)] text-white hover:bg-[var(--site-primary-strong)]"
          : "border border-[var(--site-border)] bg-[var(--site-surface)] text-[var(--site-primary)] hover:bg-[var(--site-primary-soft)]",
        className
      )}
      {...props}
    />
  )
}
