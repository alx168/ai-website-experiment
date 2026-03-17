# Architecture

## Purpose

This repository is structured to support AI-first website development. The architecture should help agents find context quickly, make small safe changes, and leave the project in a more understandable state after each update.

## Current state

The project is in a documentation-first bootstrap phase.

The current architecture is centered on:

- top-level operating rules in `AGENTS.md`,
- structured repository knowledge in `docs/`,
- execution tracking in `docs/exec-plans/`,
- and future application code added only after the core setup is stable.

## Core layers

### 1. Repository rules layer

`AGENTS.md` defines the top-level working rules for agents in this repository.

It should stay short and point to more specific documentation whenever possible.

### 2. Knowledge layer

`docs/` is the structured system of record for:

- product direction,
- architecture,
- quality expectations,
- decisions,
- and execution plans.

### 3. Application layer

Future application code will live separately from repository governance docs.

Planned default stack:

- Next.js
- TypeScript
- Tailwind CSS

This stack is the default assumption unless later decisions change it.

### 4. Verification layer

Tests, checks, and automation will be added after core setup is complete.

These should help agents detect mistakes early and reduce drift over time.

## Directory responsibilities

- `AGENTS.md` — top-level operating guide
- `README.md` — project overview
- `docs/` — structured project knowledge
- `docs/exec-plans/` — active and completed work plans
- future `app/`, `components/`, `lib/`, and `tests/` directories — implementation and verification

## Architecture principles

- Keep rules discoverable.
- Prefer small, explicit files over large mixed documents.
- Separate project governance from application code.
- Record major decisions when structure changes.
- Add tooling only when the repository is ready to support it well.

## Near-term target

The next architectural milestone is to complete the core documentation layer, then scaffold the first minimal application structure.
