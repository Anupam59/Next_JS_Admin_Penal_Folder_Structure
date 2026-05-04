"use client"

import { useEffect, useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Delete02Icon,
  MoreHorizontalIcon,
  PencilEdit02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/common/ui/button"
import type { User } from "@/types/user.type"

type UserActionsProps = {
  user: User
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

export function UserActions({ user, onEdit, onDelete }: UserActionsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [])

  return (
    <div ref={rootRef} className="relative flex justify-end">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="User actions"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <HugeiconsIcon icon={MoreHorizontalIcon} size={18} strokeWidth={1.7} />
      </Button>

      {isOpen ? (
        <div className="absolute right-0 top-9 z-20 w-32 rounded-md bg-white p-1 text-left shadow-lg dark:bg-[#202331]">
          <button
            type="button"
            className="flex h-9 w-full items-center gap-2 rounded px-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
            onClick={() => {
              setIsOpen(false)
              onEdit(user)
            }}
          >
            <HugeiconsIcon icon={PencilEdit02Icon} size={16} strokeWidth={1.7} />
            Edit
          </button>
          <button
            type="button"
            className="flex h-9 w-full items-center gap-2 rounded px-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10"
            onClick={() => {
              setIsOpen(false)
              onDelete(user)
            }}
          >
            <HugeiconsIcon icon={Delete02Icon} size={16} strokeWidth={1.7} />
            Delete
          </button>
        </div>
      ) : null}
    </div>
  )
}
