"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  BarChartIcon,
  DashboardSquare01Icon,
  Folder02Icon,
  Notification02Icon,
  Settings02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
  icon: IconSvgElement
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: DashboardSquare01Icon,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: UserGroupIcon,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings02Icon,
  },
]

const demoItems: NavItem[] = [
  {
    title: "Overview",
    href: "#",
    icon: DashboardSquare01Icon,
  },
  {
    title: "Reports",
    href: "#",
    icon: BarChartIcon,
  },
  {
    title: "Analytics",
    href: "#",
    icon: Notification02Icon,
  },
  {
    title: "Activity",
    href: "#",
    icon: Folder02Icon,
  },
]

type SidebarProps = {
  isCollapsed: boolean
  isMobileOpen: boolean
  onToggleCollapse: () => void
  onCloseMobile: () => void
}

export function Sidebar({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname()
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const isExpanded = isMobileOpen || !isCollapsed || isHovered

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "fixed inset-y-0 left-0 z-40 bg-[#151720] text-slate-300 transition-[width,transform] duration-300 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isExpanded ? "w-72 lg:w-64" : "w-[4.5rem]"
      )}
    >
      <div
        className={cn(
          "flex h-16 items-center px-4",
          isExpanded ? "justify-between" : "justify-center"
        )}
      >
        {isExpanded ? (
          <Link
            href="/admin"
            className="min-w-0 text-lg font-bold tracking-wide text-white"
          >
            MEAL<span className="text-blue-500">SYS</span>
          </Link>
        ) : null}
        <button
          type="button"
          onClick={isMobileOpen ? onCloseMobile : onToggleCollapse}
          className={cn(
            "grid size-9 place-items-center rounded-md text-slate-500 transition-all duration-200 hover:bg-white/5 hover:text-blue-400",
            !isExpanded && "text-blue-500"
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <HugeiconsIcon
            icon={isCollapsed && !isMobileOpen ? ArrowRight01Icon : ArrowLeft01Icon}
            size={22}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <nav className={cn("space-y-6 py-5", isExpanded ? "px-4" : "px-3")}>
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "flex h-11 items-center rounded-md text-sm font-medium transition-all duration-200",
                  isExpanded ? "gap-3 px-3" : "justify-center px-0",
                  isActive
                    ? "bg-[#252837] text-white"
                    : "text-slate-400 hover:bg-[#202331] hover:text-white"
                )}
                title={!isExpanded ? item.title : undefined}
              >
                <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.7} />
                {isExpanded ? <span>{item.title}</span> : null}
              </Link>
            )
          })}
        </div>

        <div className="space-y-2">
          {isExpanded ? (
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Design Demo
            </p>
          ) : null}
          <div className="rounded-md">
            <button
              type="button"
              onClick={() => setIsDemoOpen((value) => !value)}
              className={cn(
                "flex h-10 w-full items-center rounded-md text-sm font-medium text-white transition-all duration-200 hover:bg-[#252837]",
                isExpanded ? "gap-3 px-3" : "justify-center px-0"
              )}
              title={!isExpanded ? "Demo" : undefined}
            >
              <HugeiconsIcon icon={Folder02Icon} size={20} strokeWidth={1.7} />
              {isExpanded ? (
                <>
                  <span className="flex-1 text-left">Demo</span>
                  <HugeiconsIcon
                    icon={isDemoOpen ? ArrowDown01Icon : ArrowRight01Icon}
                    size={17}
                    strokeWidth={1.7}
                    className="text-slate-500 transition-transform duration-200"
                  />
                </>
              ) : null}
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                isDemoOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "space-y-1 pb-1 pt-2",
                    isExpanded ? "px-3" : "px-0"
                  )}
                >
                  {demoItems.map((item) => (
                    <div
                      key={item.title}
                      className={cn(
                        "flex h-9 items-center rounded-md text-sm text-slate-500 transition-all duration-200 hover:bg-[#202331] hover:text-slate-300",
                        isExpanded ? "gap-3 px-3" : "justify-center px-0"
                      )}
                      title={!isExpanded ? item.title : undefined}
                    >
                      {!isExpanded ? (
                        <HugeiconsIcon
                          icon={item.icon}
                          size={18}
                          strokeWidth={1.6}
                        />
                      ) : (
                        <>
                          <span className="size-1.5 rounded-full bg-slate-600" />
                          <span>{item.title}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}
