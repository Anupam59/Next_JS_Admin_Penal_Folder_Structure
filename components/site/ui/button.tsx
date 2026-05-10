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
        "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
        className
      )}
      {...props}
    />
  )
}
