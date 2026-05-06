import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type FieldProps = {
  label: string
  hint?: string
  error?: string
  children: ReactNode
  className?: string
}

function Field({ label, hint, error, children, className }: FieldProps) {
  return (
    <label className={cn("space-y-1", className)}>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </span>
      {children}
      {error ? (
        <span className="block text-xs text-red-600 dark:text-red-300">
          {error}
        </span>
      ) : null}
      {hint && !error ? (
        <span className="block text-xs text-slate-400 dark:text-slate-500">
          {hint}
        </span>
      ) : null}
    </label>
  )
}

export { Field }
