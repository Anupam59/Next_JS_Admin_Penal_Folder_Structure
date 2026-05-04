import { PageHeader } from "@/components/common/layout/Breadcrumb"

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        breadcrumbs={["Home", "Admin", "Settings"]}
      />
      <section className="p-4 lg:p-8">
        <div className="rounded-md bg-white p-6 shadow-sm shadow-slate-200/60 dark:bg-[#171a23] dark:shadow-none">
          <h2 className="text-base font-semibold text-slate-950 dark:text-white">
            Settings Page
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Ekhane pore admin settings controls add kora hobe.
          </p>
        </div>
      </section>
    </>
  )
}
