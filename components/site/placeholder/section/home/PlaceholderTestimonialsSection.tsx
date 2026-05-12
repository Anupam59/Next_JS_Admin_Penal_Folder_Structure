import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { PlaceholderSectionTitle } from "@/components/site/placeholder/ui/PlaceholderSectionTitle"

export function PlaceholderTestimonialsSection() {
  return (
    <section className="site-container py-8">
      <PlaceholderSectionTitle />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <SiteCard key={index} className="p-6">
            <PlaceholderBlock className="size-8 rounded-full" />
            <div className="mt-4 space-y-2">
              <PlaceholderBlock className="h-3 w-full rounded-full" />
              <PlaceholderBlock className="h-3 w-full rounded-full" />
              <PlaceholderBlock className="h-3 w-3/4 rounded-full" />
            </div>
            <PlaceholderBlock className="mt-4 h-4 w-24 rounded-full" />
            <div className="mt-5 flex items-center gap-3">
              <PlaceholderBlock className="size-11 rounded-full" />
              <div className="space-y-2">
                <PlaceholderBlock className="h-3 w-24 rounded-full" />
                <PlaceholderBlock className="h-3 w-16 rounded-full" />
              </div>
            </div>
          </SiteCard>
        ))}
      </div>
    </section>
  )
}
