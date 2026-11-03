#!/usr/bin/env node
// Writes packages/design-system/.ds-tokens/tokens.css: the theme's tokens as
// plain CSS custom properties, for claude.ai/design's colour and type lists.
//
// Those lists come from scanning the project's stylesheets, and in the
// compiled Tailwind output the brand's own :root sits ~3,700 lines down,
// behind Tailwind's default palette. The scan never reached it: the project
// listed --color-blue-600 and not --background. This file is imported first
// in styles.css (cfg.tokensPkg + cfg.tokensGlob), so the brand is what it sees.
//
// Derived from theme.css on every prep, so it cannot drift. Not committed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const PKG = join(dirname(fileURLToPath(import.meta.url)), "../packages/design-system")
const css = readFileSync(join(PKG, "theme.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "")

// Top-level blocks whose selector is one of the theme scopes, copied verbatim.
// None of them nest, so the first closing brace ends each one.
const scopes = [...css.matchAll(/^(:root|\.dark|\[data-section="[a-z]+"\])\s*\{([^}]*)\}/gm)]
  .map(([, sel, body]) => `${sel} {${body}}`)

// The @theme inline block holds the type scale, radius, fonts and easing.
// "inline" means Tailwind substitutes these away at build time, so they never
// exist as custom properties at runtime. Re-declare the ones a person would
// look for. --color-* are skipped: they only alias the :root values above.
const themeBody = css.match(/@theme inline\s*\{([\s\S]*?)\n\}/)[1]
const FONTS = { "--font-inter": '"Inter"', "--font-geist-mono": '"Geist Mono"' }
const design = [...themeBody.matchAll(/^\s*(--[\w-]+):\s*([^;]+);/gm)]
  .filter(([, name]) => !name.startsWith("--color-"))
  .map(([, name, value]) => {
    // var(--font-inter, a, b) -> "Inter", a, b: the family next/font would supply.
    const v = value.replace(/var\((--font-[\w-]+),\s*(.*)\)$/, (m, f, rest) =>
      FONTS[f] ? `${FONTS[f]}, ${rest}` : m)
    return `  ${name}: ${v};`
  })

const out = join(PKG, ".ds-tokens")
mkdirSync(out, { recursive: true })
writeFileSync(
  join(out, "tokens.css"),
  `/* Generated from theme.css by scripts/design-sync-tokens.mjs. Do not edit. */\n` +
    `:root {\n${design.join("\n")}\n}\n\n${scopes.join("\n\n")}\n`
)
console.log(`  ${scopes.length} theme scopes + ${design.length} design tokens -> ${join(out, "tokens.css")}`)
