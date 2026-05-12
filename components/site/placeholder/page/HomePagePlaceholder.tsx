import { PlaceholderCtaSection } from "@/components/site/placeholder/section/home/PlaceholderCtaSection"
import { PlaceholderHeroSection } from "@/components/site/placeholder/section/home/PlaceholderHeroSection"
import { PlaceholderHowItWorksSection } from "@/components/site/placeholder/section/home/PlaceholderHowItWorksSection"
import { PlaceholderPricingSection } from "@/components/site/placeholder/section/home/PlaceholderPricingSection"
import { PlaceholderStatsSection } from "@/components/site/placeholder/section/home/PlaceholderStatsSection"
import { PlaceholderTestimonialsSection } from "@/components/site/placeholder/section/home/PlaceholderTestimonialsSection"
import { PlaceholderWeeklyMenuSection } from "@/components/site/placeholder/section/home/PlaceholderWeeklyMenuSection"
import { PlaceholderWhyChooseSection } from "@/components/site/placeholder/section/home/PlaceholderWhyChooseSection"

export function HomePagePlaceholder() {
  return (
    <>
      <PlaceholderHeroSection />
      <PlaceholderWhyChooseSection />
      <PlaceholderHowItWorksSection />
      <PlaceholderWeeklyMenuSection />
      <PlaceholderPricingSection />
      <PlaceholderStatsSection />
      <PlaceholderTestimonialsSection />
      <PlaceholderCtaSection />
    </>
  )
}
