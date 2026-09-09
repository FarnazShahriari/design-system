import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRightIcon } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { ViewTransition } from "@/components/motion/view-transition"
import { projectTitleTransition } from "@/lib/view-transition-names"
import { Container } from "@/components/ui/container"
import { Divider } from "@/components/ui/divider"
import { LinkUnderline } from "@/components/ui/link-underline"
import { Section } from "@/components/ui/section"
import { PROJECTS, getProject, nextProject } from "../../projects"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/preview/case-study/[slug]">) {
  const { slug } = await params
  return { title: `${getProject(slug)?.title ?? "Case study"} archetype` }
}

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

export default async function CaseStudyArchetype({
  params,
}: PageProps<"/preview/case-study/[slug]">) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const next = nextProject(slug)

  return (
    <main>
      {/* The title is the shared element. It carries the same view-transition
          name as the card that linked here, so the browser moves and scales
          the one piece of text rather than fading one out and another in.
          Nothing here animates it — the pairing is the whole mechanism. */}
      <Section theme="light" rhythm="lg">
        <Container>
          <ViewTransition
            name={projectTitleTransition(project.slug)}
            share="morph"
            default="none"
          >
            <h1 className="max-w-[24ch] text-display">{project.title}</h1>
          </ViewTransition>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[52ch] text-lead text-muted-foreground">
              {project.lead}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section theme="light" rhythm="none">
        <Reveal variant="fade">
          <Media ratio="21 / 9" label="Full-bleed hero media" />
        </Reveal>
      </Section>

      <Section theme="light">
        <Container>
          <div className="grid gap-10 md:grid-cols-[57.5fr_42.5fr] md:gap-16">
            <div className="flex flex-col gap-4">
              <p>
                {project.title} came to us with a product that had accumulated
                years of features and no remaining point of view. Every screen
                was reachable from every other screen, and nothing was reachable
                quickly.
              </p>
              <p className="text-muted-foreground">
                We began by watching what people did rather than what the
                navigation offered. Two tasks accounted for most sessions, and
                everything else was noise around them.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-meta text-muted-foreground">Services</p>
                <ul className="flex list-none flex-col gap-1 p-0 font-bold">
                  {project.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <LinkUnderline href="/preview/work-index" className="w-fit">
                Back to all work
              </LinkUnderline>
            </div>
          </div>
        </Container>
      </Section>

      <Section theme="muted">
        <Container>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[18ch] text-h2">
              Designing for everyday clarity
            </h2>
            <p className="max-w-[46ch] text-muted-foreground">
              The home screen answers one question before anything else, and
              defers everything that is not that question.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Media ratio="4 / 5" label="Primary screen" />
            </Reveal>
            <Reveal delay={0.08}>
              <Media ratio="4 / 5" label="Secondary flow" />
            </Reveal>
          </div>
        </Container>
      </Section>

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
            <Reveal>
              <Media ratio="16 / 9" label="Component library" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The next-case teaser carries the *next* project's title name, so
          clicking it morphs this word into that page's h1 in turn. */}
      <Section theme="accent" rhythm="lg">
        <Container>
          <p className="text-meta text-muted-foreground">Next case study</p>
          <Link
            href={`/preview/case-study/${next.slug}`}
            className="group mt-4 flex items-center gap-5"
          >
            <ViewTransition
              name={projectTitleTransition(next.slug)}
              share="morph"
              default="none"
            >
              <h2 className="text-h1">{next.title}</h2>
            </ViewTransition>
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
