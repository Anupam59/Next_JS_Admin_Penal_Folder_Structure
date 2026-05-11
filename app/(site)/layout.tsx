import { SiteFooter } from "@/components/site/layout/SiteFooter"
import { SiteHeader } from "@/components/site/layout/SiteHeader"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="site-theme">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
