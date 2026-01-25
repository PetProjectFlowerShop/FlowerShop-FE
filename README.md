# Floria FE 🌸

Frontend application for the **Floria** flower shop.

This project focuses on building a scalable and maintainable frontend architecture with modern tooling, clean UX patterns, and end-to-end testing.

---

## Tech stack

- React
- TypeScript
- Vite
- SWC
- Material UI (MUI)
- Playwright (E2E testing)

---

## Getting started

### Prerequisites

* Node.js >= 22
* npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at:
[http://localhost:5173](http://localhost:5173)

## Scripts

* `npm run dev` — start development server
* `npm run build` — build production version
* `npm run preview` — preview production build locally
* `npm run test:e2e` — run end-to-end tests (Playwright)
* `npm run test:e2e:ui` — open Playwright interactive test UI

## UI Library

The project uses **Material UI (MUI)** as the component library. A base theme and `CssBaseline` are configured in `main.tsx`.

## Testing

The project uses Playwright for end-to-end (E2E) testing.
E2E tests verify core user flows such as:
application startup
page rendering
navigation between routes
handling of unknown routes (404)

### Run E2E tests locally
npm run dev
npm run test:e2e


## Continuous Integration

End-to-end tests are automatically executed using GitHub Actions on each push and pull request.

The workflow configuration is located at:  .github/workflows/playwright.yml

This ensures that critical user flows are validated continuously during development.


## Project status

🚧 Initial setup completed.

The project is ready for team development and further feature implementation.

## Notes

This project was bootstrapped with Vite and configured for team collaboration.
