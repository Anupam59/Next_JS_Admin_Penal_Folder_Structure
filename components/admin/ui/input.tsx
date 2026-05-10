import * as React from "react"

import { cn } from "@/lib/shared/utils"

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-slate-200/70 disabled:pointer-events-none disabled:opacity-50 dark:bg-white/5 dark:text-white dark:focus:bg-white/10",
        className
      )}
      {...props}
    />
  )
}

export { Input }
