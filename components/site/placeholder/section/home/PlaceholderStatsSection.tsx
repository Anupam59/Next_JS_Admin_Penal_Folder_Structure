import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"

export function PlaceholderStatsSection() {
  return (
    <section className="site-container py-6">
      <SiteCard className="grid gap-5 bg-[var(--site-primary-soft)] p-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center gap-4">
            <PlaceholderBlock className="size-10 rounded-full" />
            <div className="space-y-2">
              <PlaceholderBlock className="h-6 w-20 rounded-full" />
              <PlaceholderBlock className="h-3 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </SiteCard>
    </section>
  )
}
