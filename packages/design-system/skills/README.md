# Guardrail skills

Four skills that hold work to this design system's conventions. They fire
automatically in Claude Code — there is nothing to run.

```bash
mkdir -p .claude/skills
cp -r node_modules/@farnazshahriari/design-system/skills/* .claude/skills/
```

Commit them, and everyone on the project gets them.

| Skill | Fires when |
| --- | --- |
| `design-tokens` | Any colour, radius, type or spacing value |
| `page-patterns` | Building or editing a page or layout |
| `add-component` | Adding or modifying a UI component |
| `motion-recipes` | Any animation, transition or hover effect |

## Reading them in your project

These files are copied verbatim from the design system's own repo, so they
name paths as they exist *there*. Two of those paths mean something
different once the system is a dependency:

| The skills say | In your project that means |
| --- | --- |
| `packages/design-system/theme.css` | `node_modules/@farnazshahriari/design-system/theme.css` — **read-only**. Override tokens by redeclaring them in your own `globals.css`, after the theme import |
| `packages/design-system/src/components/ui/` | `node_modules/@farnazshahriari/design-system/src/components/ui/` — read it to see how a component works; don't edit it, since `npm update` overwrites it |

The rules themselves are unchanged: still no raw colours, still no
shadows, still a page as a stack of Sections wrapping Containers.

The `add-component` skill describes adding a component *to the system*. In
a consuming project that is usually the wrong move — a component that
belongs to the system should be added upstream, where every project gets
it. Its rules (strip shadows, check both themes and 390px) still apply to
anything genuinely local to one project.
