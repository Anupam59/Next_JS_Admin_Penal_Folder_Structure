import Link from "next/link"

import { SiteButton } from "@/components/site/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Package", href: "/package" },
]

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold text-slate-950">
          Meal System
        </Link>
        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <SiteButton className="hidden sm:inline-flex">Get Started</SiteButton>
        </nav>
      </div>
    </header>
  )
}
