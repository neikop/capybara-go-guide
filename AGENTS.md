# Repository instructions — Capybara Go Guide

## Before editing

- Read `README.md`, `DESIGN.md`, and `PROJECT_MEMORY.md`. These instructions incorporate the imported template's `AGENTS 2.md`.
- Work in `/Users/neikop/Workings/Dev/capybara-go-guide` on this machine, or the current checkout on another machine. The old `Documents/Codex/.../new-chat` copies are obsolete.
- Inspect `git status --short` and the nearest implementation; preserve unrelated user work and the index.
- Search for an existing component, hook, token, or helper before adding one. Do not stage, unstage, commit, or push unless explicitly requested.

## Architecture and source ownership

- This is a Vite/React/TypeScript app. Use pnpm 8.9.2, Chakra primitives, semantic tokens, and shared UI. Follow `DESIGN.md` for naming, props, source hygiene, React state and TypeScript rules.
- Capybara feature code belongs in `src/views/Guide`. `components/ui` remains domain-neutral; it must not import feature types or data.
- Edit guide content in `data/content.ts`, skill wording/tier/notes in `data/skills.ts`, references in `data/sources.ts` under that feature.
- Use React Router URL state for navigation and shareable skill filters; nearest component/hook for local state; React Hook Form for forms. Keep external lifecycle/storage synchronization in effects with cleanup.
- Do not inject the old HTML into React, render imperative HTML strings, or restore the old generator/server pipeline. `public/docs` and `docs/sources` are reference documents/snapshots, not runtime UI sources.
- Keep one implementation. Remove replaced code, stale imports, dead exports, demos, debug output, and temporary scaffolding.
- Do not manually edit `dist/`, `node_modules/`, generated Chakra typings, or `pnpm-lock.yaml`.

## Editorial contract

- Explanations are Vietnamese; preserve English skill/item names and exact English descriptions from source.
- Skill tiers are conditional recommendations for Whisperer PvE, not universal rankings. Distinguish skill/gem, active/deploy, level/stars/awakening, and description variants.
- Explain reasons, conditions, and supported temporary alternatives. Do not invent selector pools, prices, pity, drop rates or current event schedules.
- Record source/date and preserve unresolved contradictions. A read date is not a game patch date.
- Account day/chapter/spending in the guide is historical. Do not infer current progress or remaining balance.

## Verification and handoff

- Theme/token/recipe changes: run `pnpm chakra-typegen` first; keep `/components` examples and theme docs consistent.
- Run `pnpm check` before handoff. Fix rather than weaken format, lint, contrast, unit-test, TypeScript or build gates; pre-commit uses the same command.
- UI/state changes need relevant browser checks: desktop/mobile, light/dark, routing/filter URLs, search, checklist persistence, budget, and print view as affected.
- Confirm localhost serves this checkout via Vite. Do not start a second server on a port owned by another task.
- Separate static/unit verification, browser QA, print/PDF rendering, and live game evidence. Report checks that could not run and why.
- Update `PROJECT_MEMORY.md` when architecture, source ownership, or significant decisions change. Keep detailed game data in the guide and sources rather than duplicating it in project memory.
