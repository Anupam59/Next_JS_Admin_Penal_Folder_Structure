import Link from "next/link"

import { Button } from "@/components/admin/ui/button"
import { Field } from "@/components/admin/ui/field"
import { Input } from "@/components/admin/ui/input"

export function LoginForm() {
  return (
    <form className="space-y-3 sm:space-y-4">
      <Field label="Email">
        <Input type="email" placeholder="admin@example.com" />
      </Field>

      <Field label="Password">
        <div className="space-y-2">
          <Input type="password" placeholder="Enter password" />
          <div className="text-right">
            <Link
              href="/admin/forgot-password"
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </Field>

      <Button type="submit" className="h-9 w-full mt-4">
        Continue
      </Button>
    </form>
  )
}
