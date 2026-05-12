import { SiteCard } from "@/components/site/ui/card"
import { PlaceholderBlock } from "@/components/site/placeholder/ui/PlaceholderBlock"

export function PlaceholderCtaSection() {
  return (
    <section className="site-container py-8">
      <SiteCard className="grid items-center gap-8 bg-[var(--site-primary-soft)] p-8 md:grid-cols-[1fr_auto_0.7fr]">
        <div className="space-y-3">
          <PlaceholderBlock className="h-8 w-full max-w-md" />
          <PlaceholderBlock className="h-8 w-full max-w-sm" />
          <PlaceholderBlock className="h-3 w-full max-w-md rounded-full" />
          <PlaceholderBlock className="h-3 w-3/4 rounded-full" />
        </div>
        <PlaceholderBlock className="h-11 w-40" />
        <PlaceholderBlock className="hidden h-48 w-48 justify-self-end rounded-full md:block" />
      </SiteCard>
    </section>
  )
}
