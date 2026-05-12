import { CtaSection } from "@/components/site/home/CtaSection"
import { HeroSection } from "@/components/site/home/HeroSection"
import { HowItWorksSection } from "@/components/site/home/HowItWorksSection"
import { PricingSection } from "@/components/site/home/PricingSection"
import { StatsSection } from "@/components/site/home/StatsSection"
import { TestimonialSection } from "@/components/site/home/TestimonialSection"
import { WeeklyMenuSection } from "@/components/site/home/WeeklyMenuSection"
import { WhyChooseSection } from "@/components/site/home/WhyChooseSection"
import { getWeeklyMenu } from "@/services/site/menu.service"
import { getSitePackages } from "@/services/site/packages.service"
import { getTestimonials } from "@/services/site/testimonials.service"

const placeholderTestDelay = 5000

export default async function SiteHomePage() {
  await new Promise((resolve) => setTimeout(resolve, placeholderTestDelay))

  const [menuItems, packages, testimonials] = await Promise.all([
    getWeeklyMenu(),
    getSitePackages(),
    getTestimonials(),
  ])

  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <WeeklyMenuSection items={menuItems} />
      <PricingSection packages={packages} />
      <StatsSection />
      <TestimonialSection items={testimonials} />
      <CtaSection />
    </>
  )
}
