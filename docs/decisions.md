# Decisions

This file records meaningful project decisions that affect structure, workflow, or technical direction.

## Decision format

For each decision, record:

- date
- decision
- status
- rationale
- consequences

---

## 2026-06-09 - Documentation-first bootstrap

- Status: accepted
- Decision: complete core repository documentation before substantial app scaffolding.
- Rationale: the project is testing an AI-first workflow, so the harness and repository structure should exist before implementation grows.
- Consequences: tests, prompt logging automation, and broader tooling are deferred until core setup is stable.

## 2026-06-09 - Default technical direction

- Status: accepted
- Decision: assume Next.js + TypeScript + Tailwind CSS as the default stack unless superseded later.
- Rationale: this provides a clear default path for future AI-generated scaffolding.
- Consequences: future app structure and docs should align with this unless a later decision changes it.

## 2026-06-09 - Prompt logging deferred until after core setup

- Status: accepted
- Decision: finish core setup before implementing tests and automated prompt logging.
- Rationale: core structure should be stable before adding verification and instrumentation layers.
- Consequences: prompt tracking is not yet a required part of the workflow during bootstrap.
