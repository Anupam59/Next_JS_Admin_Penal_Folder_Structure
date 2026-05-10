import { PackageSummary } from "@/components/site/package/PackageSummary"
import { getSitePackages } from "@/services/site/packages.service"

export default async function PackagePage() {
  const packages = await getSitePackages()

  return (
    <section className="mx-auto min-h-[calc(100svh-8rem)] max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Packages
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-950">
        Package page is ready.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        We can build the user package listing, package details, purchase flow,
        and customer dashboard from this route next.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((item) => (
          <PackageSummary key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
