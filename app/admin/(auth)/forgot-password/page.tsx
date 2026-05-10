import { AuthCard } from "@/components/admin/auth/AuthCard"
import { ForgotPasswordForm } from "@/components/admin/auth/ForgotPasswordForm"

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Forgot password?"
      description="Enter your admin email and we will send reset instructions."
    >
      <ForgotPasswordForm />
    </AuthCard>
  )
}
