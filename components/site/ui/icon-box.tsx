import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

import { cn } from "@/lib/shared/utils"

type SiteIconBoxProps = {
  icon: IconSvgElement
  tone?: "green" | "orange" | "purple" | "blue"
  className?: string
}

const toneClassName = {
  green: "bg-[var(--site-primary-soft)] text-[var(--site-primary)]",
  orange: "bg-[var(--site-accent-soft)] text-[var(--site-accent)]",
  purple: "bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-300",
  blue: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
}

export function SiteIconBox({
  icon,
  tone = "green",
  className,
}: SiteIconBoxProps) {
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-full",
        toneClassName[tone],
        className
      )}
    >
      <HugeiconsIcon icon={icon} size={24} strokeWidth={1.8} />
    </span>
  )
}
