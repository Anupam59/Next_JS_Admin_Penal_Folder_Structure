import type { SitePackage } from "@/types/site/package.type"

type PackageSummaryProps = {
  item: SitePackage
}

export function PackageSummary({ item }: PackageSummaryProps) {
  return (
    <article className="site-card rounded-md p-5">
      <h2 className="text-base font-bold text-[var(--site-text)]">
        {item.name} Plan
      </h2>
      <p className="mt-1 text-xs font-semibold text-[var(--site-primary)]">
        {item.mealsPerMonth} meals monthly
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--site-muted)]">
        {item.description}
      </p>
      <p className="mt-4 text-sm font-bold text-[var(--site-primary)]">
        Tk {item.price.toLocaleString("en-US")} / month
      </p>
    </article>
  )
}
