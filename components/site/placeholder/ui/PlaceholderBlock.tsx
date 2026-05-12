import { cn } from "@/lib/shared/utils"

type PlaceholderBlockProps = {
  className?: string
}

export function PlaceholderBlock({ className }: PlaceholderBlockProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[var(--site-primary-soft)]",
        className
      )}
    />
  )
}
