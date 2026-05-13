import {
  Clock05Icon,
  MenuRestaurantIcon,
  RiceBowl01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

import { SiteCard } from "@/components/site/ui/card"
import { SiteIconBox } from "@/components/site/ui/icon-box"

const stats = [
  { value: "5000+", label: "Happy Customers", icon: UserGroupIcon },
  { value: "50K+", label: "Meals Delivered", icon: RiceBowl01Icon },
  { value: "20+", label: "Menu Varieties", icon: MenuRestaurantIcon },
  { value: "99%", label: "On-time Delivery", icon: Clock05Icon },
]

export function StatsSection() {
  return (
    <section className="site-container py-6">
      <SiteCard className="grid gap-5 bg-[var(--site-primary-soft)] p-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-4">
            <SiteIconBox icon={item.icon} className="size-10" />
            <div>
              <p className="text-2xl font-black text-[var(--site-primary)]">
                {item.value}
              </p>
              <p className="text-xs text-[var(--site-muted)]">{item.label}</p>
            </div>
          </div>
        ))}
      </SiteCard>
    </section>
  )
}
