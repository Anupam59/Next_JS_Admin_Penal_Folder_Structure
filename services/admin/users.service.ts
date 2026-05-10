import type { User } from "@/types/admin/user.type"

const demoUsers: User[] = [
  {
    id: "USR-001",
    name: "Rahim Uddin",
    email: "rahim@example.com",
    role: "Admin",
    status: "Active",
    joinedAt: "2026-05-01",
  },
  {
    id: "USR-002",
    name: "Karim Ahmed",
    email: "karim@example.com",
    role: "Manager",
    status: "Active",
    joinedAt: "2026-04-28",
  },
  {
    id: "USR-003",
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "Member",
    status: "Pending",
    joinedAt: "2026-04-25",
  },
  {
    id: "USR-004",
    name: "Sadia Akter",
    email: "sadia@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "2026-04-22",
  },
  {
    id: "USR-005",
    name: "Imran Hossain",
    email: "imran@example.com",
    role: "Manager",
    status: "Inactive",
    joinedAt: "2026-04-18",
  },
  {
    id: "USR-006",
    name: "Tanvir Hasan",
    email: "tanvir@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "2026-04-15",
  },
  {
    id: "USR-007",
    name: "Mim Chowdhury",
    email: "mim@example.com",
    role: "Member",
    status: "Pending",
    joinedAt: "2026-04-12",
  },
  {
    id: "USR-008",
    name: "Arif Islam",
    email: "arif@example.com",
    role: "Admin",
    status: "Active",
    joinedAt: "2026-04-09",
  },
  {
    id: "USR-009",
    name: "Jannat Akter",
    email: "jannat@example.com",
    role: "Member",
    status: "Inactive",
    joinedAt: "2026-04-06",
  },
  {
    id: "USR-010",
    name: "Fahim Rahman",
    email: "fahim@example.com",
    role: "Manager",
    status: "Active",
    joinedAt: "2026-04-03",
  },
  {
    id: "USR-011",
    name: "Rafi Khan",
    email: "rafi@example.com",
    role: "Member",
    status: "Active",
    joinedAt: "2026-03-30",
  },
  {
    id: "USR-012",
    name: "Samia Sultana",
    email: "samia@example.com",
    role: "Member",
    status: "Pending",
    joinedAt: "2026-03-26",
  },
]

export async function getUsers() {
  return demoUsers
}
