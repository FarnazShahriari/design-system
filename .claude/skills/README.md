# Skills

Four guardrail skills that keep work in this repo consistent with the
design system. They cover the four places drift actually happens: raw
values instead of tokens, hand-rolled layout instead of the primitives,
components that arrive not matching, and invented motion.

| Skill | Fires when |
| --- | --- |
| `design-tokens` | Any colour, radius, type or spacing value |
| `page-patterns` | Building or editing a page or layout |
| `add-component` | Adding or modifying anything in `components/ui/` |
| `motion-recipes` | Any animation, transition or hover effect |

## They already work here

These are committed to the repo, so Claude Code picks them up automatically
for anyone who clones it. Nothing to install, and nothing to remember.

## Using them outside this repo

To have the same conventions apply in your other projects, copy them into
your personal skills directory:

```bash
mkdir -p ~/.claude/skills
cp -r .claude/skills/{design-tokens,page-patterns,add-component,motion-recipes} ~/.claude/skills/
```

Personal skills load in every project, so only do this if you are building
things that use this design system from other repos — otherwise the repo
copy is enough, and one copy is easier to keep current than two.
