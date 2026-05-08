"use client"

import { useMemo, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { FilterIcon } from "@hugeicons/core-free-icons"

import { DeleteModal } from "@/components/common/modals/DeleteModal"
import { ShellModal } from "@/components/common/modals/ShellModal"
import { PageHeader } from "@/components/common/layout/Breadcrumb"
import { Button } from "@/components/common/ui/button"
import { UserForm } from "@/components/dashboard/users/UserForm"
import { UsersFilter } from "@/components/dashboard/users/UsersFilter"
import { UsersTable } from "@/components/dashboard/users/UsersTable"
import type { User, UserFilters } from "@/types/user.type"

type UsersClientProps = {
  users: User[]
}

const defaultFilters: UserFilters = {
  query: "",
  role: "All",
  status: "All",
  joinedFrom: "",
  joinedTo: "",
}

export function UsersClient({ users }: UsersClientProps) {
  const [userList, setUserList] = useState(users)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [deletingUser, setDeletingUser] = useState<User | null>(null)
  const [filters, setFilters] = useState<UserFilters>(defaultFilters)

  const filteredUsers = useMemo(() => {
    const search = filters.query.trim().toLowerCase()

    return userList.filter((user) => {
      const matchesSearch =
        !search ||
        [user.name, user.email, user.role, user.status]
          .join(" ")
          .toLowerCase()
          .includes(search)
      const matchesRole = filters.role === "All" || user.role === filters.role
      const matchesStatus =
        filters.status === "All" || user.status === filters.status
      const matchesJoinedFrom =
        !filters.joinedFrom || user.joinedAt >= filters.joinedFrom
      const matchesJoinedTo = !filters.joinedTo || user.joinedAt <= filters.joinedTo

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus &&
        matchesJoinedFrom &&
        matchesJoinedTo
      )
    })
  }, [filters, userList])

  function createUserId() {
    const nextNumber = userList.length + 1
    return `USR-${String(nextNumber).padStart(3, "0")}`
  }

  return (
    <>
      <PageHeader
        title="Users"
        breadcrumbs={["Home", "Admin", "Users"]}
        actions={
          <>
            <Button
              variant={isFilterOpen ? "secondary" : "outline"}
              onClick={() => setIsFilterOpen((value) => !value)}
              aria-expanded={isFilterOpen}
            >
              <HugeiconsIcon icon={FilterIcon} size={16} strokeWidth={1.7} />
              Filter
            </Button>
            <Button onClick={() => setIsCreateOpen(true)}>Create</Button>
          </>
        }
      />
      <UsersFilter
        open={isFilterOpen}
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(defaultFilters)}
      />
      <section className="p-3 sm:p-4 lg:p-8">
        <UsersTable
          users={filteredUsers}
          totalUsers={userList.length}
          onEdit={setEditingUser}
          onDelete={setDeletingUser}
        />
      </section>

      <ShellModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="Create User"
        description="Add a new user to the admin panel."
        size="lg"
      >
        <UserForm
          submitText="Create User"
          onCancel={() => setIsCreateOpen(false)}
          onSubmit={(values) => {
            setUserList((current) => [
              {
                id: createUserId(),
                ...values,
              },
              ...current,
            ])
            setIsCreateOpen(false)
          }}
        />
      </ShellModal>

      <ShellModal
        open={Boolean(editingUser)}
        onClose={() => setEditingUser(null)}
        title="Edit User"
        description="Update user details and access status."
        size="lg"
      >
        {editingUser ? (
          <UserForm
            user={editingUser}
            submitText="Save Changes"
            onCancel={() => setEditingUser(null)}
            onSubmit={(values) => {
              setUserList((current) =>
                current.map((user) =>
                  user.id === editingUser.id
                    ? {
                        ...user,
                        ...values,
                      }
                    : user
                )
              )
              setEditingUser(null)
            }}
          />
        ) : null}
      </ShellModal>

      <DeleteModal
        open={Boolean(deletingUser)}
        title="Delete user?"
        description={
          deletingUser
            ? `Are you sure you want to delete ${deletingUser.name}?`
            : undefined
        }
        onClose={() => setDeletingUser(null)}
        onDelete={() => {
          if (!deletingUser) {
            return
          }

          setUserList((current) =>
            current.filter((user) => user.id !== deletingUser.id)
          )
          setDeletingUser(null)
        }}
      />
    </>
  )
}
