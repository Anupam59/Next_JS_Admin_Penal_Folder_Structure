import type { SitePackage } from "@/types/site/package.type"

const demoPackages: SitePackage[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Starter package placeholder for the public site.",
    price: 0,
  },
]

export async function getSitePackages() {
  return demoPackages
}
