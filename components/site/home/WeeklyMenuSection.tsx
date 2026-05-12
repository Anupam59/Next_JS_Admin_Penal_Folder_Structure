import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { MenuCard } from "@/components/site/common/MenuCard"
import { SectionTitle } from "@/components/site/common/SectionTitle"
import type { WeeklyMenuItem } from "@/types/site/menu.type"

type WeeklyMenuSectionProps = {
  items: WeeklyMenuItem[]
}

export function WeeklyMenuSection({ items }: WeeklyMenuSectionProps) {
  return (
    <section id="menu" className="site-container scroll-mt-24 py-8">
      <SectionTitle
        align="left"
        title="This Week's Menu Preview"
        description="Fresh meals planned for the week."
        action={
          <Link
            href="/package"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--site-primary)]"
          >
            View Full Menu
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
          </Link>
        }
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
