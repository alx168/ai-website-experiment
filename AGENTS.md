# AGENTS.md

## Purpose

This repository is an experiment in building a production-quality website using **AI prompts only**.

The primary goal is not just to produce a working site. The primary goal is to create a **high-quality agent harness**: a repository structure, rule set, and workflow that allows AI systems to make reliable, maintainable, auditable changes over time.

This repository is inspired by OpenAI’s article:

- **Harness engineering: leveraging Codex in an agent-first world**
- https://openai.com/index/harness-engineering/

This file is the operating constitution for any AI system or human acting on behalf of an AI system in this repository.

---

## Mission

When working in this repository:

1. **Prioritize harness quality over speed of implementation.**
2. **Optimize for future agent legibility, not short-term cleverness.**
3. **Prefer explicit rules, small diffs, and predictable structure.**
4. **Treat documentation, tests, and conventions as first-class product assets.**
5. **If the code quality is poor, improve the harness rather than patching manually.**

---

## Core Operating Principle

**Human input should be limited to goals, approvals, and prompts. Repository mutations should be performed by agents whenever possible.**

Because a repo-connected coding agent may not always be available, this project allows a controlled fallback:

> **Approved Exception:** A human may use GitHub’s web UI to create or update files **only to apply AI-generated content** when no repo-connected coding agent is available.

This exception exists to preserve project momentum while maintaining the spirit of AI-only development.

---

## Hard Constraints

### 1) No manual authorship of application source code
Humans should not manually write original application code.

This includes:
- UI components
- utility functions
- API routes
- tests
- config files
- scripts
- styles
- infrastructure code

### 2) Manual application is allowed only as transport
A human may:
- create files in GitHub web UI
- paste AI-generated file contents
- create commits in GitHub web UI
- open or merge pull requests
- request revisions from an AI system

A human should **not**:
- hand-edit code “just a little”
- fix bugs manually in the browser editor
- tweak formatting manually
- silently refactor without AI generation
- insert “temporary” handwritten code unless explicitly recorded as an exception

### 3) Exceptions must be documented
If a human must manually author or modify code for any reason, that must be explicitly documented in:
- `docs/prompt-log.md`
- optionally `docs/decisions.md` if it changes project policy

Manual exceptions should be rare and visible.

### 4) No undocumented architectural changes
Do not introduce:
- new frameworks
- new major dependencies
- new architectural patterns
- new build/deploy assumptions
- new state management strategies

…without updating the relevant docs.

---

## Preferred Future Stack (Default Assumptions)

Unless explicitly changed in project docs, assume the intended future stack is:

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Formatting:** Prettier
- **Testing:** automated tests from day 1
- **UI approach:** component-driven, accessible, maintainable

These are assumptions, not yet implementation requirements, until the app scaffold exists.

---

## Agent Priorities (in order)

When making decisions, prioritize in this order:

1. **Clarity**
2. **Explicitness**
3. **Minimalism**
4. **Consistency with existing repo rules**
5. **Documentation accuracy**
6. **Test coverage**
7. **Performance**
8. **Abstraction only when justified**

If two implementations are both valid, choose the one that is easier for the next agent to understand.

---

## Required Workflow for Any Significant Change

For any significant change, the acting agent should:

1. Inspect the current repository state.
2. Read `AGENTS.md` first.
3. Review relevant docs in `docs/`.
4. Propose or apply the **smallest viable change** that satisfies the request.
5. Preserve existing conventions unless there is a documented reason to change them.
6. Update documentation if assumptions, structure, or behavior changed.
7. Add or update tests if behavior changed.
8. Summarize:
   - what changed
   - assumptions made
   - risks or follow-up items
9. Ensure the change is legible to future agents.

---

## Documentation Is Part of the Product

Documentation is not optional.

When changes are made, update docs if relevant:

- `README.md` for workflow or project-level changes
- `docs/product-spec.md` for scope or product direction changes
- `docs/architecture.md` for structure, patterns, or technical assumptions
- `docs/quality-rules.md` for coding standards or enforcement changes
- `docs/prompt-log.md` after every significant AI-generated change
- `docs/decisions.md` for durable or architectural decisions

If you changed the system and did not update the relevant docs, the work is incomplete.

---

## Change Management Rules

### Prefer small diffs
Make the smallest reasonable change that achieves the goal.

Avoid:
- broad rewrites without request
- speculative cleanup
- mixing unrelated changes
- “while I’m here” edits

### Preserve legibility
Optimize for:
- predictable naming
- shallow cognitive load
- obvious file locations
- clear boundaries
- straightforward control flow

### Avoid hidden magic
Do not introduce:
- overly clever abstractions
- meta-programming unless clearly justified
- implicit behavior that future agents may miss
- premature generic systems
- configuration sprawl without need

### Avoid speculative architecture
Do not build systems for hypothetical future needs.

Build for:
- current requirements
- clear acceptance criteria
- the next likely step only

---

## File Organization Rules

Until the app scaffold exists, prioritize a clean documentation harness.

Once app code exists, follow these principles unless superseded by `docs/architecture.md`:

- Keep files where future agents would intuitively expect them.
- Prefer conventional framework structure over custom organization.
- Group by feature or framework convention, not by abstract theory.
- Avoid deep nesting unless it clearly improves clarity.
- Keep related tests near the code they verify when appropriate.
- Do not create directories “for later” without current need.

---

## Coding Style Preferences

When code is introduced in later phases:

- Prefer readable, explicit code over compact cleverness.
- Use descriptive names.
- Avoid single-letter variable names except for conventional tiny scopes.
- Prefer pure functions when practical.
- Keep components focused and reasonably small.
- Avoid deeply nested conditionals when a clearer structure exists.
- Keep side effects obvious.
- Make error states explicit.
- Favor standard framework patterns over custom inventions.

---

## Testing Expectations

When code exists and behavior changes:

- Add or update tests in the same change.
- Do not ship behavior changes without test coverage unless explicitly justified.
- Test behavior, not internal implementation details.
- Prefer small, focused tests.
- Avoid brittle snapshot-heavy strategies unless clearly useful.
- If testing is deferred, document why in `docs/prompt-log.md`.

No test update + behavior change = incomplete work.

---

## Accessibility Expectations

When UI code exists:

- Use semantic HTML first.
- Keyboard accessibility is required.
- Form controls must be labeled.
- Interactive elements must have clear accessible names.
- Color alone must not convey essential meaning.
- Basic focus states must be preserved.
- Prefer accessible primitives over custom widgets.

Accessibility is a baseline requirement, not a polish pass.

---

## Dependency Rules

Do not add dependencies casually.

A new dependency should only be added if:

1. It solves a real current problem.
2. Native platform/framework features are insufficient.
3. It materially reduces complexity or improves quality.
4. The tradeoff is documented if significant.

When adding a dependency:
- justify it in the change summary
- update docs if it changes architecture or workflow
- prefer mature, well-supported, conventional choices

---

## Allowed Human Actions (Current Approved Model)

Because a repo-connected coding agent is not currently available, the human operator may:

- create or edit files in GitHub web UI **only by applying AI-generated content**
- create commits in GitHub web UI
- create branches or pull requests
- merge approved changes
- paste AI-generated diffs or file contents
- ask for revisions
- review outputs for correctness, clarity, and policy compliance

This is an operational exception, not the ideal target state.

---

## Disallowed Human Actions (Current Approved Model)

The human operator should not:

- manually write original code
- manually refactor code
- manually fix lint/type/test issues
- manually adjust logic after generation
- “just tweak one line” without routing through AI
- silently edit docs that affect project policy without recording it
- introduce hidden manual changes that future agents cannot trace

If it was manually authored, it must be documented.

---

## Prompting Guidance for Future Agents

When receiving a task:

- Restate the goal internally as a concrete implementation target.
- Inspect current repo state before acting.
- Read this file first.
- Respect existing conventions.
- Ask for clarification **only** if ambiguity materially changes implementation.
- If ambiguity is minor, choose the most conservative and legible option.
- If multiple valid paths exist, prefer the one with:
  - fewer files changed
  - lower cognitive overhead
  - lower long-term maintenance burden
  - stronger alignment with existing docs

---

## Definition of Done (Repository Standard)

A significant change is considered complete only when:

- the requested change is implemented
- the change follows repo conventions
- docs are updated if needed
- tests are added/updated if behavior changed
- assumptions are documented
- no undocumented architecture drift was introduced
- the result is legible to future agents

If any of the above is missing, the change is not done.

---

## When in Doubt

When uncertain, choose the path that is:

1. **Clearer**
2. **More explicit**
3. **Smaller in scope**
4. **Better documented**
5. **More testable**
6. **More conventional**
7. **Less magical**

If still uncertain:
- do less, not more
- preserve existing structure
- document assumptions
- ask for clarification only if the ambiguity would materially change the implementation

---

## Current Project Status Assumption

At the time this file was created:

- the repository is in a **documentation-first bootstrap phase**
- the app scaffold may not exist yet
- the current priority is to build the harness before generating application code
- the human operator is currently using **ChatGPT + GitHub web UI** as a temporary fallback in place of a repo-connected coding agent

Any future agent should preserve this context unless later docs supersede it.
