"use client"

import { useState } from "react"

import { Button } from "@/components/common/ui/button"
import type { User, UserRole, UserStatus } from "@/types/user.type"

type UserFormValues = {
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinedAt: string
}

type UserFormProps = {
  user?: User
  submitText: string
  onCancel: () => void
  onSubmit: (values: UserFormValues) => void
}

const roles: UserRole[] = ["Admin", "Manager", "Member"]
const statuses: UserStatus[] = ["Active", "Inactive", "Pending"]

function getToday() {
  return new Date().toISOString().slice(0, 10)
}

export function UserForm({ user, submitText, onCancel, onSubmit }: UserFormProps) {
  const [values, setValues] = useState<UserFormValues>({
    name: user?.name ?? "",
    email: user?.email ?? "",
    role: user?.role ?? "Member",
    status: user?.status ?? "Active",
    joinedAt: user?.joinedAt ?? getToday(),
  })

  function updateValue<Key extends keyof UserFormValues>(
    key: Key,
    value: UserFormValues[Key]
  ) {
    setValues((current) => ({
      ...current,
      [key]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(values)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="space-y-1">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Name
        </span>
        <input
          required
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          className="h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none focus:bg-slate-200/70 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
          placeholder="User name"
        />
      </label>

      <label className="space-y-1">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Email
        </span>
        <input
          required
          type="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          className="h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none focus:bg-slate-200/70 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
          placeholder="user@example.com"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Role
          </span>
          <select
            value={values.role}
            onChange={(event) =>
              updateValue("role", event.target.value as UserRole)
            }
            className="h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none focus:bg-slate-200/70 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
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
            value={values.status}
            onChange={(event) =>
              updateValue("status", event.target.value as UserStatus)
            }
            className="h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none focus:bg-slate-200/70 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Joined date
        </span>
        <input
          required
          type="date"
          value={values.joinedAt}
          onChange={(event) => updateValue("joinedAt", event.target.value)}
          className="h-9 w-full rounded-md bg-slate-100 px-3 text-sm text-slate-900 outline-none focus:bg-slate-200/70 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
        />
      </label>

      <div className="flex items-center justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  )
}
