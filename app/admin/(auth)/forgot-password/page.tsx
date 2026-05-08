import { AuthCard } from "@/components/auth/AuthCard"
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm"

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
