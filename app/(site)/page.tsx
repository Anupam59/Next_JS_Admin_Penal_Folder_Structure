import Link from "next/link"

import { HomeIntro } from "@/components/site/home/HomeIntro"
import { SiteButton } from "@/components/site/ui/button"
import { cn } from "@/lib/shared/utils"

export default function SiteHomePage() {
  return (
    <section className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          User Website
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
          Meal System public site starts here.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          This route is separated from the admin panel and ready for home,
          package, pricing, and customer-facing features.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SiteButton>Explore Packages</SiteButton>
          <Link
            href="/admin"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
            )}
          >
            Admin Panel
          </Link>
        </div>
      </div>
      <HomeIntro />
    </section>
  )
}
