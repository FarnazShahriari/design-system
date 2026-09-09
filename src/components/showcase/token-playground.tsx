"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, RotateCcwIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

/**
 * Live token editor. Writes directly to inline custom properties on
 * <html>, which override the values from globals.css for this session only.
 * Nothing is persisted — "Copy CSS" hands you the block to paste back into
 * globals.css once you're happy with it.
 */

const COLOR_TOKENS = [
  { name: "background", light: "#ffffff", dark: "#171921" },
  { name: "foreground", light: "#06070a", dark: "#ffffff" },
  { name: "primary", light: "#171921", dark: "#ffffff" },
  { name: "primary-foreground", light: "#ffffff", dark: "#171921" },
  { name: "secondary", light: "#f3f4f6", dark: "#252833" },
  { name: "muted", light: "#f3f4f6", dark: "#252833" },
  { name: "muted-foreground", light: "#7f8694", dark: "#b2b8c2" },
  { name: "accent", light: "#ff5a36", dark: "#ff5a36" },
  { name: "accent-foreground", light: "#ffffff", dark: "#171921" },
  { name: "destructive", light: "#cf3723", dark: "#cf3723" },
  { name: "border", light: "#e6e8eb", dark: "#353945" },
] as const

type TokenName = (typeof COLOR_TOKENS)[number]["name"]

const DEFAULT_RADIUS = 2

export function TokenPlayground() {
  const [colors, setColors] = React.useState<Record<string, string>>({})
  const [radius, setRadius] = React.useState(DEFAULT_RADIUS)
  const [isDark, setIsDark] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  // Track which theme is live so the swatches show the right starting values.
  React.useEffect(() => {
    const root = document.documentElement
    const sync = () => setIsDark(root.classList.contains("dark"))
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const baseFor = React.useCallback(
    (token: TokenName) => {
      const def = COLOR_TOKENS.find((t) => t.name === token)!
      return isDark ? def.dark : def.light
    },
    [isDark]
  )

  const valueFor = (token: TokenName) => colors[token] ?? baseFor(token)

  function setColor(token: TokenName, value: string) {
    setColors((prev) => ({ ...prev, [token]: value }))
    document.documentElement.style.setProperty(`--${token}`, value)
  }

  function setRadiusValue(px: number) {
    setRadius(px)
    document.documentElement.style.setProperty("--radius", `${px / 16}rem`)
  }

  function reset() {
    const root = document.documentElement
    COLOR_TOKENS.forEach((t) => root.style.removeProperty(`--${t.name}`))
    root.style.removeProperty("--radius")
    setColors({})
    setRadius(DEFAULT_RADIUS)
  }

  const cssBlock = React.useMemo(() => {
    const changed = COLOR_TOKENS.filter(
      (t) => colors[t.name] && colors[t.name] !== baseFor(t.name)
    )
    const lines = changed.map((t) => `  --${t.name}: ${colors[t.name]};`)
    if (radius !== DEFAULT_RADIUS) {
      lines.push(`  --radius: ${radius / 16}rem;`)
    }
    if (lines.length === 0) return null
    const selector = isDark ? ".dark" : ":root"
    return `${selector} {\n${lines.join("\n")}\n}`
  }, [colors, radius, isDark, baseFor])

  async function copy() {
    if (!cssBlock) return
    try {
      await navigator.clipboard.writeText(cssBlock)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard can be blocked; the CSS is displayed below either way.
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="outline">
          Editing {isDark ? "dark" : "light"} theme
        </Badge>
        <p className="text-meta text-muted-foreground">
          Changes apply live and are discarded on reload.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-h4">Colors</h3>
            <div className="space-y-3">
              {COLOR_TOKENS.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  <input
                    type="color"
                    aria-label={`--${t.name}`}
                    value={valueFor(t.name)}
                    onChange={(e) => setColor(t.name, e.target.value)}
                    className="size-9 shrink-0 cursor-pointer rounded-md border bg-transparent p-0.5"
                  />
                  <Label className="w-44 shrink-0 font-mono text-meta">
                    --{t.name}
                  </Label>
                  <Input
                    value={valueFor(t.name)}
                    onChange={(e) => setColor(t.name, e.target.value)}
                    className="h-9 max-w-28 font-mono text-meta"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-h4">Radius</h3>
            <div className="flex items-center gap-4">
              <Slider
                value={[radius]}
                onValueChange={([v]) => setRadiusValue(v)}
                min={0}
                max={24}
                step={1}
                className="max-w-xs"
              />
              <span className="font-mono text-meta text-muted-foreground">
                {radius}px
              </span>
            </div>
            <p className="max-w-[52ch] text-meta text-muted-foreground">
              This system defaults to 2px — near-square by design. Pills are a
              separate token and are unaffected by this slider.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={reset}>
              <RotateCcwIcon /> Reset
            </Button>
            <Button onClick={copy} disabled={!cssBlock}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied" : "Copy CSS"}
            </Button>
          </div>

          {cssBlock ? (
            <pre className="overflow-x-auto rounded-md border bg-muted p-4 font-mono text-meta">
              {cssBlock}
            </pre>
          ) : (
            <p className="text-meta text-muted-foreground">
              Adjust a token to generate the CSS to paste into{" "}
              <code>src/app/globals.css</code>.
            </p>
          )}
        </div>

        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <h3 className="text-h4">Live preview</h3>
          <Card>
            <CardHeader>
              <CardTitle>Northwind</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                A financial super-app, redesigned around everyday clarity.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Product design</Badge>
                <Badge variant="outline">iOS</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-pill">View case study</Button>
                <Button variant="outline">Share</Button>
              </div>
            </CardContent>
          </Card>
          <div className="rounded-md bg-accent p-6 text-accent-foreground">
            <p className="text-h3">Accent band</p>
            <p className="mt-2 text-sm opacity-80">
              The one accent surface, as it would appear on a hero.
            </p>
          </div>
          <div className="space-y-2 rounded-md border p-6">
            <p className="text-h2">Type in context</p>
            <p className="text-lead text-muted-foreground">
              A lead paragraph, set against your current tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
