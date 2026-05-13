import {
  Calendar03Icon,
  ChefHatIcon,
  DeliveryTruck01Icon,
  Location03Icon,
  ShoppingBasket03Icon,
} from "@hugeicons/core-free-icons"

import { SiteCard } from "@/components/site/ui/card"
import { SiteIconBox } from "@/components/site/ui/icon-box"
import { SectionTitle } from "@/components/site/common/SectionTitle"

const steps = [
  { title: "Choose Package", text: "Select your preferred meal package.", icon: ShoppingBasket03Icon },
  { title: "Set Your Schedule", text: "Plan your meals on the calendar.", icon: Calendar03Icon },
  { title: "We Prepare", text: "We cook fresh and hygienic meals.", icon: ChefHatIcon },
  { title: "We Deliver", text: "Your meal is delivered to your doorstep.", icon: DeliveryTruck01Icon },
  { title: "Enjoy Your Meal", text: "Enjoy delicious and healthy food.", icon: Location03Icon },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="site-container scroll-mt-24 py-8">
      <SiteCard className="p-6 sm:p-8">
        <SectionTitle title="How It Works" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <span className="absolute left-1/2 top-0 z-10 grid size-8 -translate-x-1/2 -translate-y-3 place-items-center rounded-full bg-[var(--site-primary)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <SiteIconBox
                icon={step.icon}
                tone={index % 2 ? "orange" : "green"}
                className="mx-auto mt-5 size-16"
              />
              <h3 className="mt-4 text-sm font-bold text-[var(--site-text)]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-32 text-xs leading-5 text-[var(--site-muted)]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </SiteCard>
    </section>
  )
}
