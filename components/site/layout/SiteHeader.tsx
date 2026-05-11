import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ShoppingBasket03Icon } from "@hugeicons/core-free-icons"

import { SiteThemeToggle } from "@/components/site/layout/SiteThemeToggle"
import { SiteButton } from "@/components/site/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--site-border)] bg-[var(--site-surface)]/90 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-full border-2 border-[var(--site-primary)] text-[var(--site-primary)]">
            <HugeiconsIcon
              icon={ShoppingBasket03Icon}
              size={21}
              strokeWidth={1.8}
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-[var(--site-text)]">
              Meal<span className="text-[var(--site-primary)]">Mate</span>
            </span>
            <span className="block text-[0.68rem] font-medium text-[var(--site-muted)]">
              Smart Meal Solution
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--site-muted)] hover:text-[var(--site-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SiteThemeToggle />
          <SiteButton variant="secondary" className="hidden sm:inline-flex">
            Login
          </SiteButton>
          <SiteButton className="hidden sm:inline-flex">Get Started</SiteButton>
        </div>
      </div>
    </header>
  )
}
