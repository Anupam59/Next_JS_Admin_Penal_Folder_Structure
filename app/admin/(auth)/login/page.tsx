import Link from "next/link"

import { AuthCard } from "@/components/admin/auth/AuthCard"
import { LoginForm } from "@/components/admin/auth/LoginForm"

export default function AdminLoginPage() {
  return (
    <AuthCard
      title="Sign in to Meal System"
      description={
        <>
          New here?{" "}
          <Link
            href="/admin/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            Recover your access
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  )
}
