export type UserRole = "Admin" | "Manager" | "Member"

export type UserStatus = "Active" | "Inactive" | "Pending"

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  status: UserStatus
  joinedAt: string
  description?: string
  richDescription?: string
}

export type UserFilters = {
  query: string
  role: "All" | UserRole
  status: "All" | UserStatus
  joinedFrom: string
  joinedTo: string
}
