# ghardailo-sewa — Agent Quickstart

This is a **Vite + React 19 + Tailwind CSS v4** project. The following guidance will help you avoid common pitfalls and work efficiently.

## Commands

| Command | Result |
|---|---|
| `npm run dev` | Start Vite dev server at `localhost:5173` |
| `npm run build` | Build for production (`dist/`) |
| `npm run lint` | Run ESLint on `**/*.{js,jsx}` |
| `npm run preview` | Preview the production build locally |

**Never run `npm run build` without first running `npm run lint`.** The CI pipeline enforces `lint -> typecheck -> test` order, and lint will fail on unused variables, JSX issues, and rule violations.

## Project Structure

- **`src/main.jsx`** — Entry point; renders `<App />` inside React StrictMode
- **`src/App.jsx`** — Top-level component that composes `<Navbar />`, `<Hero />`, `<Pops />`, `<Bok />`
- **`src/components/`** — Reusable UI: `Nav.jsx`, `Hero.jsx`, `Pops.jsx`, `Bok.jsx`
- **`src/index.css`** — **CSS-first Tailwind v4**: starts with `@import "tailwindcss"`; custom `:root` vars for theming (colors, fonts, shadows). **Do not** remove the `@import` or the custom vars unless you also update the Tailwind config.
- **`vite.config.js`** — Minimal config: `react()` and `@tailwindcss/vite()` plugins only. No custom `webServer` config — the commented-out section in `playwright.config.ts` expects `npm run start`.

## Key Conventions & Quirks

- **Tailwind CSS v4 (CSS-first)**: Unlike v3, there is no `tailwind.config.js`. All config lives in `index.css` (via `@import "tailwindcss"`) and custom `:root` variables. The `@tailwindcss/vite` plugin just inlines Tailwind at build time.
- **No TypeScript**: All files are `.jsx`/`.js`. No `tsconfig.json`, no TypeScript checks. If you need types, add them — but don't expect the existing lint/config to understand them.
- **ESLint**: Configured in `eslint.config.js` with `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Rules apply to `**/*.{js,jsx}`. Output `dist/` is ignored via `globalIgnores`.
- **Custom CSS variables**: The `:root` block in `src/index.css` defines a light/dark color palette used throughout components (e.g., `var(--text)`, `var(--accent)`). Changing these variables is the preferred way to tweak theming versus modifying Tailwind utility classes.
- **React 19**: `strictMode` is enabled in `main.jsx`. Developers should expect double-invocation of effects in dev and design accordingly (no `.catch` swallowing, etc.).
- **Playwright testing**: Config in `playwright.config.ts` defines 3 browser projects (chromium, firefox, webkit). Tests are in `tests/` but currently only `example.spec.ts` exists. The `webServer` stanza is commented out — if you add a dev server, uncomment it.
- **Environment**: No `.env` file is loaded automatically. The `playwright.config.ts` has `dotenv` imports commented out. If you need env vars, add a `.env` file at root and uncomment the `dotenv.config()` lines — **or** use `VITE_` prefixed vars accessed via `import.meta.env.VITE_xxx`.

## What to Avoid

- **Don't assume Tailwind config lives in `tailwind.config.js`** — it doesn't exist. All Tailwind customization is in `src/index.css`.
- **Don't try to import CSS modules or use CSS-in-JS** — the project uses Tailwind utilities exclusively. There is no CSS module setup.
- **Don't run `npm test`** — there is no test script defined. Use `npx playwright test` if you need E2E tests.
