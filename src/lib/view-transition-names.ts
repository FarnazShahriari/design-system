/**
 * View-transition names, in one place so both sides of a morph agree.
 *
 * Deliberately a plain module, not part of the client component: server
 * components need to call this to name the destination element, and a
 * function exported from a "use client" file cannot be invoked on the server.
 */
export function projectTitleTransition(slug: string) {
  return `project-title-${slug}`
}
