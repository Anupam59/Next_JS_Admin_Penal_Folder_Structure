import { HugeiconsIcon } from "@hugeicons/react"
import { FilterIcon } from "@hugeicons/core-free-icons"

import { PageHeader } from "@/components/common/layout/Breadcrumb"
import { Button } from "@/components/common/ui/button"

export default function UsersPage() {
  return (
    <>
      <PageHeader
        title="Users"
        breadcrumbs={["Home", "Admin", "Users"]}
        actions={
          <>
            <Button variant="outline">
              <HugeiconsIcon icon={FilterIcon} size={16} strokeWidth={1.7} />
              Filter
            </Button>
            <Button>Create</Button>
          </>
        }
      />
      <section className="p-4 lg:p-8">
        <div className="rounded-md bg-white p-6 shadow-sm shadow-slate-200/60 dark:bg-[#171a23] dark:shadow-none">
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Users Page
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Ekhane pore users table and user form add kora hobe.
          </p>
        </div>
      </section>
    </>
  )
}
