# AI Website Experiment

This repository documents an experiment in building a website with AI agents and AI-generated changes, while minimizing or avoiding manually written application code.

## Purpose

The goal is not only to build a website, but to build a reliable harness around AI-driven development. That means the repository should help agents:

- find the right context quickly,
- make small, traceable changes,
- follow consistent rules,
- record decisions and prompts,
- and improve over time without drifting.

## Current phase

This project is currently in a documentation-first bootstrap phase.

Before substantial app code is generated, the repository should establish:

- clear project goals,
- structured documentation,
- source tracking,
- prompt logging,
- execution plans,
- and lightweight quality checks.

## Working principles

- Repository docs are the source of truth.
- Significant AI-generated changes must be logged.
- Plans should be written down before large changes.
- Small diffs are preferred over broad rewrites.
- Architecture changes must be documented.
- Tests and checks should grow with the project.

## Core docs

- `AGENTS.md` — top-level operating rules for agents
- `docs/index.md` — map of repository documentation
- `docs/sources.md` — canonical and secondary sources
- `docs/product-spec.md` — product goals and scope
- `docs/architecture.md` — system structure and technical direction
- `docs/prompt-log.md` — running log of significant prompts and outputs
- `docs/exec-plans/` — active and completed execution plans

## Status

Bootstrap in progress.
