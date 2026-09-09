import type { Metadata } from "next"
import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav, SidebarNav } from "@/components/showcase/sidebar-nav"
import { ThemeToggle } from "@/components/showcase/theme-toggle"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { navSections } from "@/showcase/registry"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Design System",
    template: "%s — Design System",
  },
  description:
    "A shadcn-based design system with a restrained, editorial theme. Tokens, components and patterns.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider>
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

            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
