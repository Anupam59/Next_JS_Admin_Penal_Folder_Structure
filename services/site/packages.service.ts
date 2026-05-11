import type { SitePackage } from "@/types/site/package.type"

const demoPackages: SitePackage[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Perfect for regular meals",
    description: "Simple everyday meal plan with balanced lunch delivery.",
    price: 2100,
    mealsPerMonth: 20,
    color: "green",
    features: ["20 Meals / Month", "1 Package Choice", "Standard Delivery", "Support"],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Great for balanced diet",
    description: "Flexible plan for daily food variety and priority service.",
    price: 2800,
    mealsPerMonth: 26,
    color: "orange",
    popular: true,
    features: ["26 Meals / Month", "Multiple Packages", "Priority Delivery", "24/7 Support"],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Best for food lovers",
    description: "Complete plan with all package access and express delivery.",
    price: 3600,
    mealsPerMonth: 30,
    color: "purple",
    features: ["30 Meals / Month", "All Packages", "Express Delivery", "Premium Support"],
  },
  {
    id: "student",
    name: "Student",
    tagline: "Budget friendly meal plan",
    description: "Affordable monthly meals for students and shared homes.",
    price: 1800,
    mealsPerMonth: 18,
    color: "blue",
    features: ["18 Meals / Month", "1 Package Choice", "Standard Delivery", "Support"],
  },
]

export async function getSitePackages() {
  return demoPackages
}
