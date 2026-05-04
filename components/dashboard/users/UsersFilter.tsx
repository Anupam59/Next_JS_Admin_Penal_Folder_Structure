"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/common/ui/button"
import type { UserFilters, UserRole, UserStatus } from "@/types/user.type"

type UsersFilterProps = {
  open: boolean
  filters: UserFilters
  onChange: (filters: UserFilters) => void
  onReset: () => void
}

const roles: Array<UserFilters["role"]> = ["All", "Admin", "Manager", "Member"]
const statuses: Array<UserFilters["status"]> = [
  "All",
  "Active",
  "Inactive",
  "Pending",
]

export function UsersFilter({
  open,
  filters,
  onChange,
  onReset,
}: UsersFilterProps) {
  function updateFilter<Key extends keyof UserFilters>(
    key: Key,
    value: UserFilters[Key]
  ) {
    onChange({
      ...filters,
      [key]: value,
    })
  }

  return (
    <div
      className={
        open
          ? "grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-in-out"
          : "grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-in-out"
      }
    >
      <div className="overflow-hidden">
        <div className="bg-white px-4 pb-4 shadow-sm shadow-slate-200/50 transition-transform duration-300 ease-in-out dark:bg-[#171a23] dark:shadow-none lg:px-8">
        <div className="grid gap-3 rounded-md bg-slate-50 p-4 dark:bg-white/5 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_auto]">
          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Search
            </span>
            <div className="relative">
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                strokeWidth={1.7}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={filters.query}
                onChange={(event) => updateFilter("query", event.target.value)}
                placeholder="Name or email"
                className="h-9 w-full rounded-md bg-white pl-9 pr-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:bg-slate-100 dark:bg-[#171a23] dark:text-white dark:focus:bg-[#202331]"
              />
            </div>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Role
            </span>
            <select
              value={filters.role}
              onChange={(event) =>
                updateFilter("role", event.target.value as "All" | UserRole)
              }
              className="h-9 w-full rounded-md bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus:bg-slate-100 dark:bg-[#171a23] dark:text-white dark:focus:bg-[#202331]"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Status
            </span>
            <select
              value={filters.status}
              onChange={(event) =>
                updateFilter(
                  "status",
                  event.target.value as "All" | UserStatus
                )
              }
              className="h-9 w-full rounded-md bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus:bg-slate-100 dark:bg-[#171a23] dark:text-white dark:focus:bg-[#202331]"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Joined from
            </span>
            <input
              type="date"
              value={filters.joinedFrom}
              onChange={(event) => updateFilter("joinedFrom", event.target.value)}
              className="h-9 w-full rounded-md bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus:bg-slate-100 dark:bg-[#171a23] dark:text-white dark:focus:bg-[#202331]"
            />
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Joined to
            </span>
            <input
              type="date"
              value={filters.joinedTo}
              onChange={(event) => updateFilter("joinedTo", event.target.value)}
              className="h-9 w-full rounded-md bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus:bg-slate-100 dark:bg-[#171a23] dark:text-white dark:focus:bg-[#202331]"
            />
          </label>

          <div className="flex items-end">
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full"
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
