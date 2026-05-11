import type { ReactNode } from "react"

import { cn } from "@/lib/shared/utils"

type SiteCardProps = {
  children: ReactNode
  className?: string
}

export function SiteCard({ children, className }: SiteCardProps) {
  return (
    <div className={cn("site-card rounded-md", className)}>
      {children}
    </div>
  )
}
