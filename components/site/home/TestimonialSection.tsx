import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { LeftToRightBlockQuoteIcon } from "@hugeicons/core-free-icons"

import { SiteCard } from "@/components/site/ui/card"
import { SectionTitle } from "@/components/site/ui/section-title"
import type { Testimonial } from "@/types/site/testimonial.type"

type TestimonialSectionProps = {
  items: Testimonial[]
}

export function TestimonialSection({ items }: TestimonialSectionProps) {
  return (
    <section className="site-container py-8">
      <SectionTitle title="What Our Customers Say" />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <SiteCard key={item.id} className="p-6">
            <HugeiconsIcon
              icon={LeftToRightBlockQuoteIcon}
              size={24}
              className="text-[var(--site-primary)]"
            />
            <p className="mt-4 text-sm leading-7 text-[var(--site-text)]">
              {item.quote}
            </p>
            <div className="mt-4 text-[var(--site-accent)]">
              {"*".repeat(item.rating)}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={`${item.name} avatar`}
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-[var(--site-text)]">
                  {item.name}
                </p>
                <p className="text-xs text-[var(--site-muted)]">{item.city}</p>
              </div>
            </div>
          </SiteCard>
        ))}
      </div>
    </section>
  )
}
