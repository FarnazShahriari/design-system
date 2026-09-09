/**
 * Reads the token values straight out of src/app/globals.css and checks every
 * pair that carries meaning against WCAG AA. Run it after changing any colour —
 * especially --accent, which is the token meant to be swapped per project.
 *
 *   npm run check:contrast
 *
 * Exits non-zero on a failure so it can gate CI later.
 */
import { readFileSync } from "node:fs"

const CSS = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8")

function block(selector) {
  const re = new RegExp(`${selector}\\s*\\{([\\s\\S]*?)\\n\\}`, "m")
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
  ["primary button", "primary-foreground", "primary", 4.5],
  ["secondary button", "secondary-foreground", "secondary", 4.5],
  ["accent surface text", "accent-foreground", "accent", 4.5],
  ["destructive button", "destructive-foreground", "destructive", 4.5],
  ["text selection", "selection-fg", "selection-bg", 4.5],
  // 3:1 is the non-text threshold: a control's boundary must be identifiable,
  // and the focus ring must be visible. Decorative dividers (--border) are exempt.
  ["input boundary", "input", "background", 3],
  ["focus ring", "ring", "background", 3],
  ["accent block on background", "accent", "background", 3],
  ["accent block on muted", "accent", "muted", 3],
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

console.log(
  failed === 0
    ? "\n  All pairs meet WCAG AA.\n"
    : `\n  ${failed} pair(s) below the required ratio.\n`
)
process.exit(failed === 0 ? 0 : 1)
