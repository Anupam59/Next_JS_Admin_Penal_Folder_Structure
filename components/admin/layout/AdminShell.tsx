"use client"

import { useState } from "react"

import { Navbar } from "@/components/admin/layout/Navbar"
import { Sidebar } from "@/components/admin/layout/Sidebar"
import { cn } from "@/lib/shared/utils"

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <div className="admin-theme min-h-svh bg-[#f5f6fa] text-slate-950 dark:bg-[#0f1117] dark:text-slate-100">
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsMobileSidebarOpen(false)}
        className={cn(
          "fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          isMobileSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onToggleCollapse={() => setIsSidebarCollapsed((value) => !value)}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />
      <div
        className={cn(
          "min-h-svh transition-[padding] duration-300",
          isSidebarCollapsed ? "lg:pl-[4.5rem]" : "lg:pl-64"
        )}
      >
        <Navbar onOpenMenu={() => setIsMobileSidebarOpen(true)} />
        <div className="min-h-[calc(100svh-4rem)]">{children}</div>
      </div>
    </div>
  )
}
