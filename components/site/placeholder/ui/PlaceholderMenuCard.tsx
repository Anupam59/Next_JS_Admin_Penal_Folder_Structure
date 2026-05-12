import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { cn } from "@/lib/shared/utils"

type PlaceholderMenuCardProps = {
  className?: string
}

export function PlaceholderMenuCard({ className }: PlaceholderMenuCardProps) {
  return (
    <SiteCard className={cn("overflow-hidden p-4", className)}>
      <PlaceholderBlock className="h-3 w-20 rounded-full" />
      <PlaceholderBlock className="mt-2 h-3 w-12 rounded-full" />
      <PlaceholderBlock className="mt-3 aspect-[1.25] w-full" />
      <div className="mt-3 space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-[var(--site-primary)]/40" />
            <PlaceholderBlock className="h-2.5 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </SiteCard>
  )
}
