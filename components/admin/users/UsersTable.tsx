import {
  DataTable,
  type DataTableColumn,
} from "@/components/admin/ui/data-table"
import { StatusBadge, type StatusBadgeTone } from "@/components/admin/ui/status-badge"
import { UserActions } from "@/components/admin/users/UserActions"
import type { User, UserStatus } from "@/types/admin/user.type"

const rowsPerPage = 5

type UsersTableProps = {
  users: User[]
  totalUsers: number
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

const statusTone: Record<UserStatus, StatusBadgeTone> = {
  Active: "success",
  Inactive: "muted",
  Pending: "warning",
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
  const columns: Array<DataTableColumn<User>> = [
    {
      header: "User",
      cell: (user) => (
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-md bg-blue-50 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
            {getInitials(user.name)}
          </div>
          <div>
            <p className="font-medium text-slate-950 dark:text-white">
              {user.name}
            </p>
            <p className="mt-0.5 text-xs text-slate-400">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Role",
      cell: (user) => user.role,
    },
    {
      header: "Status",
      cell: (user) => (
        <StatusBadge tone={statusTone[user.status]}>{user.status}</StatusBadge>
      ),
    },
    {
      header: "Joined",
      cell: (user) => formatDate(user.joinedAt),
    },
    {
      header: "Action",
      headerClassName: "text-right",
      className: "text-right",
      cell: (user) => (
        <UserActions user={user} onEdit={onEdit} onDelete={onDelete} />
      ),
    },
  ]

  return (
    <DataTable
      data={users}
      columns={columns}
      getRowKey={(user) => user.id}
      totalCount={totalUsers}
      pageSize={rowsPerPage}
      itemLabel="users"
      totalLabel="Total Users"
      emptyMessage="No users found."
    />
  )
}
