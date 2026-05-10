import type { Metadata } from "next"

import { ThemeProvider } from "@/components/shared/theme-provider"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Meal System Admin",
  description: "Admin panel for the Meal System Software.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="font-sans antialiased"
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
