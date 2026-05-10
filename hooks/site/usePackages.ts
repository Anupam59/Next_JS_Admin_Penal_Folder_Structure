"use client"

import { useMemo } from "react"

import type { SitePackage } from "@/types/site/package.type"

export function usePackages(packages: SitePackage[]) {
  return useMemo(() => packages, [packages])
}
