# @farnazshahriari/design-system

Tokens, 52 components, layout primitives and motion — as a living
dependency. Change a token here, publish, and every site that installs it
follows.

## Install

The package is on GitHub Packages, so npm needs to be told where its scope
lives. Once per machine, in `~/.npmrc`:

```
@farnazshahriari:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

The token is a GitHub personal access token with `read:packages`. In CI,
use a repository secret rather than a committed file.

```bash
npm install @farnazshahriari/design-system
```

## Wire it up

Three things, once per project.

**1. `next.config.ts`** — the package ships TypeScript source, so Next
compiles it:

```ts
const nextConfig: NextConfig = {
  transpilePackages: ["@farnazshahriari/design-system"],
}
```

**2. Your `globals.css`:**

```css
@import "tailwindcss";
@import "@farnazshahriari/design-system/theme.css";
@source "../../node_modules/@farnazshahriari/design-system";
```

The `@source` line is load-bearing. Tailwind only generates the utility
classes it can see used, and it does not scan `node_modules` by default —
without it the components arrive unstyled.

**3. Wrap the app** in the providers the system expects:

```tsx
import { ThemeProvider, MotionProvider } from "@farnazshahriari/design-system"
import { TooltipProvider } from "@farnazshahriari/design-system/ui/tooltip"

<ThemeProvider attribute="class" defaultTheme="light">
  <MotionProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </MotionProvider>
</ThemeProvider>
```

## Use it

```tsx
import { Button } from "@farnazshahriari/design-system/ui/button"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Container } from "@farnazshahriari/design-system/ui/container"

<Section theme="dark" rhythm="lg">
  <Container>
    <h1 className="text-display">Anything</h1>
    <Button className="rounded-pill">This inverts on its own</Button>
  </Container>
</Section>
```

Deep imports (`/ui/button`) are worth preferring over the barrel — they
keep the module graph small and make a file's real dependencies obvious.

## Updating

```bash
npm update @farnazshahriari/design-system
```

With a caret range (the default), a fresh install on your next deploy picks
up the newest compatible version, so a colour changed upstream reaches a
deployed site on its next build without touching its code.

## Departing from the system, deliberately

Redeclare a token *after* the theme import. Everything else stays in step,
and the difference is one visible line rather than a fork:

```css
@import "@farnazshahriari/design-system/theme.css";

:root { --accent: #b4531f; }   /* this project runs warm */
```

If a project needs a component to differ structurally, that is a signal the
component needs a variant here rather than a local edit — a local copy stops
receiving updates, which is the thing this package exists to prevent.

## Conventions

`skills/` ships the four guardrail skills. Copy them into a consuming
project's `.claude/skills/` and Claude Code will hold that project to the
same conventions:

```bash
cp -r node_modules/@farnazshahriari/design-system/skills/* .claude/skills/
```
