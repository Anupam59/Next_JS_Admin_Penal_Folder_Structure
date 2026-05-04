export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-6 text-foreground">
      {children}
    </main>
  )
}
