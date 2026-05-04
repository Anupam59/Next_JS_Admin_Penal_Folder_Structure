"use client"

import { useEffect, useState, type ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/common/ui/button"
import { cn } from "@/lib/utils"

type ShellModalSize = "sm" | "md" | "lg" | "xl" | "full"

type ShellModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  size?: ShellModalSize
  className?: string
  contentClassName?: string
}

const sizeClassName: Record<ShellModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  full: "max-w-5xl",
}

export function ShellModal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
  contentClassName,
}: ShellModalProps) {
  const [shouldRender, setShouldRender] = useState(open)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      const frameId = requestAnimationFrame(() => setIsVisible(true))

      return () => cancelAnimationFrame(frameId)
    }

    setIsVisible(false)
    const timeoutId = window.setTimeout(() => setShouldRender(false), 220)

    return () => window.clearTimeout(timeoutId)
  }, [open])

  useEffect(() => {
    if (!shouldRender) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose, shouldRender])

  if (!shouldRender) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm transition-opacity duration-200 ease-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative w-full rounded-md bg-white shadow-xl transition-all duration-200 ease-out dark:bg-[#171a23]",
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-2 scale-[0.98] opacity-0",
          sizeClassName[size],
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-start justify-between gap-4 px-5 py-4">
          <div className="min-w-0">
            <h2
              id="modal-title"
              className="text-base font-semibold text-slate-950 dark:text-white"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {description}
              </p>
            ) : null}
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close modal"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={1.7} />
          </Button>
        </div>

        <div className={cn("px-5 pb-5", contentClassName)}>{children}</div>

        {footer ? (
          <div className="flex items-center justify-end gap-2 px-5 pb-5">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}
