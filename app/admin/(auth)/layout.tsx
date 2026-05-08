export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f7f8fb] px-4 py-6 text-slate-950 dark:bg-[#0f1117] dark:text-white sm:px-6">
      <div className="pointer-events-none absolute -bottom-24 -left-32 size-64 rounded-full bg-blue-100/60 dark:bg-blue-500/5 sm:size-80" />
      <div className="pointer-events-none absolute -right-24 bottom-12 size-40 rotate-45 rounded-[2rem] bg-rose-100/40 dark:bg-blue-500/5 sm:size-48" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-20 w-20 -translate-x-1/2 rounded-full bg-white/60 blur-3xl dark:bg-blue-500/10 sm:top-14 sm:h-24 sm:w-24" />
      {children}
    </main>
  )
}
