import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { PlaceholderSectionTitle } from "@/components/site/placeholder/ui/PlaceholderSectionTitle"

export function PlaceholderWhyChooseSection() {
  return (
    <section className="site-container py-8">
      <SiteCard className="p-6 sm:p-8">
        <PlaceholderSectionTitle />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex gap-4">
              <PlaceholderBlock className="size-12 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <PlaceholderBlock className="h-4 w-36 rounded-full" />
                <PlaceholderBlock className="h-3 w-full rounded-full" />
                <PlaceholderBlock className="h-3 w-3/4 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
