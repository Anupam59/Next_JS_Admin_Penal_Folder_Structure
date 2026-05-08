import type { ReactNode } from "react"

type PageHeaderProps = {
  title: string
  breadcrumbs?: string[]
  actions?: ReactNode
}

export function PageHeader({
  title,
  breadcrumbs = ["Home", "Admin"],
  actions,
}: PageHeaderProps) {
  return (
    <div className="bg-white px-4 py-3 shadow-sm shadow-slate-200/50 dark:bg-[#171a23] dark:shadow-none sm:py-4 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-base font-semibold text-slate-950 dark:text-white sm:text-lg">
              {title}
            </h1>
            <div className="hidden h-5 w-px bg-slate-200/70 dark:bg-white/10 sm:block" />
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
              {breadcrumbs.map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-2">
                  <span
                    className={
                      index === breadcrumbs.length - 1
                        ? "font-medium text-slate-700 dark:text-slate-200"
                        : undefined
                    }
                  >
                    {item}
                  </span>
                  {index < breadcrumbs.length - 1 ? <span>-</span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
        {actions ? (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  )
}
