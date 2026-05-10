import type { SitePackage } from "@/types/site/package.type"

type PackageSummaryProps = {
  item: SitePackage
}

export function PackageSummary({ item }: PackageSummaryProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-950">{item.name}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {item.description}
      </p>
      <p className="mt-4 text-sm font-semibold text-blue-600">
        ${item.price}
      </p>
    </article>
  )
}
