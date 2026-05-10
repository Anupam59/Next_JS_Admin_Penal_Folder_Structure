"use client"

import { useState, type ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/admin/ui/button"
import { cn } from "@/lib/shared/utils"

export type DataTableColumn<TData> = {
  header: ReactNode
  cell: (row: TData) => ReactNode
  className?: string
  headerClassName?: string
}

type DataTableProps<TData> = {
  data: TData[]
  columns: Array<DataTableColumn<TData>>
  getRowKey: (row: TData) => string
  totalCount?: number
  pageSize?: number
  itemLabel?: string
  totalLabel?: string
  emptyMessage?: string
  className?: string
}

function DataTable<TData>({
  data,
  columns,
  getRowKey,
  totalCount = data.length,
  pageSize = 5,
  itemLabel = "items",
  totalLabel = "Total",
  emptyMessage = "No data found.",
  className,
}: DataTableProps<TData>) {
  const dataSignature = data.map(getRowKey).join("\u001f")
  const [pagination, setPagination] = useState({
    page: 1,
    dataSignature,
  })
  const page =
    pagination.dataSignature === dataSignature ? pagination.page : 1
  const filteredTotal = data.length
  const totalPages = Math.max(1, Math.ceil(filteredTotal / pageSize))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * pageSize
  const visibleRows = data.slice(startIndex, startIndex + pageSize)
  const showingStart = filteredTotal === 0 ? 0 : startIndex + 1
  const showingEnd = Math.min(startIndex + pageSize, filteredTotal)

  function goToPage(nextPage: number) {
    setPagination({
      page: Math.min(Math.max(nextPage, 1), totalPages),
      dataSignature,
    })
  }

  return (
    <div
      className={cn(
        "rounded-md bg-white shadow-sm shadow-slate-200/60 dark:bg-[#171a23] dark:shadow-none",
        className
      )}
    >
      <div className="flex flex-col gap-1 p-3 sm:p-4 lg:p-5">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {totalLabel}
        </p>
        <div className="flex flex-wrap items-end gap-2">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
            {totalCount}
          </h2>
          {filteredTotal !== totalCount ? (
            <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">
              {filteredTotal} matched
            </span>
          ) : null}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left sm:min-w-[760px]">
          <thead>
            <tr className="bg-slate-50 text-xs font-semibold uppercase text-slate-400 dark:bg-white/5 dark:text-slate-500">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={cn("px-5 py-3", column.headerClassName)}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {visibleRows.map((row) => (
              <tr
                key={getRowKey(row)}
                className="text-sm text-slate-600 transition-colors hover:bg-slate-50/80 dark:text-slate-300 dark:hover:bg-white/5"
              >
                {columns.map((column, index) => (
                  <td key={index} className={cn("px-5 py-4", column.className)}>
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {visibleRows.length === 0 ? (
          <div className="px-5 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
            {emptyMessage}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 px-3 py-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p>
          Showing {showingStart}-{showingEnd} of {filteredTotal} {itemLabel}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            disabled={safePage === 1}
            onClick={() => goToPage(safePage - 1)}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={15} strokeWidth={1.7} />
            Previous
          </Button>
          <span className="min-w-16 text-center text-xs font-medium text-slate-600 dark:text-slate-300">
            {safePage} / {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={safePage === totalPages}
            onClick={() => goToPage(safePage + 1)}
          >
            Next
            <HugeiconsIcon icon={ArrowRight01Icon} size={15} strokeWidth={1.7} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { DataTable }
