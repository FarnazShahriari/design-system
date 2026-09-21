import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { MotionProvider } from "@farnazshahriari/design-system/motion/motion-provider"
import { ThemeProvider } from "@farnazshahriari/design-system"
import { Toaster } from "@farnazshahriari/design-system/ui/sonner"
import { TooltipProvider } from "@farnazshahriari/design-system/ui/tooltip"

import "./globals.css"

// The theme reads --font-inter. Inter ships as a variable font, so the
// two weights the system uses (500 body, 700 headings) cost one file.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: "Design System", template: "%s — Design System" },
  description:
    "A shadcn-based design system with a restrained, editorial theme. Tokens, components and patterns.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MotionProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
