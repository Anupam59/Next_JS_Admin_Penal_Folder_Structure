import { UsersClient } from "@/components/admin/pages/user/UsersClient"
import { getUsers } from "@/services/admin/users.service"

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <UsersClient users={users} />
  )
}
