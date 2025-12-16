# FlowerShop FE

Frontend application for the FlowerShop project.

## Overview

This is a Vite-based React + TypeScript frontend scaffold. It includes linting and has dependencies for Material UI (MUI) and Tailwind CSS to support rapid UI development.

## Tech stack

- React 19
- TypeScript
- Vite 7 (with SWC React plugin)
- ESLint (flat config)
- Material UI (MUI) 7
- Tailwind CSS 4 (via `@tailwindcss/vite` plugin)

## Requirements

- Node.js >= 22
- npm (project uses `package-lock.json`)

## Setup

Install dependencies:

```bash
npm install
```

### Run locally

Start the Vite dev server:

```bash
npm run dev
```

The app will be available at:
http://localhost:5173

### Build

Production build (TypeScript build + Vite build):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and build for production (`tsc -b && vite build`)
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint on the project

## Entry points

- `index.html` — HTML entry; loads the app script
- `src/main.tsx` — application bootstrap (creates root and renders `<App />`)
- `src/App.tsx` — root React component (Vite template)

## Project structure

High-level layout:

```
.
├── index.html
├── package.json
├── vite.config.ts
├── eslint.config.js
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── assets/
└── tsconfig*.json
```

Notes:
- Tailwind CSS plugin is configured in `vite.config.ts`. Tailwind CSS directives are not yet present in `src/index.css`. TODO below.
- ESLint (flat config) is set up in `eslint.config.js`.
- MUI is installed as a dependency but not yet wired into the app.

## UI Libraries

- Material UI (MUI): Installed, but theme setup and `CssBaseline` are not yet added to the render tree.
  - TODO: Add MUI `ThemeProvider` and `CssBaseline` in `src/main.tsx` or a layout component.
- Tailwind CSS: Plugin installed and enabled via `@tailwindcss/vite`.
  - TODO: Add Tailwind directives to CSS (e.g., `@import "tailwindcss";` for v4) and configure any needed themes/utilities.

## Environment variables

No environment variables are currently used in the codebase.

Vite conventions (when needed):
- Variables must be prefixed with `VITE_` to be exposed to client code.
- Files: `.env`, `.env.local`, `.env.development`, `.env.production`, etc.
- Access via `import.meta.env.VITE_YOUR_VAR`.

TODOs:
- Define required env vars (if any) and document defaults.

## Tests

No test framework is set up in this repository yet, and there are no `*.test.*` files.

TODOs:
- Choose and configure a test runner (recommended: Vitest for Vite projects).
- Add basic unit tests and CI integration if applicable.

## Linting

Run ESLint:

```bash
npm run lint
```

## License

License information is not specified in the repository.

TODO:
- Add a `LICENSE` file and update this section (e.g., MIT).

## Project status

🚧 Scaffold created. Core tooling (Vite, TS, ESLint) is in place. MUI and Tailwind are installed but not yet integrated into the UI. No tests are configured yet.

## Notes

This project was bootstrapped with Vite and prepared for team development. See `package.json` for available scripts.
