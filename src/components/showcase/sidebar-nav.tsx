"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@farnazshahriari/design-system/ui/sheet"
import { cn } from "@farnazshahriari/design-system"

export type NavSection = {
  slug: string
  title: string
  entries: { slug: string; title: string; href: string }[]
}

function NavList({
  sections,
  onNavigate,
}: {
  sections: NavSection[]
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <nav className="space-y-8">
      <ul className="list-none space-y-px p-0">
        <li>
          <Link
            href="/all"
            onClick={onNavigate}
            aria-current={pathname === "/all" ? "page" : undefined}
            className={cn(
              "block rounded-md px-3 py-1.5 text-sm transition-colors",
              pathname === "/all"
                ? "bg-secondary font-medium text-secondary-foreground"
                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            )}
          >
            Everything on one page
          </Link>
        </li>
      </ul>
      {sections.map((section) => (
        <div key={section.slug} className="space-y-2">
          <p className="text-meta uppercase tracking-wide text-muted-foreground">
            {section.title}
          </p>
          <ul className="space-y-px">
            {section.entries.map((entry) => {
              const active = pathname === entry.href
              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-3 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-secondary font-medium text-secondary-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    )}
                  >
                    {entry.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function SidebarNav({ sections }: { sections: NavSection[] }) {
  return (
    <div className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pr-4">
        <NavList sections={sections} />
      </div>
    </div>
  )
}

export function MobileNav({ sections }: { sections: NavSection[] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 overflow-y-auto p-6">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <NavList sections={sections} onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
