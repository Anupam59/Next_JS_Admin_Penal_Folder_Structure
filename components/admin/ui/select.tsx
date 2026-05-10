import * as React from "react"

import { cn } from "@/lib/shared/utils"

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none transition-colors focus:bg-slate-200/70 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/5 dark:text-white dark:focus:bg-white/10",
        className
      )}
      {...props}
    />
  )
}

export { Select }
