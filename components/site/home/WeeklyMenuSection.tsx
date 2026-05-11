import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { SiteCard } from "@/components/site/ui/card"
import type { WeeklyMenuItem } from "@/types/site/menu.type"

type WeeklyMenuSectionProps = {
  items: WeeklyMenuItem[]
}

export function WeeklyMenuSection({ items }: WeeklyMenuSectionProps) {
  return (
    <section id="menu" className="site-container scroll-mt-24 py-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[var(--site-text)]">
            This Week&apos;s Menu Preview
          </h2>
          <p className="mt-2 text-sm text-[var(--site-muted)]">
            Fresh meals planned for the week.
          </p>
        </div>
        <Link
          href="/package"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--site-primary)]"
        >
          View Full Menu
          <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item) => (
          <SiteCard key={item.id} className="overflow-hidden p-4">
            <div className="text-xs font-bold text-[var(--site-text)]">
              {item.day}, {item.date}
            </div>
            <p className="mt-1 text-xs font-bold text-[var(--site-primary)]">
              {item.mealType}
            </p>
            <Image
              src={item.image}
              alt={`${item.day} ${item.mealType} meal`}
              width={360}
              height={250}
              className="mt-3 aspect-[1.25] w-full rounded-md object-cover"
            />
            <ul className="mt-3 space-y-1.5 text-xs text-[var(--site-text)]">
              {item.items.map((meal) => (
                <li key={meal} className="flex gap-2">
                  <span className="mt-1 size-1 rounded-full bg-[var(--site-primary)]" />
                  {meal}
                </li>
              ))}
            </ul>
          </SiteCard>
        ))}
      </div>
    </section>
  )
}
