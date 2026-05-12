import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { cn } from "@/lib/shared/utils"

type PlaceholderSectionTitleProps = {
  align?: "left" | "center" | "right"
  hasAction?: boolean
  className?: string
}

export function PlaceholderSectionTitle({
  align = "center",
  hasAction = false,
  className,
}: PlaceholderSectionTitleProps) {
  const isSplit = hasAction && align === "left"

  return (
    <div
      className={cn(
        isSplit
          ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : "mx-auto max-w-2xl",
        align === "left" && !isSplit && "mx-0",
        align === "right" && !isSplit && "mr-0",
        className
      )}
    >
      <div
        className={cn(
          "space-y-3",
          isSplit && "max-w-2xl",
          align === "center" && !isSplit && "mx-auto",
          align === "right" && !isSplit && "ml-auto"
        )}
      >
        <PlaceholderBlock
          className={cn(
            "h-3 w-28 rounded-full bg-[var(--site-primary-soft)]",
            align === "center" && !isSplit && "mx-auto",
            align === "right" && !isSplit && "ml-auto"
          )}
        />
        <PlaceholderBlock
          className={cn(
            "h-8 w-72 max-w-full rounded-md bg-[var(--site-primary-soft)]",
            align === "center" && !isSplit && "mx-auto",
            align === "right" && !isSplit && "ml-auto"
          )}
        />
        <PlaceholderBlock
          className={cn(
            "h-3 w-96 max-w-full rounded-full bg-[var(--site-primary-soft)]",
            align === "center" && !isSplit && "mx-auto",
            align === "right" && !isSplit && "ml-auto"
          )}
        />
      </div>
      {hasAction ? (
        <PlaceholderBlock className="h-5 w-28 rounded-full" />
      ) : null}
    </div>
  )
}
