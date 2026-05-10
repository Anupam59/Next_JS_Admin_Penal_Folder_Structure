import { SiteFooter } from "@/components/site/layout/SiteFooter"
import { SiteHeader } from "@/components/site/layout/SiteHeader"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
