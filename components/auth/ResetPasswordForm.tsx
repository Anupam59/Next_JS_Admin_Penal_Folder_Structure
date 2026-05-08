import Link from "next/link"

import { Button } from "@/components/common/ui/button"
import { Field } from "@/components/common/ui/field"
import { Input } from "@/components/common/ui/input"

export function ResetPasswordForm() {
  return (
    <form className="space-y-3 sm:space-y-4">
      <Field label="New password">
        <Input type="password" placeholder="Enter new password" />
      </Field>

      <Field label="Confirm password">
        <Input type="password" placeholder="Confirm new password" />
      </Field>

      <Button type="submit" className="h-9 w-full mt-4">
        Reset Password
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
