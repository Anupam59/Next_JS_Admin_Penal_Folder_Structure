import { PackageSummary } from "@/components/site/package/PackageSummary"
import { PricingSection } from "@/components/site/home/PricingSection"
import { WeeklyMenuSection } from "@/components/site/home/WeeklyMenuSection"
import { SectionTitle } from "@/components/site/ui/section-title"
import { getWeeklyMenu } from "@/services/site/menu.service"
import { getSitePackages } from "@/services/site/packages.service"

export default async function PackagePage() {
  const [packages, menuItems] = await Promise.all([
    getSitePackages(),
    getWeeklyMenu(),
  ])

  return (
    <>
      <section className="site-container py-14">
        <SectionTitle
          eyebrow="Meal Packages"
          title="Pick a plan that fits your routine"
          description="Choose from budget, balanced and premium meal plans. You can customize menu preferences after selecting a plan."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((item) => (
            <PackageSummary key={item.id} item={item} />
          ))}
        </div>
      </section>
      <PricingSection packages={packages} />
      <WeeklyMenuSection items={menuItems} />
    </>
  )
}
