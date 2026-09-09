import Link from "next/link"

import { MobileNav, SidebarNav } from "@/components/showcase/sidebar-nav"
import { ThemeToggle } from "@/components/showcase/theme-toggle"
import { navSections } from "@/showcase/registry"

export default function ShellLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <MobileNav sections={navSections} />
          <Link href="/" className="text-h4 tracking-tight">
            Design System
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <SidebarNav sections={navSections} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </>
  )
}
