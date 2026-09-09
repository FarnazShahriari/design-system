import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { allEntryParams, findEntry } from "@/showcase/registry"

export function generateStaticParams() {
  return allEntryParams()
}

const originLabel = {
  restyled: "Stock component, themed by tokens",
  modified: "Component source modified",
  custom: "Written for this system",
} as const

export async function generateMetadata({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params
  const found = findEntry(slug?.[0] ?? "", slug?.[1] ?? "")
  return { title: found?.entry.title ?? "Not found" }
}

export default async function EntryPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params
  const found = findEntry(slug?.[0] ?? "", slug?.[1] ?? "")

  if (!found) notFound()

  const { section, entry } = found

  return (
    <article className="max-w-4xl space-y-12">
      <header className="space-y-4">
        <p className="text-meta uppercase tracking-wide text-muted-foreground">
          {section.title}
        </p>
        <h1 className="text-h1">{entry.title}</h1>
        <p className="max-w-[64ch] text-lead text-muted-foreground">
          {entry.description}
        </p>
        {entry.origin ? (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Badge variant={entry.origin === "custom" ? "default" : "outline"}>
              {originLabel[entry.origin]}
            </Badge>
            {entry.originNote ? (
              <p className="text-meta text-muted-foreground">{entry.originNote}</p>
            ) : null}
          </div>
        ) : null}
      </header>

      <div className="space-y-12">
        {entry.examples.map((example) => (
          <section key={example.label} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-h4">{example.label}</h2>
              {example.note ? (
                <p className="max-w-[64ch] text-sm text-muted-foreground">
                  {example.note}
                </p>
              ) : null}
            </div>
            <div className="rounded-md border p-6 sm:p-8">{example.node}</div>
          </section>
        ))}
      </div>
    </article>
  )
}
