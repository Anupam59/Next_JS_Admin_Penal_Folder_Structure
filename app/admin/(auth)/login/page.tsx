import { Button } from "@/components/common/ui/button"

export default function AdminLoginPage() {
  return (
    <section className="w-full max-w-sm space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Admin Login</h1>
        <p className="text-sm text-muted-foreground">
          Admin panel-e login korar page.
        </p>
      </div>
      <Button className="w-full">Login</Button>
    </section>
  )
}
