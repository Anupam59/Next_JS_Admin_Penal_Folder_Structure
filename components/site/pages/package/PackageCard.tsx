import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  HotPriceIcon,
  PackageIcon,
  SecurityCheckIcon,
  ShoppingBasket03Icon,
} from "@hugeicons/core-free-icons"

import { SiteButton } from "@/components/site/ui/button"
import { SiteCard } from "@/components/site/ui/card"
import { SiteIconBox } from "@/components/site/ui/icon-box"
import { cn } from "@/lib/shared/utils"
import type { SitePackage } from "@/types/site/package.type"

type PackageCardProps = {
  item: SitePackage
}

const toneIcon = {
  green: SecurityCheckIcon,
  orange: HotPriceIcon,
  purple: PackageIcon,
  blue: ShoppingBasket03Icon,
}

const toneClassName = {
  green: "border-[var(--site-border)]",
  orange: "border-[var(--site-accent)]",
  purple: "border-purple-300 dark:border-purple-500/40",
  blue: "border-blue-300 dark:border-blue-500/40",
}

export function PackageCard({ item }: PackageCardProps) {
  return (
    <SiteCard
      className={cn(
        "relative p-6",
        item.popular && "ring-2 ring-[var(--site-accent)]/30",
        toneClassName[item.color]
      )}
    >
      {item.popular ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--site-accent)] px-4 py-1 text-xs font-bold text-white">
          Most Popular
        </span>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[var(--site-text)]">
            {item.name} Plan
          </h3>
          <p className="mt-1 text-xs text-[var(--site-muted)]">
            {item.tagline}
          </p>
        </div>
        <SiteIconBox icon={toneIcon[item.color]} tone={item.color} />
      </div>
      <div className="mt-6">
        <span className="text-3xl font-black text-[var(--site-text)]">
          Tk {item.price.toLocaleString("en-US")}
        </span>
        <span className="text-sm text-[var(--site-muted)]"> / month</span>
      </div>
      <ul className="mt-6 space-y-3">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-[var(--site-text)]"
          >
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              size={16}
              className="text-[var(--site-primary)]"
            />
            {feature}
          </li>
        ))}
      </ul>
      <SiteButton
        variant={item.popular ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Get Started
      </SiteButton>
    </SiteCard>
  )
}
