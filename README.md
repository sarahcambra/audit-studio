# AuditV2

AuditV2 is an accessibility auditing platform that scans web pages for WCAG violations using Playwright and axe-core, then presents results in a triage workflow. It consists of a React 19 frontend, a Firebase-backed API layer, and a headless Chrome scan worker running on Google Compute Engine.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite, Tailwind CSS, Flowbite |
| Routing | React Router DOM |
| Backend / API | Firebase Functions, Supabase |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (currently disabled for testing) |
| Scan Engine | Playwright-extra + Stealth + axe-core |
| Infrastructure | Firebase Hosting, GCE VM, Docker |
| Testing | Vitest, @testing-library/react, Storybook |
| Node | >= 18.0.0 |

## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Start Storybook
npm run storybook
```

## Architecture

The application follows a distributed, event-driven architecture:

1. **Frontend** — React 19 SPA built with Vite, served via Firebase Hosting at `incluria.com`.
2. **API Layer** — Firebase Functions handle scan requests and proxy to the worker.
3. **Job Queue** — Supabase tables queue scan jobs and store results.
4. **Scan Worker** — Dockerised Playwright + axe-core service on a GCE VM (`worker.incluria.com`), accessible over HTTPS via Caddy + Let's Encrypt.
5. **Results Flow** — Frontend polls Supabase for job completion, then renders violations for triage.

For a detailed system overview, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Project Structure

The codebase is organised by feature and shared modules under `src/`:

- `src/pages/` — top-level route pages (lazy-loaded)
- `src/features/` — domain modules (`auth`, `scan`, `issue`, etc.)
- `src/shared/` — layout, UI components, utilities, and hooks
- `src/lib/` — database and service clients
- `functions/` — Firebase Functions (API handlers)
- `scan-worker/` — Dockerised Playwright scan engine
- `supabase/` — SQL views and migrations

For the full directory map and conventions, see [docs/STRUCTURE.md](docs/STRUCTURE.md).

## Key Documentation

| Document | Purpose |
|----------|---------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design and data flow |
| [docs/STRUCTURE.md](docs/STRUCTURE.md) | Directory layout and coding conventions |
| [CLAUDE.md](CLAUDE.md) | Infrastructure runbook, incident history, and deployment notes |
| [scan-worker/README.md](scan-worker/README.md) | Scan worker setup and operation |

## Deployment

- **Frontend**: `firebase deploy --only hosting`
- **API**: `firebase deploy --only functions`
- **Scan Worker**: GCE VM with Docker (`deploy-worker.sh`)
- **Database**: Supabase migrations applied manually

The scan worker requires environment variables (`SUPABASE_SERVICE_ROLE_KEY`, `WORKER_SECRET`) and a valid HTTPS domain (`worker.incluria.com`). See `CLAUDE.md` for the full GCE setup, firewall rules, and Caddy configuration.

## Testing

Unit and component tests are written with **Vitest** and **@testing-library/react**.

- `npm run test` — run once in CI mode
- `npm run test:watch` — run in interactive watch mode
- `npm run test:coverage` — run with coverage via `@vitest/coverage-v8`

Storybook is available on port **6006** for isolated UI development and a11y auditing via `@storybook/addon-a11y`.
