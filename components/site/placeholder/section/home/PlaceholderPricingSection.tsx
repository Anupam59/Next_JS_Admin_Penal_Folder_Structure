import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { PlaceholderSectionTitle } from "@/components/site/placeholder/ui/PlaceholderSectionTitle"

export function PlaceholderPricingSection() {
  return (
    <section className="site-container py-8">
      <SiteCard className="p-6 sm:p-8">
        <PlaceholderSectionTitle />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SiteCard key={index} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <PlaceholderBlock className="h-5 w-28 rounded-full" />
                  <PlaceholderBlock className="h-3 w-32 rounded-full" />
                </div>
                <PlaceholderBlock className="size-12 rounded-full" />
              </div>
              <PlaceholderBlock className="mt-6 h-8 w-40 rounded-md" />
              <div className="mt-6 space-y-3">
                {Array.from({ length: 4 }).map((_, featureIndex) => (
                  <PlaceholderBlock
                    key={featureIndex}
                    className="h-3 w-36 rounded-full"
                  />
                ))}
              </div>
              <PlaceholderBlock className="mt-8 h-11 w-full" />
            </SiteCard>
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
