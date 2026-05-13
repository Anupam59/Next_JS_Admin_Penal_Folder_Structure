import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { SiteButton } from "@/components/site/ui/button"
import { SiteCard } from "@/components/site/ui/card"

export function CtaSection() {
  return (
    <section id="contact" className="site-container scroll-mt-24 py-8">
      <SiteCard className="grid items-center gap-8 overflow-hidden bg-[var(--site-primary-soft)] p-8 md:grid-cols-[1fr_auto_0.7fr]">
        <div>
          <h2 className="max-w-md text-3xl font-black leading-tight text-[var(--site-text)]">
            Ready to enjoy healthy homely meals every day?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--site-muted)]">
            Join thousands of happy customers and start your meal journey with
            MealMate.
          </p>
        </div>
        <SiteButton className="w-fit">
          Get Started Now
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </SiteButton>
        <Image
          src="/site/cta-customer.png"
          alt="Happy MealMate customer holding a meal bowl"
          width={420}
          height={360}
          className="hidden max-h-56 w-auto justify-self-end object-contain md:block"
        />
      </SiteCard>
    </section>
  )
}
