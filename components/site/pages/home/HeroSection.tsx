import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Calendar03Icon,
  DeliveryTruck01Icon,
  RiceBowl01Icon,
  SecurityCheckIcon,
  ShoppingBasket03Icon,
} from "@hugeicons/core-free-icons"

import { SiteBadge } from "@/components/site/ui/badge"
import { SiteButton } from "@/components/site/ui/button"
import { SiteIconBox } from "@/components/site/ui/icon-box"
import { cn } from "@/lib/shared/utils"

const highlights = [
  { label: "Flexible Schedule", icon: Calendar03Icon },
  { label: "Multiple Packages", icon: ShoppingBasket03Icon },
  { label: "On-time Delivery", icon: DeliveryTruck01Icon },
  { label: "Safe & Hygienic", icon: SecurityCheckIcon },
]

export function HeroSection() {
  return (
    <section className="site-container grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
      <div>
        <SiteBadge>Smart Meal Subscription</SiteBadge>
        <h1 className="mt-5 max-w-xl text-5xl font-black leading-[1.05] text-[var(--site-text)] sm:text-6xl">
          Healthy Meals,
          <span className="block text-[var(--site-primary)]">
            Delivered Daily
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-8 text-[var(--site-muted)]">
          Schedule your meals, choose your favorite packages, and enjoy homely,
          healthy and delicious food delivered at your doorstep.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <SiteButton>
            Get Started Now
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </SiteButton>
          <Link
            href="/package"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-md border border-[var(--site-primary)] bg-transparent px-5 text-sm font-semibold text-[var(--site-primary)] transition-colors hover:bg-[var(--site-primary-soft)]"
            )}
          >
            View Menu
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <SiteIconBox icon={item.icon} className="mx-auto size-10" />
              <p className="mt-3 text-xs font-semibold text-[var(--site-text)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-[430px]">
        <div className="absolute inset-6 rounded-[45%] bg-[var(--site-primary-soft)]" />
        <Image
          src="/site/hero-meal.png"
          alt="MealMate healthy rice, curry and vegetable meal plate"
          width={1000}
          height={720}
          priority
          className="relative z-10 h-auto w-full drop-shadow-2xl"
        />
        <div className="site-card absolute bottom-10 left-4 z-20 max-w-48 rounded-md p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[var(--site-text)]">
            <HugeiconsIcon
              icon={RiceBowl01Icon}
              size={17}
              className="text-[var(--site-primary)]"
            />
            Daily Fresh Meals
          </div>
          <p className="mt-3 text-xs leading-5 text-[var(--site-muted)]">
            Cooked with love and delivered fresh every day.
          </p>
        </div>
      </div>
    </section>
  )
}
