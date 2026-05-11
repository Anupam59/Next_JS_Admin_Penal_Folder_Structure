import {
  Calendar03Icon,
  DeliveryTruck01Icon,
  HotPriceIcon,
  MenuRestaurantIcon,
  SecurityCheckIcon,
  ShoppingBasket03Icon,
} from "@hugeicons/core-free-icons"

import { SiteCard } from "@/components/site/ui/card"
import { SiteIconBox } from "@/components/site/ui/icon-box"
import { SectionTitle } from "@/components/site/ui/section-title"

const benefits = [
  {
    title: "Healthy & Hygienic",
    text: "We maintain high hygiene standards in every meal.",
    icon: SecurityCheckIcon,
    tone: "green" as const,
  },
  {
    title: "Flexible & Easy",
    text: "Customize your meal schedule anytime.",
    icon: Calendar03Icon,
    tone: "orange" as const,
  },
  {
    title: "Variety of Choices",
    text: "Multiple packages with delicious meals.",
    icon: MenuRestaurantIcon,
    tone: "purple" as const,
  },
  {
    title: "On-time Delivery",
    text: "Meals delivered fresh and on-time every day.",
    icon: DeliveryTruck01Icon,
    tone: "orange" as const,
  },
  {
    title: "Affordable Pricing",
    text: "Quality meals at reasonable prices.",
    icon: HotPriceIcon,
    tone: "green" as const,
  },
  {
    title: "Multiple Packages",
    text: "Pick the package that fits your routine.",
    icon: ShoppingBasket03Icon,
    tone: "blue" as const,
  },
]

export function WhyChooseSection() {
  return (
    <section id="about" className="site-container scroll-mt-24 py-8">
      <SiteCard className="p-6 sm:p-8">
        <SectionTitle title="Why Choose MealMate?" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-4">
              <SiteIconBox icon={item.icon} tone={item.tone} />
              <div>
                <h3 className="text-sm font-bold text-[var(--site-text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[var(--site-muted)]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
