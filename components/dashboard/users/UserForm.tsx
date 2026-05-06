"use client"

import { useState } from "react"

import { Button } from "@/components/common/ui/button"
import { Field } from "@/components/common/ui/field"
import { Input } from "@/components/common/ui/input"
import { Select } from "@/components/common/ui/select"
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
      <Field label="Name">
        <Input
          required
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          placeholder="User name"
        />
      </Field>

      <Field label="Email">
        <Input
          required
          type="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          placeholder="user@example.com"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Role">
          <Select
            value={values.role}
            onChange={(event) =>
              updateValue("role", event.target.value as UserRole)
            }
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
            value={values.status}
            onChange={(event) =>
              updateValue("status", event.target.value as UserStatus)
            }
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Joined date">
        <Input
          required
          type="date"
          value={values.joinedAt}
          onChange={(event) => updateValue("joinedAt", event.target.value)}
        />
      </Field>

      <div className="flex items-center justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  )
}
