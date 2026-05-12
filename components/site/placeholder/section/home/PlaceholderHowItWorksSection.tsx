import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"
import { PlaceholderSectionTitle } from "@/components/site/placeholder/ui/PlaceholderSectionTitle"

export function PlaceholderHowItWorksSection() {
  return (
    <section className="site-container py-8">
      <SiteCard className="p-6 sm:p-8">
        <PlaceholderSectionTitle />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid place-items-center text-center">
              <PlaceholderBlock className="size-8 rounded-full" />
              <PlaceholderBlock className="mt-4 size-16 rounded-full" />
              <PlaceholderBlock className="mt-4 h-4 w-28 rounded-full" />
              <PlaceholderBlock className="mt-2 h-3 w-24 rounded-full" />
            </div>
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
