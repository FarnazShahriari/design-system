import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Divider } from "@/components/ui/divider"
import { LinkUnderline } from "@/components/ui/link-underline"
import { Section } from "@/components/ui/section"

export const metadata = { title: "Case study archetype" }

/** A flat placeholder standing in for photography or a UI capture. */
function Media({ ratio = "16 / 9", label }: { ratio?: string; label: string }) {
  return (
    <div
      className="flex w-full items-center justify-center bg-muted text-meta text-muted-foreground"
      style={{ aspectRatio: ratio }}
    >
      {label}
    </div>
  )
}

export default function CaseStudyArchetype() {
  return (
    <main>
      {/* Hero: the title and one positioning sentence. Nothing else — no
          breadcrumb, no date, no author. */}
      <Section theme="light" rhythm="lg">
        <Container>
          <h1 className="max-w-[24ch] text-display">Northwind</h1>
          <p className="mt-6 max-w-[52ch] text-lead text-muted-foreground">
            A retail bank rebuilt around the two things its customers actually
            do every day.
          </p>
        </Container>
      </Section>

      {/* Full-bleed hero media, edge to edge, no radius. */}
      <Section theme="light" rhythm="none">
        <Media ratio="21 / 9" label="Full-bleed hero media" />
      </Section>

      {/* Project info: context on the left, a services list on the right.
          Services are a plain list in bold body type, not chips. */}
      <Section theme="light">
        <Container>
          <div className="grid gap-10 md:grid-cols-[57.5fr_42.5fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <p>
                Northwind came to us with an app that had accumulated eleven
                years of features and no remaining point of view. Every screen
                was reachable from every other screen, and nothing was reachable
                quickly.
              </p>
              <p className="text-muted-foreground">
                We began by watching what people did rather than what the
                navigation offered. Two tasks accounted for most sessions:
                checking a balance, and moving money between accounts.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-meta text-muted-foreground">Services</p>
                <ul className="flex list-none flex-col gap-1 p-0 font-bold">
                  <li>Product strategy</li>
                  <li>Interface design</li>
                  <li>Design system</li>
                  <li>iOS &amp; Android</li>
                </ul>
              </div>
              <LinkUnderline href="/preview/work-index" className="w-fit">
                Visit the live app
              </LinkUnderline>
            </div>
          </div>
        </Container>
      </Section>

      {/* Off-white band: a section title, a capped paragraph, then media. */}
      <Section theme="muted">
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[18ch] text-h2">
              Designing for everyday financial clarity
            </h2>
            <p className="max-w-[46ch] text-muted-foreground">
              The home screen answers one question before anything else: what do
              I have, and what is about to leave.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Media ratio="4 / 5" label="Home screen" />
            <Media ratio="4 / 5" label="Transfer flow" />
          </div>
        </Container>
      </Section>

      {/* Two same-coloured sections would collide, so a divider carries the gap. */}
      <Divider theme="muted" />

      <Section theme="dark">
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[20ch] text-h2">
              One system, two platforms, no forks
            </h2>
            <p className="max-w-[46ch] text-muted-foreground">
              Every component was specified once and built twice, from a single
              set of tokens the two platform teams shared.
            </p>
          </div>
          <div className="mt-10">
            <Media ratio="16 / 9" label="Component library" />
          </div>
        </Container>
      </Section>

      {/* The next-case teaser: the accent band, and the reason the accent
          section theme exists. Note the link inverts on its own. */}
      <Section theme="accent" rhythm="lg">
        <Container>
          <p className="text-meta text-muted-foreground">Next case study</p>
          <Link href="/preview/case-study" className="group mt-4 flex items-center gap-5">
            <h2 className="text-h1">Meridian</h2>
            <ArrowRightIcon className="size-9 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:size-14" />
          </Link>
        </Container>
      </Section>

      <Section theme="dark" rhythm="sm">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-h3">Let&rsquo;s talk</p>
            <LinkUnderline href="/preview/about">hello@example.com</LinkUnderline>
          </div>
        </Container>
      </Section>
    </main>
  )
}
