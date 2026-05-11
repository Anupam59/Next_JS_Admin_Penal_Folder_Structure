import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AppleIcon,
  Facebook01Icon,
  GoogleIcon,
  InstagramIcon,
  ShoppingBasket03Icon,
} from "@hugeicons/core-free-icons"

const footerGroups = [
  {
    title: "Company",
    links: ["About Us", "How It Works", "Pricing", "Careers", "Contact Us"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy"],
  },
  {
    title: "Menu",
    links: ["This Week's Menu", "All Packages", "Meal Plans", "Custom Meal"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--site-border)] bg-[var(--site-surface)]">
      <div className="site-container grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-full border-2 border-[var(--site-primary)] text-[var(--site-primary)]">
              <HugeiconsIcon icon={ShoppingBasket03Icon} size={20} />
            </span>
            <span className="text-lg font-bold text-[var(--site-text)]">
              Meal<span className="text-[var(--site-primary)]">Mate</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--site-muted)]">
            Healthy, hygienic and delicious meals delivered at your doorstep.
          </p>
          <div className="mt-5 flex gap-2 text-[var(--site-muted)]">
            {[Facebook01Icon, InstagramIcon, GoogleIcon].map((icon, index) => (
              <span
                key={index}
                className="grid size-8 place-items-center rounded-full bg-[var(--site-primary-soft)]"
              >
                <HugeiconsIcon icon={icon} size={15} />
              </span>
            ))}
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold text-[var(--site-text)]">
              {group.title}
            </h3>
            <div className="mt-4 space-y-2">
              {group.links.map((link) => (
                <p key={link} className="text-sm text-[var(--site-muted)]">
                  {link}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-bold text-[var(--site-text)]">
            Download App
          </h3>
          <p className="mt-4 text-sm leading-6 text-[var(--site-muted)]">
            Get our app for a better meal planning experience.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[GoogleIcon, AppleIcon].map((icon, index) => (
              <span
                key={index}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-slate-950 px-3 text-xs font-semibold text-white"
              >
                <HugeiconsIcon icon={icon} size={16} />
                {index === 0 ? "Google Play" : "App Store"}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--site-border)] py-4 text-center text-xs text-[var(--site-muted)]">
        © 2026 MealMate. All rights reserved.
      </div>
    </footer>
  )
}
