import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"

import { ThemeProvider } from "@/components/shared/theme-provider"
import "@/styles/globals.css"

const siteFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-site",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MealMate",
  description: "Smart meal subscription and admin system.",
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
      className={`${siteFont.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
