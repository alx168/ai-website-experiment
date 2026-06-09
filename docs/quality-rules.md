# Quality Rules

## Purpose

These rules define the minimum quality bar for changes made in this repository.

## General rules

- Prefer small, reviewable diffs.
- Do not mix unrelated changes in one update.
- Keep documentation aligned with meaningful repository changes.
- Prefer explicit structure over hidden assumptions.
- Do not introduce new tools or patterns without a documented reason.

## Documentation rules

- Update docs when product direction, architecture, or workflow changes.
- Keep docs focused and easy to scan.
- Prefer adding or editing the most relevant existing document over duplicating information.
- Record meaningful decisions in a durable location.

## Architecture rules

- Keep repository governance separate from application code.
- Prefer predictable file locations and naming.
- Do not introduce major structural changes without documenting them.
- Default technical direction is Next.js + TypeScript + Tailwind unless changed by a documented decision.

## Change management rules

- Significant changes should follow a written plan.
- Prefer iterative progress over broad rewrites.
- When a change creates follow-up work, capture it in the appropriate planning doc.
- Avoid speculative complexity during bootstrap.

## App code rules

- App scaffolding should begin only after the core documentation layer is in place.
- Favor simple, readable patterns over clever abstractions.
- New dependencies should be introduced cautiously and only when they clearly help.

## Testing and automation rules

- Tests and automation should be added after core setup is stable.
- Once added, new behavior should come with appropriate checks.
- Quality tooling should help agents catch mistakes early, not create noise.

## Accessibility rules

- Accessibility should be treated as a default quality requirement for UI work.
- Semantic structure, keyboard support, and readable content should be part of the baseline.

## Bootstrap rule

During the current phase, prioritize clarity, structure, and forward progress over completeness.
