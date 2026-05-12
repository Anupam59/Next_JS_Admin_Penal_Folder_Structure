import Image from "next/image"

import { SiteCard } from "@/components/site/ui/card"
import type { WeeklyMenuItem } from "@/types/site/menu.type"

type MenuCardProps = {
  item: WeeklyMenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <SiteCard className="overflow-hidden p-4">
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
  )
}
