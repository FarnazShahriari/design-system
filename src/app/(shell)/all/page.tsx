import { Badge } from "@farnazshahriari/design-system/ui/badge"
import { sections } from "@/showcase/registry"

export const metadata = { title: "Everything on one page" }

const originLabel = {
  restyled: "Stock component, themed by tokens",
  modified: "Component source modified",
  custom: "Written for this system",
} as const

/**
 * The whole system in one scroll. The per-entry routes are better for
 * looking something up; this is better for judging whether the parts add
 * up to a system — which is a question you can only answer by seeing them
 * next to each other.
 */
export default function EverythingPage() {
  return (
    <div className="max-w-4xl space-y-16">
      <header className="space-y-4">
        <p className="text-meta uppercase tracking-wide text-muted-foreground">
          Style guide
        </p>
        <h1 className="text-h1">Everything on one page</h1>
        <p className="max-w-[62ch] text-lead text-muted-foreground">
          Every foundation, pattern and component in one scroll. Use the
          sidebar when you know what you are looking for; use this when you
          want to see whether it all holds together.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.slug} className="space-y-12">
          <div className="border-t pt-6">
            <h2 className="text-h2">{section.title}</h2>
            <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground">
              {section.description}
            </p>
          </div>

          {section.entries.map((entry) => (
            <article
              key={entry.slug}
              id={`${section.slug}-${entry.slug}`}
              className="space-y-6 scroll-mt-24"
            >
              <div className="space-y-2">
                <h3 className="text-h3">{entry.title}</h3>
                <p className="max-w-[64ch] text-sm text-muted-foreground">
                  {entry.description}
                </p>
                {entry.origin ? (
                  <Badge variant={entry.origin === "custom" ? "default" : "outline"}>
                    {originLabel[entry.origin]}
                  </Badge>
                ) : null}
              </div>

              {entry.examples.map((example) => (
                <div key={example.label} className="space-y-3">
                  <p className="text-meta uppercase tracking-wide text-muted-foreground">
                    {example.label}
                  </p>
                  {example.note ? (
                    <p className="max-w-[64ch] text-sm text-muted-foreground">
                      {example.note}
                    </p>
                  ) : null}
                  <div className="rounded-md border p-6">{example.node}</div>
                </div>
              ))}
            </article>
          ))}
        </section>
      ))}
    </div>
  )
}
