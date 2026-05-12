import { PlaceholderMenuCard } from "@/components/site/placeholder/ui/PlaceholderMenuCard"
import { PlaceholderSectionTitle } from "@/components/site/placeholder/ui/PlaceholderSectionTitle"

export function PlaceholderWeeklyMenuSection() {
  return (
    <section className="site-container py-8">
      <PlaceholderSectionTitle align="left" hasAction />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <PlaceholderMenuCard key={index} />
        ))}
      </div>
    </section>
  )
}
