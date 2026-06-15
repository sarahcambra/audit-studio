# Operations Manual

> Source: Consolidated from `CLAUDE.md` (2026-06-01 → 2026-06-14).  
> Last updated: 2026-06-15

---

## Table of Contents
1. [Environment Variables Reference](#environment-variables-reference)
2. [Project Overview & Architecture](#project-overview--architecture)
3. [GCE Worker Operations](#gce-worker-operations)
4. [Firebase Functions Operations](#firebase-functions-operations)
5. [Supabase Operations](#supabase-operations)
6. [Security Checklist](#security-checklist)
7. [Scan Worker Architecture](#scan-worker-architecture)
8. [Development Standards & Guidelines](#development-standards--guidelines)
9. [Shared Components Reference](#shared-components-reference)

---

## Environment Variables Reference

### Frontend Build (`/.env`)
| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL (public) |
| `VITE_SUPABASE_ANON_KEY` | Supabase public anon key |

> `.env` is **untracked** from git. `.gitignore` has explicit `.env` entry.

### Firebase Cloud Functions (`functions/.env`)
| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side only; bypasses RLS |
| `SCAN_WORKER_URL` | GCE worker URL (currently `https://worker.incluria.com`) |
| `SCAN_WORKER_SECRET` | Shared Bearer token with worker |

### Scan Worker — GCE VM (`/opt/scan-worker/.env`)
| Variable | Purpose |
|----------|---------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key |
| `WORKER_SECRET` | Shared Bearer token (mandatory — `process.exit(1)` if missing) |
| `PORT` | Defaults to `3001` |

> **Legacy fallback:** `scan-worker/index.js` also accepts `SUPABASE_SERVICE_KEY` as fallback, but standardise on `SUPABASE_SERVICE_ROLE_KEY`.

---

## Project Overview & Architecture

### Project Identity
- **Name:** Audit Studio (folder was `auditV2`, renamed to `audit-studio`)
- **Type:** React + Vite application — WCAG 2.1/2.2 accessibility auditing tool
- **UI Framework:** Flowbite Pro React
- **Styling:** Tailwind CSS v4 with dark mode
- **Design System:** Flowbite components + custom `theme.js`
- **State Management:** `ThemeContext` + `AuthContext`
- **GCP Project:** `audit-studio-prod-90ea8`

### Full Stack Architecture
| Layer | Technology | Deployment |
|-------|------------|------------|
| Frontend | React 19 + Vite | Firebase Hosting |
| Auth + DB | Supabase | GitHub + Google OAuth, PostgreSQL, Realtime subscriptions |
| API layer | Firebase Cloud Functions v2 | `functions/index.js` — thin dispatchers |
| Scan worker | Node.js + playwright-extra + stealth + axe-core | GCE VM (`scan-worker-vm`) |

### Worker Details
- **Worker URL:** `https://worker.incluria.com` (GCE VM with static IP `35.226.21.209`)
- **Docker image:** `scan-worker:latest` (built locally on VM)
- **Base image:** `mcr.microsoft.com/playwright:v1.60.0-noble`
- **Auth:** Bearer token (`WORKER_SECRET` env var)
- **Config:** e2-medium (4GB RAM), Docker container with `restart=always`
- **Reverse proxy:** Caddy (auto HTTPS via Let's Encrypt)

### How Scanning Works
1. User triggers scan → `useScanRunner` fetches session JWT.
2. POST `/api/scan` with JWT in `Authorization` header.
3. Firebase Function (`functions/handlers/scan.js`) verifies JWT, checks audit ownership, checks rate limit.
4. Creates `scan_job` row in Supabase, fires POST to GCE VM worker (fire-and-forget).
5. Returns `{ jobId }` immediately to frontend.
6. GCE VM worker runs playwright-extra (stealth) + axe-core, writes results to Supabase.
7. Frontend receives update via Supabase Realtime subscription (~1s latency).

### Key Files
| File | Purpose |
|------|---------|
| `/src/components/ApplicationShell.jsx` | Shell with sidebar + skip link |
| `/src/App.jsx` | Routes with lazy loading |
| `/src/context/AuthContext.jsx` | Supabase auth |
| `/src/context/ToastContext.jsx` | Toast notification system |
| `/src/hooks/useScanRunner.js` | Scan queue + Supabase Realtime |
| `/src/components/scan/ScanPanel.jsx` | Scan UI with error toasts |
| `/src/components/triage/TriageTab.jsx` | Triage table with expanded scan-card rows |
| `/functions/index.js` | Firebase Cloud Functions v2 entry point |
| `/functions/handlers/scan.js` | Scan job dispatcher |
| `/functions/handlers/favicon.js` | Favicon resolver |
| `/scan-worker/index.js` | playwright-extra + stealth + axe-core worker |

---

## GCE Worker Operations

### Current State (as of 2026-06-11)
| Component | Status | Value |
|-----------|--------|-------|
| GCE VM | ✅ Running | `scan-worker-vm` (e2-medium, 4GB RAM) |
| VM IP | ✅ Static | `35.226.21.209` |
| Docker Container | ✅ Running | `scan-worker:latest` on port 3001 |
| Firebase Function | ✅ Updated | Points to `https://worker.incluria.com` |
| Artifact Registry | ✅ Created | `us-central1-docker.pkg.dev/audit-studio-prod-90ea8/scan-worker` |
| Cloud Build IAM | ✅ Configured | `artifactregistry.writer` granted |

### VM Specs
- **Machine type:** `e2-medium` (4GB RAM) — **never use `e2-small` (2GB)**. Chrome needs 300-600MB, Node needs 200-400MB, heavy pages spike to 800MB+.
- **Zone:** `us-central1-a`
- **Static IP:** `scan-worker-ip` (reserved in `us-central1`)
- **Tags:** `scan-worker`
- **OS:** Ubuntu 22.04 LTS

### SSH Access
```bash
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
```

### Docker Container Management
```bash
# Check container status
sudo docker ps

# View logs
sudo docker logs scan-worker --tail 50

# Restart container
sudo docker restart scan-worker

# Kill zombie Chrome processes inside container
sudo docker exec scan-worker pkill -9 chrome || true

# Check container stats
sudo docker stats --no-stream
```

### Caddy Reverse Proxy
Caddy auto-provisions Let's Encrypt certificates. Config at `/etc/caddy/Caddyfile`:
```
{
  email sarahborgesbeu@gmail.com
}

worker.incluria.com {
    reverse_proxy localhost:3001
}
```

Reload:
```bash
sudo systemctl reload caddy
sudo journalctl -u caddy --no-pager -n 20
```

Test:
```bash
curl -I https://worker.incluria.com/health
# expected: HTTP/2 200
```

### Firewall Rules
```bash
# Current rule (HTTPS only after domain setup)
gcloud compute firewall-rules update allow-scan-worker \
  --allow tcp:80,tcp:443 \
  --source-ranges=0.0.0.0/0 \
  --project=audit-studio-prod-90ea8

# List rules
gcloud compute firewall-rules list --project=audit-studio-prod-90ea8
```

> **Historical note:** Port 3001 was temporarily open during initial migration for direct Firebase Function → VM access. After domain + Caddy setup, only 80/443 should remain open.

### Debugging Commands
```bash
# Check VM status
gcloud compute instances list --project=audit-studio-prod-90ea8

# SSH to VM
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8

# Check Docker logs
sudo docker logs scan-worker --tail 50

# Restart container
sudo docker restart scan-worker

# Kill zombie Chrome processes
sudo docker exec scan-worker pkill -9 chrome || true

# Check VM memory
free -h
sudo docker stats --no-stream

# Test health endpoint from outside
curl http://35.226.21.209:3001/health

# Check firewall rules
gcloud compute firewall-rules list --project=audit-studio-prod-90ea8
```

### Cost Breakdown
| Component | Monthly Cost | Covered by $300 credit? |
|-----------|--------------|-------------------------|
| e2-medium VM (4GB) | ~$33/month | ✅ Yes (9 months free) |
| Static IP (reserved) | ~$5/month | ✅ Yes |
| Caddy (Let's Encrypt) | Free | ✅ Yes |
| Egress traffic | ~$5-10/month | ✅ Yes |
| **Total** | **~$43/month** | **✅ 7 months free** |

### Technical Debt (Fix Later)
| Issue | Impact | When to Fix |
|-------|--------|-------------|
| Health check lies | Might accept jobs when broken | After first incident |
| Chrome zombies | Slow memory leak | Monthly restart handles it |
| Triage fire-and-forget | Occasional missing data | Add retry logic later |
| Secrets in docker inspect | Root can see env vars | Use .env file later |
| Single process bottleneck | Only 1 scan at a time | When you have 10+ users |
| No graceful shutdown | Lost scans on deploy | Deploy during low usage |

### Why Not Browserless.io?
| Factor | Browserless | GCE |
|--------|-------------|-----|
| **Cost** | $20-50/month real money | ~$33/month from GCP credit |
| **Custom checks** | ❌ Breaks architecture | ✅ Works unchanged |
| **Custom checks why** | Needs live browser page | Has live browser page |
| **Examples** | placeholder contrast, focus rings | Both need `page.evaluate()` |
| **GCP credit** | ❌ Can't use | ✅ Uses $300 credit |
| **Maintenance** | Managed | You maintain VM |

Browserless is wrong because custom checks (`checks/placeholderContrast.js`, `checks/focusVisible.js`) need a **live browser page** (access `::placeholder` pseudo-elements, computed styles, focus states). Can't run against HTML/JSON from Browserless — would require a **complete rewrite** of 17 custom checks.

---

## Firebase Functions Operations

### Deployment
```bash
cd /Users/sarah/auditV2

# Deploy only functions
firebase deploy --only functions --project audit-studio-prod-90ea8

# Deploy hosting + functions
firebase deploy --project audit-studio-prod-90ea8
```

### Environment Variables
Stored in `functions/.env` (not committed to git). After domain setup, `SCAN_WORKER_URL` points to `https://worker.incluria.com`.

### Handlers
| Handler | Route | Purpose |
|---------|-------|---------|
| `scan` | POST `/api/scan` | Verifies JWT, checks audit ownership, rate limits (10/min), creates scan job, dispatches to worker |
| `favicon` | GET `/api/favicon` | Resolves favicon for a given URL |

### Retry Logic (Functions → Worker)
```javascript
// functions/handlers/scan.js — POST to worker with 3 retries
for (let i = 0; i < 3; i++) {
  try {
    await fetch(workerUrl, { ... });
    break;  // Success
  } catch (e) {
    if (i === 2) throw e;  // Fail after 3 retries
    await new Promise(r => setTimeout(r, 1000));  // Wait 1s before retry
  }
}
```

---

## Supabase Operations

### Project Details
- **URL:** `https://vgifjzxnjwieqgltuviv.supabase.co`
- **Auth:** GitHub + Google OAuth
- **Allowed redirect URLs:** Updated to include Firebase Hosting domains (see GCP Migration section)

### RLS Notes
- `SUPABASE_SERVICE_ROLE_KEY` bypasses RLS. Used only server-side (Firebase Functions + GCE worker).
- `SUPABASE_SERVICE_ROLE_KEY` is standardised everywhere. `scan-worker/index.js` reads `SUPABASE_SERVICE_ROLE_KEY` and falls back to legacy `SUPABASE_SERVICE_KEY` so existing VM deploys keep working.

### Realtime Subscriptions
- Frontend `useScanRunner.js` uses Supabase Realtime subscription (~1s latency) instead of polling.
- Frontend receives scan completion updates via `scan_jobs` table changes.

### Stale Job Recovery
- **Worker level:** `recoverStaleJobs()` on startup marks stuck `'running'` jobs as error. Also handles stale `'pending'` jobs older than 5 minutes.
- **Frontend level:** `useScanRunner.js` has a 10-minute watchdog per job — marks timed-out jobs as error in DB.
- **Database level:** `supabase/migration_stale_jobs_cron.sql` — `pg_cron` job runs every 5 min as safety net.

### Schema Reference

> **WARNING:** This schema is for context only and is not meant to be run. Table order and constraints may not be valid for execution.

#### `public.audit_activity_log`
```sql
CREATE TABLE public.audit_activity_log (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid,
  user_id uuid,
  action text NOT NULL CHECK (action = ANY (ARRAY['audit_created','audit_updated','scan_started','scan_completed','scan_failed','triage_decision','triage_updated','manual_check_updated','report_generated'])),
  description text,
  metadata jsonb,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT audit_activity_log_pkey PRIMARY KEY (id),
  CONSTRAINT audit_activity_log_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT audit_activity_log_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
```

#### `public.audits`
```sql
CREATE TABLE public.audits (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  name text NOT NULL,
  wcag_version text NOT NULL CHECK (wcag_version = ANY (ARRAY['2.1','2.2'])),
  conformance_level text NOT NULL CHECK (conformance_level = ANY (ARRAY['A','AA','AAA'])),
  pre_test_answers jsonb DEFAULT '{}'::jsonb,
  status text DEFAULT 'active'::text CHECK (status = ANY (ARRAY['active','archived','complete'])),
  project_name text,
  client_name text,
  website_url text,
  notes text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  scope_json jsonb DEFAULT '{}'::jsonb,
  audit_goal text,
  is_draft boolean DEFAULT true,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  favicon_url text,
  CONSTRAINT audits_pkey PRIMARY KEY (id),
  CONSTRAINT audits_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
```

#### `public.catalog_items`
```sql
CREATE TABLE public.catalog_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  label text NOT NULL,
  selector text NOT NULL,
  requires_trigger boolean DEFAULT false,
  trigger_selector text,
  trigger_action text CHECK (trigger_action = ANY (ARRAY['click','hover','focus'])),
  wait_for text,
  is_global boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT catalog_items_pkey PRIMARY KEY (id),
  CONSTRAINT catalog_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
```

#### `public.kb_overrides`
```sql
CREATE TABLE public.kb_overrides (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  rule_id text NOT NULL,
  client_fix text,
  auditor_notes text,
  fix_difficulty text CHECK (fix_difficulty = ANY (ARRAY['Easy','Medium','Hard'])),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT kb_overrides_pkey PRIMARY KEY (id),
  CONSTRAINT kb_overrides_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
```

#### `public.manual_checks`
```sql
CREATE TABLE public.manual_checks (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  sc_id text NOT NULL,
  source text DEFAULT 'sc'::text CHECK ((source = ANY (ARRAY['sc','axe-violations','axe-incomplete','axe-na','always-manual','mixed'])) OR source IS NULL),
  status text CHECK (status = ANY (ARRAY['pass','fail','untriaged'])),
  notes text,
  image_storage_path text,
  sort_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  browser_tested text,
  test_steps text,
  environment text CHECK (environment = ANY (ARRAY['desktop','mobile','both'])),
  sc_name text,
  verdict text CHECK ((verdict = ANY (ARRAY['pass','fail','na','deferred'])) OR verdict IS NULL),
  auditor_notes text,
  auto_status text CHECK ((auto_status = ANY (ARRAY['fail','needs-check','na','pass','always-manual'])) OR auto_status IS NULL),
  evidence_json jsonb DEFAULT '{}'::jsonb,
  CONSTRAINT manual_checks_pkey PRIMARY KEY (id),
  CONSTRAINT manual_checks_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id)
);
```

#### `public.profiles`
```sql
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
```

#### `public.reports`
```sql
CREATE TABLE public.reports (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  user_id uuid NOT NULL,
  format text DEFAULT 'pdf'::text CHECK (format = ANY (ARRAY['pdf','html','csv'])),
  status text DEFAULT 'generating'::text CHECK (status = ANY (ARRAY['generating','complete','error'])),
  storage_path text,
  generated_at timestamp with time zone DEFAULT now(),
  report_type text DEFAULT 'audit_final'::text CHECK (report_type = ANY (ARRAY['audit_final','preliminary','remediation_status'])),
  error_message text,
  file_size_bytes integer,
  CONSTRAINT reports_pkey PRIMARY KEY (id),
  CONSTRAINT reports_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT reports_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
```

#### `public.scan_jobs`
```sql
CREATE TABLE public.scan_jobs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  scan_type text NOT NULL CHECK (scan_type = ANY (ARRAY['page','component','flow'])),
  url text NOT NULL,
  selector text,
  flow_steps jsonb,
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending','running','complete','error'])),
  error_message text,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  tool_version text,
  execution_time_ms integer,
  page_title text,
  CONSTRAINT scan_jobs_pkey PRIMARY KEY (id),
  CONSTRAINT scan_jobs_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id)
);
```

#### `public.scan_results`
```sql
CREATE TABLE public.scan_results (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL,
  violations_json jsonb DEFAULT '[]'::jsonb,
  incomplete_json jsonb DEFAULT '[]'::jsonb,
  passes_json jsonb DEFAULT '[]'::jsonb,
  inapplicable_json jsonb DEFAULT '[]'::jsonb,
  grouped_violations jsonb DEFAULT '[]'::jsonb,
  custom_checks_json jsonb DEFAULT '[]'::jsonb, -- added via migration_custom_checks_json.sql
  summary jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now(),
  violation_count integer DEFAULT 0,
  incomplete_count integer DEFAULT 0,
  pass_count integer DEFAULT 0, -- always 0: axe resultTypes omits 'passes'
  inapplicable_count integer DEFAULT 0, -- always 0: axe resultTypes omits 'inapplicable'
  CONSTRAINT scan_results_pkey PRIMARY KEY (id),
  CONSTRAINT scan_results_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.scan_jobs(id)
);
```

#### `public.screenshots`
```sql
CREATE TABLE public.screenshots (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL,
  group_id text NOT NULL,
  storage_path text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  description text,
  issue_id text,
  CONSTRAINT screenshots_pkey PRIMARY KEY (id),
  CONSTRAINT screenshots_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.scan_jobs(id)
);
```

#### `public.triage_items`
```sql
CREATE TABLE public.triage_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  job_id uuid NOT NULL,
  group_id text NOT NULL,
  rule_id text NOT NULL,
  landmark text,
  issue_type text CHECK (issue_type = ANY (ARRAY['failure','needs review','failure, needs review'])),
  decision text CHECK (decision = ANY (ARRAY['confirmed','not-failure','manual-check','deferred','dismissed','needs_review'])),
  dismissal_reason text CHECK (dismissal_reason = ANY (ARRAY['false-positive','accepted-risk','not-in-scope','already-fixed'])),
  dismissal_note text,
  client_fix_override text,
  auditor_notes text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  overrides_json jsonb,
  evidence_files jsonb DEFAULT '[]'::jsonb,
  impact text,
  page_name text,
  selector text,
  tags text[] DEFAULT '{}'::text[],
  wcag_sc text,
  sc_ids text[] DEFAULT '{}'::text[],
  node_count integer DEFAULT 0,
  element_snippet text,
  screenshot_url text,
  provenance text DEFAULT 'extended', -- added via migrations/20260614_act_tiering.sql
  CONSTRAINT triage_items_pkey PRIMARY KEY (id),
  CONSTRAINT triage_items_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT triage_items_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.scan_jobs(id)
);
```

---

## Security Checklist

### Completed Fixes (2026-06-14)
| Risk | Status | Mitigation |
|------|--------|------------|
| **CORS wildcard** | ✅ Fixed | `functions/handlers/scan.js` now restricts `Access-Control-Allow-Origin` to Firebase Hosting domains + localhost instead of `*`. |
| **Dead Vercel artifacts** | ✅ Fixed | Removed `api/` directory (old Vercel serverless functions). Superseded by `functions/`. |
| **Legacy components dir** | ✅ Fixed | Moved `src/components/user-profile/ProfilePageHeader.jsx` → `src/features/auth/components/`. Removed `src/components/user-profile/`. |
| **Tracked `.env`** | ✅ Fixed | `.env` already untracked from git; `.gitignore` hardened with explicit `.env` entry. |
| **Env-var name drift** | ✅ Fixed | Standardised on `SUPABASE_SERVICE_ROLE_KEY` everywhere. `scan-worker/index.js` now reads `SUPABASE_SERVICE_ROLE_KEY` and falls back to the legacy `SUPABASE_SERVICE_KEY` so existing VM deploys keep working. Update the VM `.env` to the new name at next deploy, then drop the fallback. |

### Remaining Risks
| Risk | Status | Mitigation |
|------|--------|------------|
| **Plaintext HTTP to worker** | 🔄 In progress | Domain `incluria.com` purchased. `worker.incluria.com` points to VM IP. Caddy + Let's Encrypt config ready. `functions/.env` updated to `https://worker.incluria.com`. Deploy after DNS + Caddy are live. |

### Required User Actions
1. **Rotate FIGMA_ACCESS_TOKEN** at https://www.figma.com/settings/personal-access-tokens (old token may be in git history).
2. **Purge `.env` from git history** with `git filter-repo` or BFG before pushing to any shared/public remote.
3. **Complete domain setup for worker** — see `DEPLOYMENT.md` § Domain + HTTPS Setup.

### CORS Policy
`functions/handlers/scan.js` restricts `Access-Control-Allow-Origin` to:
- Firebase Hosting domains
- `localhost` (for local dev)

Never use `*` in production.

### Secret Rotation Procedure
Since the old secret traveled over HTTP during initial migration, rotate `WORKER_SECRET`:
```bash
# On your local machine
openssl rand -hex 32

# Update both locations:
# 1. functions/.env      -> SCAN_WORKER_SECRET=<new-secret>
# 2. VM /opt/scan-worker/.env -> WORKER_SECRET=<new-secret>
# Then restart Docker on VM:
sudo docker restart scan-worker
```

---

## Scan Worker Architecture

### Core Stack
- **Browser engine:** `playwright-extra` + `puppeteer-extra-plugin-stealth`
- **Testing engine:** `axe-core`
- **Base image:** `mcr.microsoft.com/playwright:v1.60.0-noble`

### Why playwright-extra + Stealth?
Prevents bot detection (Cloudflare, etc.). Re-enabled after GCE migration (was disabled for Cloud Run compatibility).
```javascript
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
const stealth = StealthPlugin()
chromium.use(stealth)
```

### Browser Context Configuration
- Real User-Agent
- Viewport: 1365×900
- Locale: en-US

### Hydration Wait Sequence
1. `networkidle` (non-fatal)
2. Cookie banner dismiss
3. 3-second settle time

### Watchdog
Hard watchdog (`runWithWatchdog`) force-closes the browser on 2-minute timeout.

### Axe Configuration
- **Tags:** `wcag2a`, `wcag2aa`, `wcag22aa`, `best-practice`, `experimental`, `cat.aria`, `cat.color-contrast`
- **Exclude selectors:** `DEFAULT_EXCLUDE_SELECTORS` for modal/widget exclusion

### Report Normalisation
`normalizeReport()` adds to summary:
- `driver`, `url`, `axeConfig`, `durationMs`, `pageTitle`, `pageLang`

### Removed Anti-Patterns
- `blockHeavyResources()` — removed because it breaks sites that detect blocked assets.
- Navigation `.catch()` — `goto` failures don't crash the scan (60s timeout).

### Critical Rules (Still Apply)
1. **Never `.catch()` on Supabase Postgrest queries** — use `.then(null, () => {})` or check `{ error }`.
2. **Never block resources** — breaks sites that detect missing assets.
3. **Keep `headless: true`** on Cloud Run (historical; now on GCE too).
4. **`launchBrowser()` must use `--single-process` + `--no-zygote`** on Cloud Run (subprocess spawning not allowed). Not needed on GCE but harmless.

### Known Limitations
- Single Node.js process — one deadlocked Chromium blocks all scans. Watchdog mitigates but doesn't fully solve. Future: child-process per scan or queue-based architecture.
- Concurrency was limited to 1 on Cloud Run (one Chromium at a time, by design — 2Gi RAM limit). On GCE, still effectively single-process for now.
- Cold starts on Cloud Run (historical; min-instances=0 to save cost) added ~10-15s on first scan. GCE doesn't have cold starts but Docker restart adds slight delay.

---

## Development Standards & Guidelines

### Flowbite Pro — Component Fidelity + Accessibility
**Source of truth:**
1. `flowbite-react-blocks-1.8.0-beta`
2. `.claude/flowbite-mcp-pro-1.0.0`
3. Flowbite MCP fallback (only if not found)

- **COPY** = reproduce exactly
- **FIX** = fix only real WCAG failures

Always read `.claude/flowbite-mcp-pro-1.0.0` first.

### Theme Usage Rules — Use `theme.js` Only When Needed
This project uses Flowbite Pro React + Tailwind CSS v4 + a custom `theme.js`.

1. **Default Behavior**
   - Use Flowbite Pro components EXACTLY as provided.
   - Keep all Tailwind classes from Flowbite templates.
   - Do NOT convert Flowbite classes into `theme.js` tokens unless explicitly asked.

2. **When to Use `theme.js`**
   - The design system requires a custom variant (badge, button, alert, etc.)
   - A Flowbite component does not match the design system's colors, shapes, or states
   - The user explicitly asks for a themed version
   - A new variant must be added (e.g., bordered, dot, chip, loader)
   - A component needs semantic color mapping (success, warning, danger, info)

3. **When NOT to Use `theme.js`**
   - Copying Flowbite Pro components (MODE 1)
   - Fixing accessibility (MODE 2)
   - Assembling screens using existing components (MODE 3)
   - The Flowbite default already matches the design system
   - The change is layout-only (grid, flex, spacing, responsive)

4. **Responsiveness Rule**
   - Preserve ALL responsive classes from the original template.
   - `sm:`, `md:`, `lg:`, `xl:` breakpoints must remain untouched.
   - Layout structure must remain identical unless user requests changes.

5. **Layout vs. Theme Boundary**
   - Tailwind classes for layout (flex, grid, gap, spacing, width, height) stay in JSX.
   - Colors, borders, radiuses, typography variants belong in `theme.js` ONLY when needed.
   - Never remove responsive behavior from templates.

6. **NEVER DO THIS**
   - Never rewrite Flowbite Pro components into `theme.js` versions unless asked.
   - Never remove Tailwind responsive classes.
   - Never replace layout classes with theme tokens.
   - Never "theme-ify" a component automatically.

### Accessibility Baseline (Global)
All components must follow WCAG 2.2 + EN 301 549.

**Fix only real failures:**
- alt text
- aria-labels
- aria roles
- keyboard navigation
- focus visible
- contrast (only when provably failing)
- heading hierarchy
- descriptive links

**Never change:**
- layout
- spacing
- colors (unless failing contrast)
- border-radius
- component structure

### Mode 1 — Copying a Component
**Triggered by:** "copy the navbar", "use the hero", "add the sidebar", "insert this component".

**Rules:**
- Copy character-for-character.
- Allowed changes: replace placeholder text (if user asks), replace `href="#"` (if user asks), adjust import paths, rename component if needed.
- Apply accessibility fixes only if required.
- If component includes a default icon: copy it first, then ask which lucide icon should replace it.
- If tempted to change visuals → STOP and ask.

**Workflow:**
1. Read `flowbite-react-blocks-1.8.0-beta`
2. Check `.claude/flowbite-mcp-pro-1.0.0`
3. Identify candidate components and ask user which to use
4. Paste unchanged
5. Adjust imports only
6. Apply a11y fixes if needed
7. If not found → use Flowbite MCP fallback

### Mode 2 — Fixing Accessibility
**Triggered by:** "make it accessible", "fix WCAG", "fix a11y".

**Rules:**
- Fix only real WCAG failures.
- Never change layout, spacing, colors, or visuals.
- Mark each fix with comments.
- Follow the accessibility checklist.

**Checklist:**
- alt text, aria-labels, aria roles
- required fields, `aria-describedby`
- keyboard navigation, no traps
- focus visible
- contrast only when provably failing
- heading hierarchy
- descriptive links

**Output:**
- Audit summary
- Fixed component with comments

### Mode 3 — Assembly Mode (Default for Building Screens)
**Triggered by:** "build this screen", "design the layout", "create a form", "add a table", "make a dashboard", "show this data nicely", "improve this page", "audit results screen".

**Goal:** Assemble a screen using existing Flowbite components and the project theme.

**Rules:**
- Use only Flowbite React components.
- Compose them into layouts (cards, grids, tables, forms).
- No custom CSS or inline styles.
- No hex colors — use theme utilities only.
- Use Flowbite spacing and layout patterns.
- Use project typography rules.
- Replace Flowbite default icons with lucide-react icons.
- If a needed pattern is missing → ask before inventing.
- Never modify Flowbite internals unless user approves.

### AuditV2 UI Design Skill
**Design Language:**
- White surfaces, subtle shadows
- Accent: primary-700 (#540cac)
- Padding: generous
- Typography: small (text-sm, text-xs)
- Borders: thin (gray-200)
- Table hover: gray-50
- Status badges: small, pill, low-contrast
- Charts: semantic colors only

**Core Rules:**
- Do NOT create custom UI components.
- Use Flowbite components as base.
- Use theme-based utilities only.
- Typography hierarchy max 4 levels.
- Use Flowbite spacing.
- Sidebar + topbar fixed.
- Icons: lucide-react only.

**Accessibility:**
- Inputs have labels.
- Tables use `<th scope="col">`.
- Icon-only buttons have `aria-label`.
- Status includes text.
- Focus rings: `focus:ring-primary-300`.
- Modals: `aria-labelledby`, `aria-modal`, focus trap.

**Reference Files:**
- `flowbite-react-blocks-1.8.0-beta`
- `.claude/flowbite-mcp-pro-1.0.0`
- `accessibility-assistant.skill`

### Feature-Based Architecture
Project follows Arcanimal Feature-Based Architecture pattern.

**Folder Structure:**
```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── index.js       # Barrel exports
│   ├── audit/         # Audit management feature
│   ├── scan/          # Scan execution feature
│   └── triage/        # Triage workflow feature
├── shared/            # Shared/common code
│   ├── ui/            # Reusable UI components
│   │   ├── badges/
│   │   ├── filters/
│   │   ├── icons/
│   │   ├── DataTable.jsx
│   │   └── index.js
│   ├── hooks/
│   ├── utils/
│   └── constants/
├── pages/             # Route-level pages
├── lib/               # Database/API clients
├── config/            # Configuration files
└── App.jsx
```

**Import Patterns — Absolute Imports (Vite Aliases):**
Configured in `vite.config.js`:
- `@/` → `./src`
- `@features/` → `./src/features`
- `@shared/` → `./src/shared`
- `@pages/` → `./src/pages`
- `@lib/` → `./src/lib`
- `@config/` → `./src/config`

```javascript
// ✅ CORRECT — Use absolute imports
import { StatCard } from '@shared/ui'
import { useAuth } from '@features/auth'
import { getAudits } from '@lib/db/audits'

// ❌ AVOID — Don't use deep relative paths
import { StatCard } from '../../../../../shared/ui'
```

**Barrel Exports:**
Each folder should have an `index.js` for clean imports:
```javascript
// src/shared/ui/index.js
export { StatCard } from './StatCard'
export { PipelineBar } from './PipelineBar'
export { DataTable, columnPresets } from './DataTable'
```

### Tailwind Configuration
- Uses Flowbite preset.
- Dark mode enabled.
- Responsive mobile-first.

### Theme System
- Light/dark toggle via `ThemeContext`.
- Global class on root element.
- `index.css` may define global CSS variables.

### Common Tasks
- Add components in `/src/components`.
- Use Flowbite components.
- Maintain responsive behavior.
- Add pages via routes in `App.jsx`.

### Compatibility Notes
- Flowbite MCP (fallback only).
- `web_search` / `web_fetch`.

---

## Shared Components Reference

### DataTable Component
**Location:** `src/shared/ui/DataTable.jsx`

A reusable, configurable table component built on top of Flowbite React's Table components with support for selectable rows, expandable rows, and custom column rendering.

**Features:**
- Configurable columns — define columns via configuration objects.
- Selectable rows — checkbox-based selection with select-all support.
- Expandable rows — toggle to show/hide additional row content.
- Click handling — row click navigation.
- Custom rendering — per-cell custom render functions.
- Dark mode support — automatically handles dark mode.
- Accessible — proper ARIA attributes and keyboard navigation.

**Import:**
```jsx
import { DataTable, columnPresets } from '@shared/ui'
// or
import { DataTable } from '@shared/ui/DataTable'
```

**Basic Usage:**
```jsx
<DataTable
  columns={[
    {
      key: 'name',
      header: 'Audit Name',
      width: 'min-w-56',
      render: (row) => <span>{row.name}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      component: StatusBadge,
    },
    {
      key: 'actions',
      header: '',
      width: 'w-16',
      render: (row) => <ActionDropdown audit={row} />,
    },
  ]}
  data={audits}
  selectable
  onRowClick={(row) => navigate(`/audits/${row.id}`)}
  onSelectionChange={(selectedIds) => console.log(selectedIds)}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColumnConfig[]` | `[]` | Array of column configuration objects |
| `data` | `any[]` | `[]` | Array of data rows |
| `selectable` | `boolean` | `false` | Enable row selection with checkboxes |
| `expandable` | `boolean` | `false` | Enable expandable rows |
| `renderExpand` | `(row) => ReactNode` | — | Function to render expanded content |
| `onRowClick` | `(row) => void` | — | Callback when row is clicked |
| `onSelectionChange` | `(Set) => void` | — | Callback when selection changes |
| `keyExtractor` | `(row, index) => string` | `row.id` | Function to get unique row key |
| `hoverClassName` | `string` | `hover:bg-gray-100...` | CSS classes for row hover effect |
| `borderClassName` | `string` | `border-b...` | CSS classes for row borders |
| `rowClassName` | `(row, index) => string` | — | Function to add custom row classes |

**ColumnConfig:**
| Property | Type | Description |
|----------|------|-------------|
| `key` | `string` | Unique column identifier |
| `header` | `string` | Column header text |
| `width` | `string` | Width class (e.g., `'min-w-56'`, `'w-16'`) |
| `scope` | `string` | Scope attribute for th (`'col'`, `'row'`) |
| `render` | `(row, index) => ReactNode` | Custom cell render function |
| `component` | `ReactComponent` | Component to render with row data spread |
| `cellClassName` | `string` | Additional CSS classes for cells |
| `headerClassName` | `string` | Additional CSS classes for header |

**Expandable Rows:**
```jsx
<DataTable
  columns={columns}
  data={data}
  expandable
  renderExpand={(row) => (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-gray-100 p-4 rounded">
        <h6>Details</h6>
        <p>{row.description}</p>
      </div>
    </div>
  )}
/>
```

**Column Presets Helpers:**
```jsx
import { columnPresets } from '@shared/ui/DataTable'

const { text, custom, actions } = columnPresets

const columns = [
  text('name', 'Product Name', { width: 'min-w-48' }),
  custom('details', 'Details', (row) => <DetailsCell row={row} />),
  actions((row) => <ActionButtons row={row} />, { width: 'w-24' }),
]
```

**Used In:**
- `src/pages/AuditsPage.jsx` — Audits listing table

**Examples:**
See `src/shared/ui/DataTable.example.jsx` for complete usage examples.
