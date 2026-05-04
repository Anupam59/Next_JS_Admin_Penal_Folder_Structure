import { Button } from "@/components/common/ui/button"

export default function ForgotPasswordPage() {
  return (
    <section className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Forgot Password</h1>
        <p className="text-sm text-muted-foreground">
          Admin password reset korar page.
        </p>
      </div>
      <Button className="w-full">Send Reset Link</Button>
    </section>
  )
}
