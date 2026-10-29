/**
 * Reads the token values straight out of the package's theme.css and checks every
 * pair that carries meaning against WCAG AA. Run it after changing any colour.
 *
 * Section themes are parsed from the stylesheet too, rather than restated here.
 * They used to be hardcoded, which meant this file could quietly disagree with
 * the theme it was supposed to be checking.
 *
 *   npm run check:contrast
 *
 * Exits non-zero on a failure so it can gate CI later.
 */
import { readFileSync } from "node:fs"

const CSS = readFileSync(new URL("../packages/design-system/theme.css", import.meta.url), "utf8")

function block(selector) {
  // Anchored to the start of a line: an example like `:root { --accent: … }`
  // inside a doc comment would otherwise match first and yield a block with
  // one token in it, which fails confusingly far from the cause.
  const re = new RegExp(`^${selector}\\s*\\{([\\s\\S]*?)\\n\\}`, "m")
  const body = CSS.match(re)?.[1] ?? ""
  const out = {}
  for (const [, name, value] of body.matchAll(/--([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) {
    out[name] = value.toLowerCase()
  }
  return out
}

const srgb = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)
function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b)
}
function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m)
  return (x + 0.05) / (y + 0.05)
}

/** [label, foreground token, background token, required ratio] */
const CHECKS = [
  ["body text", "foreground", "background", 4.5],
  ["meta text on background", "muted-foreground", "background", 4.5],
  ["meta text on muted", "muted-foreground", "muted", 4.5],
  ["meta text on accent surface", "muted-foreground", "accent", 4.5],
  ["primary button", "primary-foreground", "primary", 4.5],
  ["secondary button", "secondary-foreground", "secondary", 4.5],
  ["accent surface text", "accent-foreground", "accent", 4.5],
  ["destructive button", "destructive-foreground", "destructive", 4.5],
  ["text selection", "selection-fg", "selection-bg", 4.5],
  // 3:1 is the non-text threshold: a control's boundary must be identifiable,
  // and the focus ring must be visible. Decorative dividers (--border) are exempt.
  ["input boundary", "input", "background", 3],
  ["input boundary on muted", "input", "muted", 3],
  ["focus ring", "ring", "background", 3],
  // The point is a mark, never text. 3:1 is the bar it has to clear; it is
  // expected to miss 4.5:1, which is why the brand forbids coloured text.
  ["point marker on background", "point", "background", 3],
  ["point marker on muted", "point", "muted", 3],
]

/**
 * Section themes re-declare tokens for a subtree. Parsed from the stylesheet
 * so this check cannot drift from what the theme actually says. A section
 * only overrides some tokens, so each one is layered over the page theme it
 * sits in — exactly how the cascade resolves it in a browser.
 */
function sectionNames() {
  return [...CSS.matchAll(/^\[data-section="([a-z]+)"\]\s*\{/gm)].map((m) => m[1])
}

const SECTION_CHECKS = [
  ["body text", "foreground", "background", 4.5],
  ["meta text", "muted-foreground", "background", 4.5],
  ["button on the band", "primary-foreground", "primary", 4.5],
  ["input boundary", "input", "background", 3],
  ["point marker", "point", "background", 3],
]

let failed = 0
for (const [theme, selector] of [["light", ":root"], ["dark", "\\.dark"]]) {
  const light = block(":root")
  const tokens = theme === "light" ? light : { ...light, ...block(selector) }
  console.log(`\n  ${theme.toUpperCase()}`)
  for (const [label, fg, bg, need] of CHECKS) {
    if (!tokens[fg] || !tokens[bg]) {
      console.log(`  ?  ${label} — token missing, skipped`)
      continue
    }
    const ratio = contrast(tokens[fg], tokens[bg])
    const pass = ratio >= need
    if (!pass) failed++
    console.log(
      `  ${pass ? "PASS" : "FAIL"}  ${label.padEnd(28)} ${tokens[fg]} on ${tokens[bg]}  ` +
      `${ratio.toFixed(2)}:1 (need ${need})`
    )
  }
}

// A section theme is checked inside both page themes: it only overrides some
// tokens, and the rest it inherits differ between light and dark.
const lightBase = block(":root")
const darkBase = { ...lightBase, ...block("\\.dark") }

console.log("\n  SECTION THEMES")
for (const name of sectionNames()) {
  const overrides = block(`\\[data-section="${name}"\\]`)
  for (const [page, base] of [["", lightBase], [" (dark page)", darkBase]]) {
    const tokens = { ...base, ...overrides }
    for (const [label, fg, bg, need] of SECTION_CHECKS) {
      if (!tokens[fg] || !tokens[bg]) continue
      const ratio = contrast(tokens[fg], tokens[bg])
      const pass = ratio >= need
      if (!pass) failed++
      console.log(
        `  ${pass ? "PASS" : "FAIL"}  ${(`section: ${name}${page} / ${label}`).padEnd(42)} ` +
        `${tokens[fg]} on ${tokens[bg]}  ${ratio.toFixed(2)}:1 (need ${need})`
      )
    }
  }
}

console.log(
  failed === 0
    ? "\n  All pairs meet WCAG AA.\n"
    : `\n  ${failed} pair(s) below the required ratio.\n`
)
process.exit(failed === 0 ? 0 : 1)
