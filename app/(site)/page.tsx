import { CtaSection } from "@/components/site/pages/home/CtaSection"
import { HeroSection } from "@/components/site/pages/home/HeroSection"
import { HowItWorksSection } from "@/components/site/pages/home/HowItWorksSection"
import { PricingSection } from "@/components/site/pages/home/PricingSection"
import { StatsSection } from "@/components/site/pages/home/StatsSection"
import { TestimonialSection } from "@/components/site/pages/home/TestimonialSection"
import { WeeklyMenuSection } from "@/components/site/pages/home/WeeklyMenuSection"
import { WhyChooseSection } from "@/components/site/pages/home/WhyChooseSection"
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
