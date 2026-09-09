import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LinkUnderline } from "@/components/ui/link-underline"
import { sections } from "@/showcase/registry"

export default function OverviewPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-5">
        <p className="text-meta uppercase tracking-wide text-muted-foreground">
          Style guide
        </p>
        <h1 className="text-display max-w-[14ch]">Tokens, then components.</h1>
        <p className="max-w-[62ch] text-lead text-muted-foreground">
          An open-source component library, retokenized against a restrained,
          near-monochrome palette and a tight, fluid type scale. Every value
          lives in one file — change it there and the whole system follows.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild className="rounded-pill">
            <Link href="/foundations/colors">
              Start with foundations <ArrowRightIcon />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/playground/tokens">Open the playground</Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-8 sm:grid-cols-3">
        {[
          {
            n: "01",
            t: "One file owns the look",
            d: "Colour, radius and type scale are named tokens in src/app/globals.css. No component hard-codes a value.",
          },
          {
            n: "02",
            t: "You own every component",
            d: "Component source lives in this repo, not in node_modules. Nothing upstream can change your UI overnight.",
          },
          {
            n: "03",
            t: "Restraint is the style",
            d: "Square corners, no shadows, two easing curves, one accent colour. The constraints are the design.",
          },
        ].map((c) => (
          <div key={c.n} className="space-y-2">
            <p className="text-meta text-muted-foreground">{c.n}</p>
            <h2 className="text-h4">{c.t}</h2>
            <p className="text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        {sections.map((section) => (
          <div key={section.slug} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-h3">{section.title}</h2>
              <p className="max-w-[62ch] text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {section.entries.map((entry) => (
                <li key={entry.slug}>
                  <LinkUnderline href={`/${section.slug}/${entry.slug}`} className="text-sm">
                    {entry.title}
                  </LinkUnderline>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-3 border-t pt-8">
        <h2 className="text-h4">Where things live</h2>
        <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
          {[
            ["src/app/globals.css", "Every token: colour, radius, type scale"],
            ["src/components/ui/", "Component source — yours to edit"],
            ["src/showcase/", "This style guide, driven by one registry"],
            ["reference/clay-spec.md", "The visual language this system draws from"],
            ["CHECKLIST.md", "What is built and what comes next"],
          ].map(([path, desc]) => (
            <div key={path} className="contents">
              <dt>
                <code className="text-meta">{path}</code>
              </dt>
              <dd className="text-muted-foreground">{desc}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
