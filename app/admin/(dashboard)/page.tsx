import { PageHeader } from "@/components/common/layout/Breadcrumb"

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        breadcrumbs={["Home", "Admin", "Dashboard"]}
      />
      <div className="p-4 lg:p-8">
        <div className="min-h-[420px] rounded-md bg-white p-6 shadow-sm shadow-slate-200/60 dark:bg-[#171a23] dark:shadow-none">
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Dashboard Page
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Ekhane pore dashboard card, chart, report add kora hobe.
          </p>
        </div>
      </div>
    </>
  )
}
