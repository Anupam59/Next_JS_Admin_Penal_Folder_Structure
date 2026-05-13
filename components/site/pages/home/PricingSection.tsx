import { PackageCard } from "@/components/site/pages/package/PackageCard"
import { SiteCard } from "@/components/site/ui/card"
import { SectionTitle } from "@/components/site/common/SectionTitle"
import type { SitePackage } from "@/types/site/package.type"

type PricingSectionProps = {
  packages: SitePackage[]
}

export function PricingSection({ packages }: PricingSectionProps) {
  return (
    <section id="pricing" className="site-container scroll-mt-24 py-8">
      <SiteCard className="p-6 sm:p-8">
        <SectionTitle
          title="Choose Your Plan"
          description="Simple, transparent pricing. No hidden charges."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => (
            <PackageCard key={item.id} item={item} />
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
