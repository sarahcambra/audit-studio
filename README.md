# Audit Studio

A comprehensive WCAG 2.1/2.2 accessibility auditing tool built with React, Vite, and Firebase.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Import Patterns](#import-patterns)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Architecture](#architecture)

---

## Overview

Audit Studio is a full-stack accessibility auditing application that helps teams test and validate WCAG compliance. Features include:

- **Automated Scanning**: Run axe-core scans via Playwright + stealth
- **Manual Testing**: Track manual WCAG success criteria checks
- **Triage System**: Review, categorize, and prioritize violations
- **Reporting**: Generate PDF/CSV audit reports
- **Knowledge Base**: Built-in WCAG SC library and fix templates

---

## Tech Stack

### Frontend
- **React 19** — UI framework
- **Vite 8** — Build tool & dev server
- **Flowbite React** — Component library (Tailwind-based)
- **Tailwind CSS v4** — Styling with dark mode support
- **React Router v6** — Client-side routing

### Backend / Infrastructure
- **Firebase Hosting** — Static hosting + CDN
- **Firebase Cloud Functions v2** — API layer (scan dispatch, favicon)
- **Supabase** — Auth (OAuth), PostgreSQL database, Realtime subscriptions
- **Google Cloud** — Scan worker on GCE VM

### Scanning Engine
- **Playwright Extra** — Browser automation with stealth
- **axe-core** — Accessibility testing engine
- **Puppeteer Extra Plugin Stealth** — Bot detection evasion

---

## Prerequisites

- **Node.js** v18+ (recommended: v20 LTS)
- **npm** v9+ or **yarn**
- **Firebase CLI** (for deployment)
  ```bash
  npm install -g firebase-tools
  ```
- **Google Cloud SDK** (optional, for scan worker management)
- **Git**

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd auditV2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
# Supabase (public - safe to commit)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> **Note**: The `.env` file is already in `.gitignore`. Never commit real credentials.

### 4. Configure Firebase (for deployment)

```bash
firebase login
firebase projects:list  # Should show audit-studio-prod-90ea8
```

---

## Running Locally

### Start the development server

```bash
npm run dev
```

The app will be available at: **http://localhost:5173**

### Build for production (local test)

```bash
npm run build
```

Output goes to `dist/` folder.

### Preview production build

```bash
npm run build
npm run preview
```

---

## Project Structure

We use **Feature-Based Architecture** (Arcanimal pattern):

```
src/
├── features/              # Business logic by feature
│   ├── auth/              # Authentication
│   │   ├── AuthProvider.jsx
│   │   └── index.js
│   └── audit/             # Audit management
│       ├── components/
│       │   ├── AuditDetail/
│       │   └── AuditForm/
│       ├── hooks/
│       ├── schema/
│       └── index.js
├── shared/                # Globally reusable code
│   ├── context/           # ThemeContext, ToastContext
│   ├── layout/            # ApplicationShell, navbars
│   └── ui/                # StatCard, PipelineBar, etc.
├── config/                # Configuration (theme.js)
├── pages/                 # Route components (thin)
├── components/            # Remaining (scan, triage - to migrate)
├── lib/                   # Utilities & data layer
│   ├── db/                # Database functions
│   ├── supabase.js
│   └── ...
├── App.jsx
├── main.jsx
└── index.css
```

---

## Import Patterns

We use **absolute imports** with Vite aliases. This avoids deep relative paths like `../../../`.

### ✅ CORRECT — Use Aliases

```javascript
// Features
import { useAuth } from '@/features/auth'
import { auditSchema } from '@/features/audit'

// Shared
import { StatCard, PipelineBar } from '@shared/ui'
import { useToast } from '@/shared/context'
import { ApplicationShell } from '@/shared/layout'

// Lib
import { supabase } from '@/lib/supabase'
import { getAudits } from '@/lib/db/audits'

// Config
import { customTheme } from '@/config/theme.js'

// Components (not yet migrated)
import ScanPanel from '@/components/scan/ScanPanel'
```

### ✅ CORRECT — Same Directory

```javascript
// Keep relative for same directory
import MyComponent from './MyComponent'
import { helper } from './utils'
import Step1Info from './steps/Step1Info'

// One level up is also OK
import { Parent } from '../ParentComponent'
```

### ❌ WRONG — Don't Use Deep Relatives

```javascript
// DON'T: These break when moving files
import { StatCard } from '../../../../../shared/ui'
import { useAuth } from '../../../auth'
```

### Alias Reference Table

| Alias | Points To | Example |
|-------|-----------|---------|
| `@/` | `src/` | `import { supabase } from '@/lib/supabase'` |
| `@features/` | `src/features/` | `import { useAuth } from '@/features/auth'` |
| `@shared/` | `src/shared/` | `import { StatCard } from '@shared/ui'` |
| `@pages/` | `src/pages/` | `import AuditDetailPage from '@pages/AuditDetailPage'` |
| `@lib/` | `src/lib/` | `import { getAudits } from '@/lib/db/audits'` |
| `@config/` | `src/config/` | `import { customTheme } from '@/config/theme.js'` |

---

## Environment Variables

### Frontend (.env)

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Firebase Functions (functions/.env)

Create `functions/.env` (never commit):

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SCAN_WORKER_URL=https://your-worker-url
SCAN_WORKER_SECRET=your-secret-token
```

### Scan Worker Environment

The scan worker (GCE VM) needs:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
WORKER_SECRET=
PORT=3001
```

---

## Deployment

### Deploy Frontend (Firebase Hosting)

```bash
# Build first
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

**Production URL**: https://audit-studio-prod-90ea8.web.app

### Deploy Functions (Cloud Functions)

```bash
firebase deploy --only functions
```

### Deploy Everything

```bash
firebase deploy
```

### Check deployment status

```bash
firebase hosting:channel:list
```

---

## Architecture

### Full Stack Flow

```
User Browser
    ↓
Firebase Hosting (CDN) ← React app
    ↓
Firebase Cloud Functions (API)
    ↓
Supabase (Auth + Database + Realtime)
    ↓
GCE VM (scan-worker) ← Playwright + axe-core
```

### How Scanning Works

1. User clicks "Scan" → Frontend calls `/api/scan`
2. Firebase Function verifies JWT + rate limit
3. Creates `scan_job` in Supabase
4. Sends request to GCE scan worker
5. Worker runs Playwright + axe-core
6. Results written to Supabase
7. Frontend receives realtime update (~1s)

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `/api/` | Vercel serverless functions (legacy, now in `/functions/`) |
| `/functions/` | Firebase Cloud Functions v2 |
| `/scan-worker/` | Dockerized Node.js scanner (GCE deployment) |
| `/supabase/` | SQL migrations & storage policies |
| `/src/features/` | Feature-based React modules |
| `/src/shared/` | Reusable cross-cutting code |

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `firebase deploy` | Deploy to Firebase |
| `firebase deploy --only hosting` | Deploy only frontend |
| `firebase deploy --only functions` | Deploy only API functions |
| `firebase hosting:channel:list` | Check deployment status |

---

## Documentation

- **CLAUDE.md** — Detailed technical documentation, architecture decisions, and troubleshooting
- **ARCHITECTURE_COMPLETE.md** — Feature-based architecture migration summary
- **PHASE[1-4]_COMPLETE.md** — Phase-by-phase migration details

---

## License

[CC BY-NC 4.0](LICENSE) — Creative Commons Attribution-NonCommercial 4.0 International

---

## Support

For technical questions, refer to **CLAUDE.md** or contact the development team.

---

*Built with React, Vite, Tailwind CSS, Flowbite, Firebase, and Supabase.*
