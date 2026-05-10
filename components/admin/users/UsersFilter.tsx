"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/admin/ui/button"
import { Field } from "@/components/admin/ui/field"
import { Input } from "@/components/admin/ui/input"
import { Select } from "@/components/admin/ui/select"
import type { UserFilters, UserRole, UserStatus } from "@/types/admin/user.type"

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
          <div className="grid gap-3 rounded-md bg-slate-50 p-3 dark:bg-white/5 sm:p-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_auto]">
            <Field label="Search">
              <div className="relative">
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={18}
                  strokeWidth={1.7}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  value={filters.query}
                  onChange={(event) => updateFilter("query", event.target.value)}
                  placeholder="Name or email"
                  className="bg-white pl-9 focus:bg-slate-100 dark:bg-[#171a23] dark:focus:bg-[#202331]"
                />
              </div>
            </Field>

            <Field label="Role">
              <Select
                value={filters.role}
                onChange={(event) =>
                  updateFilter("role", event.target.value as "All" | UserRole)
                }
                className="bg-white focus:bg-slate-100 dark:bg-[#171a23] dark:focus:bg-[#202331]"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Status">
              <Select
                value={filters.status}
                onChange={(event) =>
                  updateFilter(
                    "status",
                    event.target.value as "All" | UserStatus
                  )
                }
                className="bg-white focus:bg-slate-100 dark:bg-[#171a23] dark:focus:bg-[#202331]"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Joined from">
              <Input
                type="date"
                value={filters.joinedFrom}
                onChange={(event) =>
                  updateFilter("joinedFrom", event.target.value)
                }
                className="bg-white focus:bg-slate-100 dark:bg-[#171a23] dark:focus:bg-[#202331]"
              />
            </Field>

            <Field label="Joined to">
              <Input
                type="date"
                value={filters.joinedTo}
                onChange={(event) => updateFilter("joinedTo", event.target.value)}
                className="bg-white focus:bg-slate-100 dark:bg-[#171a23] dark:focus:bg-[#202331]"
              />
            </Field>

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
