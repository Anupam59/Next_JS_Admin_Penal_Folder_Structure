import Link from "next/link"

import { Button } from "@/components/common/ui/button"
import { Field } from "@/components/common/ui/field"
import { Input } from "@/components/common/ui/input"

export function ForgotPasswordForm() {
  return (
    <form className="space-y-3 sm:space-y-4">
      <Field
        label="Email"
        hint="We will send a password reset link to this email."
      >
        <Input type="email" placeholder="admin@example.com" />
      </Field>

      <Button type="submit" className="h-9 w-full mt-4">
        Send Reset Link
      </Button>

      <div className="text-center">
        <Link
          href="/admin/login"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Back to login
        </Link>
      </div>
    </form>
  )
}
