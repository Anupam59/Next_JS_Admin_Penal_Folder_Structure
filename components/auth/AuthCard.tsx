import type { ReactNode } from "react"

type AuthCardProps = {
  title: string
  description: ReactNode
  children: ReactNode
}

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <section className="relative z-10 w-full max-w-sm sm:max-w-md">
      <div className="mb-5 flex justify-center sm:mb-7">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="grid size-9 place-items-center rounded-md bg-blue-600 text-base font-bold text-white sm:size-10 sm:text-lg">
            M
          </div>
          <span className="text-lg font-bold tracking-wide text-slate-950 dark:text-white sm:text-xl">
            MEAL<span className="text-blue-600">SYS</span>
          </span>
        </div>
      </div>

      <div className="rounded-md bg-white px-5 py-6 shadow-xl shadow-slate-200/70 dark:bg-[#171a23] dark:shadow-none sm:px-7 sm:py-8">
        <div className="mb-6 text-center sm:mb-7">
          <h1 className="text-lg font-semibold text-slate-950 dark:text-white sm:text-xl">
            {title}
          </h1>
          <div className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
            {description}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
