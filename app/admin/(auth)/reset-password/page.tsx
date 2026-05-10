import { AuthCard } from "@/components/admin/auth/AuthCard"
import { ResetPasswordForm } from "@/components/admin/auth/ResetPasswordForm"

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Reset password"
      description="Create a new password for your admin account."
    >
      <ResetPasswordForm />
    </AuthCard>
  )
}
