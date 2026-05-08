import { AuthCard } from "@/components/auth/AuthCard"
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm"

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
