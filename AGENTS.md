# Repository Guidelines

## Project Structure & Module Organization

This is a SvelteKit shopping list app. Route files live in `src/routes`, with SvelteKit
conventions such as `+page.svelte`, `+page.ts`, `+page.server.ts`, and `+layout.server.ts`.
Feature routes are grouped by domain: `items`, `inventory`, and `auth`. Shared UI components
live in `src/lib/components`, and Supabase client setup lives in `src/lib/db.ts`. Global styles
are in `src/app.css`, with Tailwind configured in `tailwind.config.cjs` and PostCSS in
`postcss.config.cjs`. Unit tests are colocated under `src` and match `*.test.ts` or `*.spec.ts`.

## Build, Test, and Development Commands

Use pnpm 10 with Node 22, matching `package.json` and Volta settings.

- `pnpm install`: install dependencies from `pnpm-lock.yaml`.
- `pnpm dev`: start the Vite development server.
- `pnpm build`: create the production SvelteKit build.
- `pnpm preview`: preview the production build locally.
- `pnpm check`: run SvelteKit sync and TypeScript/Svelte diagnostics.
- `pnpm test:unit`: run Vitest unit tests.
- `pnpm lint`: run Prettier checks and ESLint.
- `pnpm format`: format the repository with Prettier.

## Coding Style & Naming Conventions

Use TypeScript and Svelte 3 idioms already present in the app. Formatting is controlled by
Prettier: spaces instead of tabs, single quotes, trailing commas, and a 100-character print
width. Keep route modules named with SvelteKit file conventions, and use lowercase directory
names for routes. Component files in `src/lib/components` currently use kebab-case, for example
`form-input.svelte`; follow that pattern for new shared components.

## Testing Guidelines

Vitest is configured in `vite.config.ts` to include `src/**/*.{test,spec}.{js,ts}`. Add focused
unit tests near the code they cover, using descriptive `describe` and `it` blocks. Run
`pnpm test:unit` before submitting changes, and run `pnpm check` when route loaders, server
actions, or typed page data change.

## Commit & Pull Request Guidelines

Recent history uses short imperative subjects, sometimes with a conventional prefix such as
`fix:`, `chore:`, or `deps:`. Keep commits scoped and descriptive, for example
`fix: disable submit while loading`. Pull requests should summarize the behavior change, list
verification commands run, link related issues when available, and include screenshots for UI
changes.

## Security & Configuration Tips

Copy `.env.example` to `.env` for local Supabase settings. Only `PUBLIC_SUPABASE_URL` and
`PUBLIC_SUPABASE_ANON_KEY` belong in public client configuration. Do not commit real secrets or
service-role keys.
