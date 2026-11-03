#!/usr/bin/env bash
# Regenerates everything /design-sync needs that this repo does not commit.
#
# All four outputs are gitignored, so a fresh clone has none of them and a
# stale one fails silently rather than loudly. Run this before /design-sync.
# The reasoning behind each step is in .design-sync/NOTES.md.
set -euo pipefail
cd "$(dirname "$0")/.."
PKG=packages/design-system

echo "1/4  type declarations -> $PKG/types/"
# The converter discovers components from a .d.ts tree. This package ships
# TypeScript source and has no build, so without this it finds zero
# components. Emitted to types/ specifically: that is one of the directory
# names the converter looks in. Never published — package.json `files`
# excludes it.
( cd "$PKG" && npx tsc -p tsconfig.json --declaration --emitDeclarationOnly --noEmit false --outDir types )

echo "2/4  root index.d.ts shim"
# The converter resolves its *types root* to types/ but computes its type
# project *entry* as <pkgRoot>/index.d.ts. With no `types` field in
# package.json that path does not exist, so it loads the tree and still sees
# no exports. This one line bridges the two.
cat > "$PKG/index.d.ts" <<'SHIM'
/* Generated for design-sync, never published (package.json `files` excludes it).
   The converter's type project resolves its entry as <pkgRoot>/index.d.ts while
   its types root resolves to types/ — this shim bridges the two. */
export * from "./types/index";
SHIM

echo "3/4  compiled stylesheet -> $PKG/.ds-compiled.css"
# The package ships no CSS. Its components are styled entirely by Tailwind
# utilities that exist only once Tailwind has scanned the source, so pointing
# the converter at theme.css alone yields correct colours and no layout at
# all. Both @source lines in .ds-tw-entry.css are load-bearing — see NOTES.
npx @tailwindcss/cli -i "$PKG/.ds-tw-entry.css" -o "$PKG/.ds-compiled.css"

echo "4/4  theme tokens -> $PKG/.ds-tokens/tokens.css"
# Claude Design builds its colour and type lists by scanning the stylesheets.
# In the compiled CSS the brand's tokens sit behind Tailwind's whole default
# palette, and the scan never reached them. This puts them first.
node scripts/design-sync-tokens.mjs

echo
echo "Ready. Now run /design-sync in Claude Code."
