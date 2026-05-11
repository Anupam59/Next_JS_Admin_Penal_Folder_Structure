export type SitePackage = {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  mealsPerMonth: number
  color: "green" | "orange" | "purple" | "blue"
  popular?: boolean
  features: string[]
}
