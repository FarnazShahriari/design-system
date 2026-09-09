// The guardrail skills exist twice: .claude/skills/ (active in this repo) and
// packages/design-system/skills/ (shipped to anyone who installs the package).
// They are meant to be byte-identical — a rule that only holds in one of them
// is worse than no rule, because it holds silently. This catches the drift.
//
// The two READMEs are deliberately different: one explains how to reuse the
// skills in your other repos, the other translates the repo paths for a
// consuming project. Only SKILL.md files are compared.
import { readdirSync, readFileSync, existsSync } from "node:fs"
import { join } from "node:path"

const REPO = ".claude/skills"
const SHIPPED = "packages/design-system/skills"

const names = (dir) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()

const repo = names(REPO)
const shipped = names(SHIPPED)
const problems = []

for (const name of repo) {
  if (!shipped.includes(name)) {
    problems.push(`${name}: in ${REPO} but not shipped in ${SHIPPED}`)
    continue
  }
  const a = join(REPO, name, "SKILL.md")
  const b = join(SHIPPED, name, "SKILL.md")
  if (!existsSync(b)) {
    problems.push(`${name}: ${b} is missing`)
  } else if (readFileSync(a, "utf8") !== readFileSync(b, "utf8")) {
    problems.push(`${name}: SKILL.md differs between the two copies`)
  }
}
for (const name of shipped) {
  if (!repo.includes(name)) problems.push(`${name}: shipped but not in ${REPO}`)
}

if (problems.length) {
  console.error("\n  Skill copies are out of sync:\n")
  for (const p of problems) console.error(`  FAIL  ${p}`)
  console.error(`\n  Fix: cp ${REPO}/<name>/SKILL.md ${SHIPPED}/<name>/SKILL.md\n`)
  process.exit(1)
}

console.log(`  All ${repo.length} skills are in sync between the repo and the package.`)
