"use client"

import { useState } from "react"

import { Navbar } from "@/components/common/layout/Navbar"
import { Sidebar } from "@/components/common/layout/Sidebar"
import { cn } from "@/lib/utils"

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-svh bg-[#f5f6fa] text-slate-950 dark:bg-[#0f1117] dark:text-slate-100">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((value) => !value)}
      />
      <div
        className={cn(
          "min-h-svh transition-[padding] duration-300",
          isSidebarCollapsed ? "lg:pl-[4.5rem]" : "lg:pl-64"
        )}
      >
        <Navbar />
        <div className="min-h-[calc(100svh-4rem)]">{children}</div>
      </div>
    </div>
  )
}
