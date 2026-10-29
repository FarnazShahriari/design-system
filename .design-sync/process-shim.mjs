/**
 * Some components in this design system import `next/link` and
 * `next/navigation` (LinkUnderline, ProjectGrid, the view-transition helper).
 * Bundling them pulls in Next's client runtime, which reads
 * `process.env.__NEXT_ROUTER_BASEPATH` and friends at module-evaluation time.
 * Claude Design renders plain React in a browser, where `process` does not
 * exist — so every component threw "ReferenceError: process is not defined"
 * before anything rendered.
 *
 * Defining the few Next flags would not be enough: they are read off
 * `process.env`, so `process` itself has to exist. An empty env is exactly
 * right here — every flag falls back to its default (no basePath, no i18n,
 * no trailing-slash rewriting), which is what a preview should do.
 *
 * This file lives at the repo root rather than inside the package on purpose:
 * the package declares `sideEffects: ["*.css"]`, which would permit esbuild to
 * drop a side-effect-only module. The root package.json declares no
 * sideEffects field, so this is always evaluated.
 *
 * cfg.extraEntries lists it, and the converter emits extraEntries ahead of the
 * design system's own entry — so this runs before Next's code reads env.
 */
if (typeof globalThis.process === "undefined") {
  globalThis.process = { env: {} };
} else if (!globalThis.process.env) {
  globalThis.process.env = {};
}

/** Exported so the module is reachable and never tree-shaken away. */
export const __dsProcessShim = true;
