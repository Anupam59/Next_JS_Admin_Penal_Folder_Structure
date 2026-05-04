import { UsersClient } from "@/components/dashboard/users/UsersClient"
import { getUsers } from "@/services/users.service"

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <UsersClient users={users} />
  )
}
