"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/common/ui/button"
import { UserActions } from "@/components/dashboard/users/UserActions"
import { cn } from "@/lib/utils"
import type { User, UserStatus } from "@/types/user.type"

const rowsPerPage = 5

type UsersTableProps = {
  users: User[]
  totalUsers: number
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

const statusClassName: Record<UserStatus, string> = {
  Active:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Inactive:
    "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300",
  Pending:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value))
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function UsersTable({
  users,
  totalUsers,
  onEdit,
  onDelete,
}: UsersTableProps) {
  const [page, setPage] = useState(1)

  const filteredTotal = users.length
  const totalPages = Math.max(1, Math.ceil(filteredTotal / rowsPerPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * rowsPerPage
  const visibleUsers = users.slice(startIndex, startIndex + rowsPerPage)
  const showingStart = filteredTotal === 0 ? 0 : startIndex + 1
  const showingEnd = Math.min(startIndex + rowsPerPage, filteredTotal)

  useEffect(() => {
    setPage(1)
  }, [users])

  function goToPage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
  }

  return (
    <div className="rounded-md bg-white shadow-sm shadow-slate-200/60 dark:bg-[#171a23] dark:shadow-none">
      <div className="flex flex-col gap-1 p-2">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Users
        </p>
        <div className="flex flex-wrap items-end gap-2">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            {totalUsers}
          </h2>
          {filteredTotal !== totalUsers ? (
            <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">
              {filteredTotal} matched
            </span>
          ) : null}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="bg-slate-50 text-xs font-semibold uppercase text-slate-400 dark:bg-white/5 dark:text-slate-500">
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Joined</th>
              <th className="px-5 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {visibleUsers.map((user) => (
              <tr
                key={user.id}
                className="text-sm text-slate-600 transition-colors hover:bg-slate-50/80 dark:text-slate-300 dark:hover:bg-white/5"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-md bg-blue-50 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                      {getInitials(user.name)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-950 dark:text-white">
                        {user.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">{user.role}</td>
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      "inline-flex h-6 items-center rounded px-2 text-xs font-medium",
                      statusClassName[user.status]
                    )}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-5 py-4">{formatDate(user.joinedAt)}</td>
                <td className="px-5 py-4 text-right">
                  <UserActions
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {visibleUsers.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
            No users found.
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 px-5 py-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing {showingStart}-{showingEnd} of {filteredTotal} users
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            disabled={safePage === 1}
            onClick={() => goToPage(safePage - 1)}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={15} strokeWidth={1.7} />
            Previous
          </Button>
          <span className="min-w-16 text-center text-xs font-medium text-slate-600 dark:text-slate-300">
            {safePage} / {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={safePage === totalPages}
            onClick={() => goToPage(safePage + 1)}
          >
            Next
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} strokeWidth={1.7} />
          </Button>
        </div>
      </div>
    </div>
  )
}
