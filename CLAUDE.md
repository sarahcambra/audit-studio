# Always use Context7 when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

============================================================
# ✅ GCE Migration COMPLETE — 3 Fixes Applied (2026-06-01)
# ============================================================

**Status:** ✅ **ALL FIXED** — Scan worker running on GCE VM, fully operational.

| Fix | Problem | Solution | Status |
|-----|---------|----------|--------|
| **#1** | Supabase key corrupted in env file | Rewrote `/opt/scan-worker.env` with correct key (had `'` in project ref) | ✅ Fixed |
| **#2** | Firebase Function pointing to old Cloud Run URL | Updated `functions/.env` with `SCAN_WORKER_URL=http://34.28.36.86:3001` and redeployed | ✅ Fixed |
| **#3** | Could not test end-to-end | Verified scan completes: example.com scanned in 12s, 2 violations found, screenshot uploaded | ✅ Fixed |

**Current State (as of 2026-06-11):**
- GCE VM `scan-worker-vm` recreated with 4GB RAM (e2-medium) — **IP: 35.226.21.209**
- Docker container `scan-worker` running with correct env vars
- Worker responding to health checks and scan requests
- Firebase Function deployed and routing to VM
- Artifact Registry repository created for future Cloud Build deployments
- Cloud Build IAM permissions configured

---

# ============================================================
# 🐛 React Error #130 Fix — 2026-06-11
# ============================================================

**Problem:** Page goes blank when scan completes. Console shows:
```
Minified React error #130; visit https://react.dev/errors/130
Element type is invalid: expected a string or class/function but got: undefined
```

**Root Cause:** `ViolationCard` component was defined **AFTER** `export default` statement in `ScanResults.jsx`. When React tried to render `<ViolationCard />`, the component was `undefined` because the export runs before subsequent code.

**File:** `src/features/scan/components/ScanResults.jsx`

**The Fix:**
```javascript
// BEFORE (broken):
export default memo(ScanResults, ...)

function ViolationCard({ group, ... }) { ... }  // Defined AFTER export = undefined

// AFTER (fixed):
function ViolationCard({ group, ... }) { ... }  // Defined BEFORE export

export default memo(ScanResults, ...)
```

**Lesson:** Always define helper components **before** the export statement.

---

# ============================================================
# ⚠️ CRITICAL: Cloud Run + Chrome Incompatibility - SOLVED via GCE
# ============================================================

**Problem (2026-06-01):** Cloud Run's security sandbox is incompatible with Chrome's process architecture. Chrome's GPU process initialization hangs indefinitely in Cloud Run's restricted environment, causing all scans to timeout after 60-120 seconds.

**Status:** ✅ **SOLVED** — Migrated to Google Compute Engine (GCE) with 5 critical fixes applied.

**Root Cause:**
- Cloud Run blocks system calls Chrome needs (`/proc/sys/fs/inotify`, NETLINK sockets, D-Bus)
- Chrome's GPU process tries to initialize sandbox with multiple threads → hangs
- All flags (`--disable-gpu`, `--disable-software-rasterizer`, `--no-zygote`, etc.) are insufficient

**Solution:** Deploy scan-worker to **Google Compute Engine (GCE)** VM with 5 critical fixes.

---

# ============================================================
# GCE Deployment — 5 Critical Fixes Applied (2026-06-01)
# ============================================================

## The 5 Critical Fixes

| Fix | Issue | Why Critical | Implementation |
|-----|-------|--------------|----------------|
| **#1** | OOM on small instances | Chrome needs 300-600MB, Node needs 200-400MB, heavy pages spike to 800MB+ | Use **e2-medium** (4GB RAM), not e2-small (2GB) |
| **#2** | Pending jobs stuck forever | If VM is down when POST arrives, job stays 'pending' indefinitely | `recoverStaleJobs()` now handles BOTH 'running' AND 'pending' jobs |
| **#3** | No HTTPS | Bearer token transmitted in plaintext | **Caddy** auto-provisions Let's Encrypt cert, terminates TLS, proxies to :3001 |
| **#4** | Ephemeral IP | VM restart = new IP = SCAN_WORKER_URL becomes wrong | Reserve **static IP** at VM creation |
| **#5** | Stealth disabled | Bot detection (Cloudflare) blocks scanner, wrong results | **Re-enabled playwright-extra + puppeteer-extra-plugin-stealth** |

## What Was Fixed in Code

### Fix #2 — recoverStaleJobs() now handles pending jobs
```javascript
// In scan-worker/index.js — recoverStaleJobs()
// OLD: Only recovered 'running' jobs
.eq('status', 'running')

// NEW: Recovers both 'running' AND stale 'pending' jobs
.eq('status', 'running')  // running jobs
// PLUS:
.eq('status', 'pending')
.lt('created_at', fiveMinutesAgo)  // pending jobs older than 5 min
```

### Fix #5 — Stealth plugin re-enabled
```javascript
// In scan-worker/index.js
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
const stealth = StealthPlugin()
chromium.use(stealth)  // Was disabled for Cloud Run, now enabled for GCE
```

### Firebase Functions — Add retry logic (also for Fix #2)
```javascript
// In functions/handlers/scan.js — POST to worker with 3-retry
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

## GCE Deployment Steps

### Step 1: Create VM with Static IP (Fix #4)
```bash
# Reserve static IP first
gcloud compute addresses create scan-worker-ip --region=us-central1

# Create e2-medium VM (Fix #1 - 4GB RAM)
gcloud compute instances create scan-worker-vm \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --address=scan-worker-ip \
  --tags=scan-worker \
  --metadata startup-script='#!/bin/bash
    apt-get update
    apt-get install -y docker.io caddy
    systemctl enable docker caddy
  '
```

### Step 2: Configure Firewall
```bash
# Allow HTTP (Caddy reverse proxy) AND direct port 3001 (Firebase Function → VM)
gcloud compute firewall-rules create allow-scan-worker \
  --allow tcp:80,tcp:443,tcp:3001 \
  --target-tags=scan-worker \
  --description="Allow HTTP/HTTPS and direct port 3001 to scan worker"
```

**Important:** Port 3001 must be open for Firebase Function to reach the VM directly.

### Step 3: SSH and Setup (Fix #3 - Caddy for HTTPS)
```bash
gcloud compute ssh scan-worker-vm --zone=us-central1-a

# Install Docker and Caddy
sudo apt update
sudo apt install -y docker.io caddy

# Configure Caddy (auto HTTPS)
sudo tee /etc/caddy/Caddyfile << 'EOF'
scan-worker.yourdomain.com {
    reverse_proxy localhost:3001
}
EOF

sudo systemctl reload caddy
```

### Step 4: Deploy Docker Container
```bash
# On your local machine — build and deploy
gcloud builds submit --tag gcr.io/audit-studio-prod/scan-worker

# SSH to VM and pull/run
gcloud compute ssh scan-worker-vm --zone=us-central1-a

sudo docker pull gcr.io/audit-studio-prod/scan-worker:latest

sudo docker run -d \
  --name scan-worker \
  --restart=always \
  -p 3001:3001 \
  -e SUPABASE_URL=your_supabase_url \
  -e SUPABASE_SERVICE_KEY=your_service_key \
  -e WORKER_SECRET=your_worker_secret \
  -e PORT=3001 \
  gcr.io/audit-studio-prod/scan-worker
```

### Step 5: Update Firebase Functions
```bash
# Update SCAN_WORKER_URL to point to your VM
gcloud functions deploy scan \
  --set-env-vars SCAN_WORKER_URL=https://scan-worker.yourdomain.com
```

## Cost Breakdown

| Component | Monthly Cost | Covered by $300 credit? |
|-------------|--------------|-------------------------|
| e2-medium VM (4GB) | ~$33/month | ✅ Yes (9 months free) |
| Static IP (reserved) | ~$5/month | ✅ Yes |
| Caddy (Let's Encrypt) | Free | ✅ Yes |
| Egress traffic | ~$5-10/month | ✅ Yes |
| **Total** | **~$43/month** | **✅ 7 months free** |

## Technical Debt (Fix Later)

These are real issues but don't block day-one operation:

| Issue | Impact | When to Fix |
|-------|--------|-------------|
| Health check lies | Might accept jobs when broken | After first incident |
| Chrome zombies | Slow memory leak | Monthly restart handles it |
| Triage fire-and-forget | Occasional missing data | Add retry logic later |
| Secrets in docker inspect | Root can see env vars | Use .env file later |
| Single process bottleneck | Only 1 scan at a time | When you have 10+ users |
| No graceful shutdown | Lost scans on deploy | Deploy during low usage |

## Why Not Browserless.io?

| Factor | Browserless | GCE |
|----------|-------------|-----|
| **Cost** | $20-50/month real money | ~$33/month from GCP credit |
| **Custom checks** | ❌ Breaks architecture | ✅ Works unchanged |
| **Custom checks why** | Needs live browser page | Has live browser page |
| **Examples** | placeholder contrast, focus rings | Both need `page.evaluate()` |
| **GCP credit** | ❌ Can't use | ✅ Uses $300 credit |
| **Maintenance** | Managed | You maintain VM |

**Browserless is wrong choice because:**
- Custom checks (`checks/placeholderContrast.js`, `checks/focusVisible.js`) need **live browser page**
- They access `::placeholder` pseudo-elements, computed styles, focus states
- Can't run against HTML/JSON from Browserless
- Would require **complete rewrite** of 17 custom checks

**Conclusion:** GCE with Docker is the correct architecture for your use case.

---

# ============================================================
# 🚨 VM RECREATION — 2026-06-11
# ============================================================

**Issue:** GCE VM `scan-worker-vm` was **deleted** (no longer existed). Scans stuck on "Processing results" indefinitely because there was no worker to process them.

**Error:** `browserType.launch: Timeout 60000ms exceeded` — Chrome couldn't start because VM was missing.

## Resolution Steps

### Step 1: Recreate VM with Static IP
```bash
# Reserve static IP
gcloud compute addresses create scan-worker-ip --region=us-central1 --project=audit-studio-prod-90ea8

# Create e2-medium VM (4GB RAM)
gcloud compute instances create scan-worker-vm \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --address=scan-worker-ip \
  --tags=scan-worker \
  --project=audit-studio-prod-90ea8
```

### Step 2: Configure Firewall
```bash
gcloud compute firewall-rules create allow-scan-worker \
  --allow tcp:80,tcp:443 \
  --target-tags=scan-worker \
  --description="Allow HTTP/HTTPS to scan worker" \
  --project=audit-studio-prod-90ea8
```

### Step 3: Install Docker and Caddy on VM
```bash
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8

# Install Docker
sudo apt-get update
sudo apt-get install -y docker.io

# Install Caddy
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt-get update
sudo apt-get install -y caddy

# Configure Caddy
sudo tee /etc/caddy/Caddyfile << 'EOF'
{
  email sarahbbeu@gmail.com
}

:80 {
  reverse_proxy localhost:3001
}
EOF

sudo systemctl reload caddy
```

### Step 4: Create Artifact Registry Repository
```bash
# Repository is required for Cloud Build (or build directly on VM)
gcloud artifacts repositories create scan-worker \
  --repository-format=docker \
  --location=us-central1 \
  --project=audit-studio-prod-90ea8

# Grant Cloud Build permission to push
gcloud projects add-iam-policy-binding audit-studio-prod-90ea8 \
  --member="serviceAccount:72106954414@cloudbuild.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"
```

### Step 5: Deploy Scan Worker (Build on VM)
**Note:** Cloud Build works but requires Artifact Registry. Alternative: build directly on VM.

```bash
# On local machine — copy code to VM
tar -czf /tmp/scan-worker.tar.gz -C /Users/sarah/auditV2/scan-worker .
gcloud compute scp /tmp/scan-worker.tar.gz scan-worker-vm:/tmp/scan-worker.tar.gz \
  --zone=us-central1-a --project=audit-studio-prod-90ea8

# On VM — extract and build
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
sudo mkdir -p /opt/scan-worker
sudo tar -xzf /tmp/scan-worker.tar.gz -C /opt/scan-worker

# Create environment file
sudo tee /opt/scan-worker/.env << 'EOF'
SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaWZqenhuan... # full key
WORKER_SECRET=3c27c3873662fb235150dca2e3b021abec66cd87530047ecae5e2d57d8c96817
PORT=3001
EOF

# Build and run Docker container
cd /opt/scan-worker
sudo docker build -t scan-worker:latest .
sudo docker run -d \
  --name scan-worker \
  --restart=always \
  -p 3001:3001 \
  --env-file /opt/scan-worker/.env \
  scan-worker:latest
```

### Step 6: Update Firebase Functions
```bash
# Get VM external IP
export VM_IP=$(gcloud compute instances describe scan-worker-vm \
  --zone=us-central1-a --project=audit-studio-prod-90ea8 \
  --format='value(networkInterfaces[0].accessConfigs[0].natIP)')

# Update .env
echo "SCAN_WORKER_URL=http://${VM_IP}:3001" > functions/.env

# Redeploy
cd /Users/sarah/auditV2
firebase deploy --only functions --project audit-studio-prod-90ea8
```

## Current State (2026-06-11)

| Component | Status | Value |
|-----------|--------|-------|
| GCE VM | ✅ Running | `scan-worker-vm` (e2-medium, 4GB RAM) |
| VM IP | ✅ Static | `35.226.21.209` |
| Docker Container | ✅ Running | `scan-worker:latest` on port 3001 |
| Firebase Function | ✅ Updated | Points to `http://35.226.21.209:3001` |
| Artifact Registry | ✅ Created | `us-central1-docker.pkg.dev/audit-studio-prod-90ea8/scan-worker` |

## Common Errors

### Error: "Worker request failed after 3 attempts — fetch failed"

**Cause:** Firewall blocking port 3001

**Fix:**
```bash
gcloud compute firewall-rules update allow-scan-worker \
  --allow tcp:80,tcp:443,tcp:3001 \
  --project=audit-studio-prod-90ea8
```

### Error: "browserType.launch: Timeout 60000ms exceeded"

**Cause:** VM doesn't exist or Docker container not running

**Fix:** Check VM status and restart container:
```bash
gcloud compute instances list --project=audit-studio-prod-90ea8
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
sudo docker ps
sudo docker restart scan-worker
```

## Debugging Commands

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

---

# ============================================================
# PROJECT OVERVIEW
# ============================================================

Project name: Audit Studio (folder was auditV2, renamed to audit-studio)
Type: React + Vite application — WCAG 2.1/2.2 accessibility auditing tool
UI Framework: Flowbite Pro React  
Styling: Tailwind CSS v4 with dark mode  
Design System: Flowbite components + custom theme.js  
State Management: ThemeContext + AuthContext

## Full Stack Architecture

Frontend: React 19 + Vite — deployed to Firebase Hosting (GCP project: audit-studio-prod-90ea8)
Auth + DB: Supabase — GitHub + Google OAuth, PostgreSQL, Realtime subscriptions
API layer: Firebase Cloud Functions v2 (functions/index.js) — thin dispatchers only
  - scan()   → POST /api/scan
  - favicon() → GET  /api/favicon
  - Firebase Hosting rewrites /api/* to the functions transparently
Scan worker: Node.js + playwright-extra + stealth + axe-core — deployed on GCE VM (GCP)
  - Worker URL: http://35.226.21.209:3001 (GCE VM with static IP)
  - Docker image: scan-worker:latest (built locally on VM)
  - Deployed via: Docker on GCE VM (mcr.microsoft.com/playwright:v1.60.0-noble base)
  - Auth: Bearer token (WORKER_SECRET env var)
  - Config: e2-medium (4GB RAM), Docker container with restart=always

## How scanning works

1. User triggers scan → useScanRunner fetches session JWT
2. POST /api/scan with JWT in Authorization header
3. Firebase Function (functions/handlers/scan.js) verifies JWT, checks audit ownership, checks rate limit
4. Creates scan_job row in Supabase, fires POST to GCE VM worker (fire-and-forget)
5. Returns { jobId } immediately to frontend
6. GCE VM worker runs playwright-extra (stealth) + axe-core, writes results to Supabase
7. Frontend receives update via Supabase Realtime subscription (~1s latency)

## Key env vars (Firebase Cloud Functions — functions/.env)
- SUPABASE_URL — Supabase project URL
- SUPABASE_SERVICE_ROLE_KEY — server-side only, bypasses RLS
- SCAN_WORKER_URL — Cloud Run worker URL
- SCAN_WORKER_SECRET — shared Bearer token

## Key env vars (Cloud Run worker)
- SUPABASE_URL — Supabase project URL
- SUPABASE_SERVICE_KEY — service role key
- WORKER_SECRET — shared Bearer token (mandatory — process.exit(1) if missing)
- PORT — auto-set by Cloud Run (8080)

## Key env vars (Frontend build — .env)
- VITE_SUPABASE_URL — Supabase project URL (public)
- VITE_SUPABASE_ANON_KEY — public anon key

## Fixes applied 2026-05-28
- vercel.json: security headers added (X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy, COOP, CSP-Report-Only)
- api/scan.js: JWT verification + audit ownership check + rate limiting (10/min)
- useScanRunner.js: sends Authorization: Bearer JWT on scan requests
- App.jsx: lazy() code splitting for all page components
- ApplicationShell.jsx: skip link added, main has id="main-content" tabIndex={-1}
- LoginPage.jsx: type="button" on both sign-in buttons
- vite.config.js: replaced process.env:{} with explicit NODE_ENV, added build.target
- NewAuditWizard.jsx: validation errors persist across step navigation

## Pending issues (from REMEDIATION_PLAN.md)
- M-2: No aria-invalid on wizard form inputs
- M-5: React.memo on ScanResults to reduce re-renders
- M-6: Test coverage gaps (useScanRunner hook, api/scan ownership)
- M-8: JSDoc comments on groupViolations, enrichViolations, componentSelectors

## Scan Worker Architecture Remediation (2026-05-30)

Full rewrite of scan-worker/index.js. Replaced @sparticuz/chromium with
playwright-extra + puppeteer-extra-plugin-stealth. All previous scan bugs
(05-28 and 05-29) are resolved and superseded by this rewrite.

### What changed
- playwright-extra + stealth plugin (prevents bot detection)
- Real User-Agent, viewport (1365x900), locale (en-US) on every context
- Hydration wait sequence: networkidle (non-fatal) → cookie banner dismiss → 3s settle
- Hard watchdog (runWithWatchdog) that force-closes the browser on 2-min timeout
- Full UNIFIED_AXE_TAGS: wcag2a, wcag2aa, wcag22aa, best-practice, experimental, cat.aria, cat.color-contrast
- DEFAULT_EXCLUDE_SELECTORS for modal/widget exclusion
- Removed blockHeavyResources() — was breaking sites that detect blocked assets
- Navigation .catch() so goto failures don't crash the scan (60s timeout)
- normalizeReport() adds driver, url, axeConfig, durationMs, pageTitle, pageLang to summary
- createAxeBuilder() helper with tag + exclude support

### Frontend changes (same date)
- useScanRunner.js: Replaced 3s polling with Supabase Realtime subscription (~1s latency)
- useScanRunner.js: Added onError callback for toast integration
- ScanPanel.jsx: Wired useToast() + onError → scan failures show dismissible error toasts
- H-4 (error toasts) is now resolved

### Known limitations
- Single Node.js process — one deadlocked Chromium blocks all scans. Watchdog mitigates
  but doesn't fully solve. Future: child-process per scan or queue-based architecture.
- Concurrency=1 on Cloud Run (one Chromium at a time, by design — 2Gi RAM limit)
- Cold starts on Cloud Run (min-instances=0 to save cost) add ~10-15s on first scan

### Critical rules (still apply)
- Never .catch() on Supabase Postgrest queries — use .then(null, () => {}) or check { error }
- Never block resources (breaks sites that detect missing assets)
- Keep headless: true on Cloud Run
- launchBrowser() must use --single-process + --no-zygote on Cloud Run (subprocess spawning not allowed)

### Deployment
  # Rebuild and redeploy scan worker
  cd scan-worker
  gcloud builds submit --tag gcr.io/audit-studio-prod/scan-worker .
  cd ..
  gcloud run deploy scan-worker --image gcr.io/audit-studio-prod/scan-worker --region us-central1 \
    --memory 2Gi --cpu 2 --concurrency 1 --min-instances 0 --max-instances 1 --timeout 600 \
    --allow-unauthenticated --set-env-vars "SUPABASE_URL=...,SUPABASE_SERVICE_KEY=...,WORKER_SECRET=..."

  # Redeploy frontend + functions
  npm run build
  firebase deploy

## GCP Migration (2026-05-30)

Migrated from Vercel + Railway to Firebase Hosting + Cloud Run.
- firebase.json: Hosting config with /api/* rewrites to Cloud Functions
- functions/: Firebase Cloud Functions v2 wrapping api/scan.js and api/favicon.js
- functions/.env: Runtime env vars for Cloud Functions (not committed to git)
- scan-worker/Dockerfile: Uses mcr.microsoft.com/playwright:v1.60.0-noble (Cloud Run compatible)
- scan-worker/.dockerignore: Optimized build context
- MIGRATION_GCP.md: Full step-by-step deployment guide
- Supabase allowed redirect URLs updated to include Firebase Hosting domains

## Screenshot fix (2026-05-30)
- scan-worker: Screenshot now uploaded BEFORE inserting scan_results, URL stored in summary.screenshotUrl
- useScanRunner.js: All three result-building paths now include screenshot: summary.screenshotUrl
- ScanResults.jsx: Uses URL src instead of base64 data URI

## Triage expanded row (2026-05-30)
- TriageTab.jsx: Expanded row now shows full scan-card style panel:
  title + impact/issue-type badges, SC chips, category chips, element count,
  fix difficulty, affected users, description, element location, how-to-fix
- All data sourced from triage_items columns + RULE_ENRICHMENTS (no extra fetch)

## Stale job recovery (2026-05-30)
- scan-worker/index.js: recoverStaleJobs() on startup marks stuck 'running' jobs as error
- useScanRunner.js: 10-minute watchdog per job — marks timed-out jobs as error in DB
- supabase/migration_stale_jobs_cron.sql: pg_cron job runs every 5 min as safety net

Key Files:
- /src/components/ApplicationShell.jsx — shell with sidebar + skip link
- /src/App.jsx — routes with lazy loading
- /src/context/AuthContext.jsx — Supabase auth
- /src/context/ToastContext.jsx — toast notification system
- /src/hooks/useScanRunner.js — scan queue + Supabase Realtime
- /src/components/scan/ScanPanel.jsx — scan UI with error toasts
- /src/components/triage/TriageTab.jsx — triage table with expanded scan-card rows
- /functions/index.js — Firebase Cloud Functions v2 entry point
- /functions/handlers/scan.js — scan job dispatcher
- /functions/handlers/favicon.js — favicon resolver
- /scan-worker/index.js — playwright-extra + stealth + axe-core worker

Tailwind:
- Uses Flowbite preset
- Dark mode enabled
- Responsive mobile-first

Development Guidelines:
- Convert HTML → JSX properly
- Use Flowbite components whenever possible
- Maintain responsive design
- Preserve dark mode support

Theme System:
- Light/dark toggle via ThemeContext
- Global class on root element
- index.css may define global CSS variables

Common Tasks:
- Add components in /src/components
- Use Flowbite components
- Maintain responsive behavior
- Add pages via routes in App.jsx

Compatibility:
- Flowbite MCP (fallback only)
- web_search / web_fetch

---

# ============================================================
# FLOWBITE PRO — COMPONENT FIDELITY + ACCESSIBILITY
# ============================================================

SOURCE OF TRUTH:
1. flowbite-react-blocks-1.8.0-beta  
2. .claude/flowbite-mcp-pro-1.0.0  
3. Flowbite MCP fallback (only if not found)

COPY = reproduce exactly  
FIX = fix only real WCAG failures  

Always read .claude/flowbite-mcp-pro-1.0.0 first.

---

# ============================================================
# THEME USAGE RULES — USE THEME.JS ONLY WHEN NEEDED
# ============================================================

This project uses Flowbite Pro React + Tailwind CSS v4 + a custom theme.js.

Claude must follow these rules when deciding whether to use theme.js or Tailwind:

1. DEFAULT BEHAVIOR
- Use Flowbite Pro components EXACTLY as provided.
- Keep all Tailwind classes from Flowbite templates.
- Do NOT convert Flowbite classes into theme.js tokens unless explicitly asked.

2. WHEN TO USE THEME.JS
Claude must use theme.js ONLY when:
- The design system requires a custom variant (badge, button, alert, etc.)
- A Flowbite component does not match the design system's colors, shapes, or states
- The user explicitly asks for a themed version
- A new variant must be added (e.g., bordered, dot, chip, loader)
- A component needs semantic color mapping (success, warning, danger, info)

3. WHEN NOT TO USE THEME.JS
Claude must NOT use theme.js when:
- Copying Flowbite Pro components (MODE 1)
- Fixing accessibility (MODE 2)
- Assembling screens using existing components (MODE 3)
- The Flowbite default already matches the design system
- The change is layout-only (grid, flex, spacing, responsive)

4. RESPONSIVENESS RULE
When customizing a component using theme.js:
- Claude must preserve ALL responsive classes from the original template
- sm:, md:, lg:, xl: breakpoints must remain untouched
- Layout structure must remain identical unless user requests changes

5. LAYOUT VS. THEME BOUNDARY
- Tailwind classes for layout (flex, grid, gap, spacing, width, height) stay in JSX
- Colors, borders, radiuses, typography variants belong in theme.js ONLY when needed
- Never remove responsive behavior from templates

6. NEVER DO THIS
- Never rewrite Flowbite Pro components into theme.js versions unless asked
- Never remove Tailwind responsive classes
- Never replace layout classes with theme tokens
- Never "theme-ify" a component automatically

---

# ============================================================
# ACCESSIBILITY BASELINE (GLOBAL)
# ============================================================

All components must follow WCAG 2.2 + EN 301 549.

Fix only real failures:
- alt text
- aria-labels
- aria roles
- keyboard navigation
- focus visible
- contrast (only when provably failing)
- heading hierarchy
- descriptive links

Never change:
- layout
- spacing
- colors (unless failing contrast)
- border-radius
- component structure

---

# ============================================================
# MODE 1 — COPYING A COMPONENT
# ============================================================

Triggered by:
"copy the navbar", "use the hero", "add the sidebar", "insert this component".

Rules:
- Copy character-for-character
- Allowed changes:
  - replace placeholder text (if user asks)
  - replace href="#" (if user asks)
  - adjust import paths
  - rename component if needed
- Apply accessibility fixes only if required
- If component includes a default icon:
  - copy it first
  - then ask which lucide icon should replace it
- If tempted to change visuals → STOP and ask

Workflow:
1. Read flowbite-react-blocks-1.8.0-beta
2. Check .claude/flowbite-mcp-pro-1.0.0
3. Identify candidate components and ask user which to use
4. Paste unchanged
5. Adjust imports only
6. Apply a11y fixes if needed
7. If not found → use Flowbite MCP fallback

---

# ============================================================
# MODE 2 — FIXING ACCESSIBILITY
# ============================================================

Triggered by:
"make it accessible", "fix WCAG", "fix a11y".

Rules:
- Fix only real WCAG failures
- Never change layout, spacing, colors, or visuals
- Mark each fix with comments
- Follow the accessibility checklist

Checklist:
- alt text, aria-labels, aria roles
- required fields, aria-describedby
- keyboard navigation, no traps
- focus visible
- contrast only when provably failing
- heading hierarchy
- descriptive links

Output:
- Audit summary
- Fixed component with comments

---

# ============================================================
# MODE 3 — ASSEMBLY MODE (DEFAULT FOR BUILDING SCREENS)
# ============================================================

Triggered by:
"build this screen", "design the layout", "create a form",  
"add a table", "make a dashboard", "show this data nicely",  
"improve this page", "audit results screen".

Goal:
Assemble a screen using existing Flowbite components and the project theme.

Rules:
- Use only Flowbite React components
- Compose them into layouts (cards, grids, tables, forms)
- No custom CSS or inline styles
- No hex colors — use theme utilities only
- Use Flowbite spacing and layout patterns
- Use project typography rules
- Replace Flowbite default icons with lucide-react icons
- If a needed pattern is missing → ask before inventing
- Never modify Flowbite internals unless user approves

---

# ============================================================
# AUDITV2 UI DESIGN SKILL
# ============================================================

Design Language:
- White surfaces, subtle shadows
- Accent: primary-700 (#540cac)
- Padding: generous
- Typography: small (text-sm, text-xs)
- Borders: thin (gray-200)
- Table hover: gray-50
- Status badges: small, pill, low-contrast
- Charts: semantic colors only

Core Rules:
- Do NOT create custom UI components
- Use Flowbite components as base
- Use theme-based utilities only
- Typography hierarchy max 4 levels
- Use Flowbite spacing
- Sidebar + topbar fixed
- Icons: lucide-react only

Accessibility:
- Inputs have labels
- Tables use <th scope="col">
- Icon-only buttons have aria-label
- Status includes text
- Focus rings: focus:ring-primary-300
- Modals: aria-labelledby, aria-modal, focus trap

Reference Files:
- flowbite-react-blocks-1.8.0-beta
- .claude/flowbite-mcp-pro-1.0.0
- accessibility-assistant.skill

---

# ============================================================
# FEATURE-BASED ARCHITECTURE
# ============================================================

Project follows Arcanimal Feature-Based Architecture pattern.

## Folder Structure

```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication feature
│   │   ├── components/    # Feature-specific components
│   │   ├── hooks/         # Feature-specific hooks
│   │   ├── context/       # Feature context
│   │   └── index.js       # Barrel exports
│   ├── audit/         # Audit management feature
│   ├── scan/          # Scan execution feature
│   └── triage/        # Triage workflow feature
├── shared/            # Shared/common code
│   ├── ui/            # Reusable UI components
│   │   ├── badges/    # Badge components
│   │   ├── filters/   # Filter components
│   │   ├── icons/     # Custom icons
│   │   ├── DataTable.jsx    # Reusable table component
│   │   └── index.js   # Barrel exports
│   ├── hooks/         # Shared React hooks
│   ├── utils/         # Utility functions
│   └── constants/     # Shared constants
├── pages/             # Route-level pages
├── lib/               # Database/API clients
├── config/            # Configuration files
└── App.jsx            # Application entry
```

## Import Patterns

### Absolute Imports (Vite Aliases)

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

### Barrel Exports

Each folder should have an `index.js` for clean imports:

```javascript
// src/shared/ui/index.js
export { StatCard } from './StatCard'
export { PipelineBar } from './PipelineBar'
export { DataTable, columnPresets } from './DataTable'
```

---

# ============================================================
# DataTable Component — Reusable Table Component
# ============================================================

**Location:** `src/shared/ui/DataTable.jsx`

A reusable, configurable table component built on top of Flowbite React's Table components with support for selectable rows, expandable rows, and custom column rendering.

## Features

- **Configurable columns** — Define columns via configuration objects
- **Selectable rows** — Checkbox-based selection with select-all support
- **Expandable rows** — Toggle to show/hide additional row content
- **Click handling** — Row click navigation
- **Custom rendering** — Per-cell custom render functions
- **Dark mode support** — Automatically handles dark mode
- **Accessible** — Proper ARIA attributes and keyboard navigation

## Import

```jsx
import { DataTable, columnPresets } from '@shared/ui'
// or
import { DataTable } from '@shared/ui/DataTable'
```

## Basic Usage

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

## Props

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

## ColumnConfig

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

## Expandable Rows

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

## Column Presets Helpers

```jsx
import { columnPresets } from '@shared/ui/DataTable'

const { text, custom, actions } = columnPresets

const columns = [
  text('name', 'Product Name', { width: 'min-w-48' }),
  custom('details', 'Details', (row) => <DetailsCell row={row} />),
  actions((row) => <ActionButtons row={row} />, { width: 'w-24' }),
]
```

## Used In

- `src/pages/AuditsPage.jsx` — Audits listing table

## Examples

See `src/shared/ui/DataTable.example.jsx` for complete usage examples.

---

# Data base sql.
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.audit_activity_log (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid,
  user_id uuid,
  action text NOT NULL CHECK (action = ANY (ARRAY['audit_created'::text, 'audit_updated'::text, 'scan_started'::text, 'scan_completed'::text, 'scan_failed'::text, 'triage_decision'::text, 'triage_updated'::text, 'manual_check_updated'::text, 'report_generated'::text])),
  description text,
  metadata jsonb,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT audit_activity_log_pkey PRIMARY KEY (id),
  CONSTRAINT audit_activity_log_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT audit_activity_log_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.audits (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  name text NOT NULL,
  wcag_version text NOT NULL CHECK (wcag_version = ANY (ARRAY['2.1'::text, '2.2'::text])),
  conformance_level text NOT NULL CHECK (conformance_level = ANY (ARRAY['A'::text, 'AA'::text, 'AAA'::text])),
  pre_test_answers jsonb DEFAULT '{}'::jsonb,
  status text DEFAULT 'active'::text CHECK (status = ANY (ARRAY['active'::text, 'archived'::text, 'complete'::text])),
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
CREATE TABLE public.catalog_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  label text NOT NULL,
  selector text NOT NULL,
  requires_trigger boolean DEFAULT false,
  trigger_selector text,
  trigger_action text CHECK (trigger_action = ANY (ARRAY['click'::text, 'hover'::text, 'focus'::text])),
  wait_for text,
  is_global boolean DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT catalog_items_pkey PRIMARY KEY (id),
  CONSTRAINT catalog_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.kb_overrides (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  rule_id text NOT NULL,
  client_fix text,
  auditor_notes text,
  fix_difficulty text CHECK (fix_difficulty = ANY (ARRAY['Easy'::text, 'Medium'::text, 'Hard'::text])),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT kb_overrides_pkey PRIMARY KEY (id),
  CONSTRAINT kb_overrides_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.manual_checks (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  sc_id text NOT NULL,
  source text DEFAULT 'sc'::text CHECK ((source = ANY (ARRAY['sc'::text, 'axe-violations'::text, 'axe-incomplete'::text, 'axe-na'::text, 'always-manual'::text, 'mixed'::text])) OR source IS NULL),
  status text CHECK (status = ANY (ARRAY['pass'::text, 'fail'::text, 'untriaged'::text])),
  notes text,
  image_storage_path text,
  sort_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  browser_tested text,
  test_steps text,
  environment text CHECK (environment = ANY (ARRAY['desktop'::text, 'mobile'::text, 'both'::text])),
  sc_name text,
  verdict text CHECK ((verdict = ANY (ARRAY['pass'::text, 'fail'::text, 'na'::text, 'deferred'::text])) OR verdict IS NULL),
  auditor_notes text,
  auto_status text CHECK ((auto_status = ANY (ARRAY['fail'::text, 'needs-check'::text, 'na'::text, 'pass'::text, 'always-manual'::text])) OR auto_status IS NULL),
  evidence_json jsonb DEFAULT '{}'::jsonb,
  CONSTRAINT manual_checks_pkey PRIMARY KEY (id),
  CONSTRAINT manual_checks_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id)
);
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.reports (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  user_id uuid NOT NULL,
  format text DEFAULT 'pdf'::text CHECK (format = ANY (ARRAY['pdf'::text, 'html'::text, 'csv'::text])),
  status text DEFAULT 'generating'::text CHECK (status = ANY (ARRAY['generating'::text, 'complete'::text, 'error'::text])),
  storage_path text,
  generated_at timestamp with time zone DEFAULT now(),
  report_type text DEFAULT 'audit_final'::text CHECK (report_type = ANY (ARRAY['audit_final'::text, 'preliminary'::text, 'remediation_status'::text])),
  error_message text,
  file_size_bytes integer,
  CONSTRAINT reports_pkey PRIMARY KEY (id),
  CONSTRAINT reports_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT reports_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.scan_jobs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  scan_type text NOT NULL CHECK (scan_type = ANY (ARRAY['page'::text, 'component'::text, 'flow'::text])),
  url text NOT NULL,
  selector text,
  flow_steps jsonb,
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending'::text, 'running'::text, 'complete'::text, 'error'::text])),
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
CREATE TABLE public.scan_results (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  job_id uuid NOT NULL,
  violations_json jsonb DEFAULT '[]'::jsonb,
  incomplete_json jsonb DEFAULT '[]'::jsonb,
  passes_json jsonb DEFAULT '[]'::jsonb,
  inapplicable_json jsonb DEFAULT '[]'::jsonb,
  grouped_violations jsonb DEFAULT '[]'::jsonb,
  summary jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now(),
  violation_count integer DEFAULT 0,
  incomplete_count integer DEFAULT 0,
  pass_count integer DEFAULT 0,
  inapplicable_count integer DEFAULT 0,
  CONSTRAINT scan_results_pkey PRIMARY KEY (id),
  CONSTRAINT scan_results_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.scan_jobs(id)
);
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
CREATE TABLE public.triage_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  audit_id uuid NOT NULL,
  job_id uuid NOT NULL,
  group_id text NOT NULL,
  rule_id text NOT NULL,
  landmark text,
  issue_type text CHECK (issue_type = ANY (ARRAY['failure'::text, 'needs review'::text, 'failure, needs review'::text])),
  decision text CHECK (decision = ANY (ARRAY['confirmed'::text, 'not-failure'::text, 'manual-check'::text, 'deferred'::text, 'dismissed'::text, 'needs_review'::text])),
  dismissal_reason text CHECK (dismissal_reason = ANY (ARRAY['false-positive'::text, 'accepted-risk'::text, 'not-in-scope'::text, 'already-fixed'::text])),
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
  tags ARRAY DEFAULT '{}'::text[],
  wcag_sc text,
  sc_ids ARRAY DEFAULT '{}'::text[],
  node_count integer DEFAULT 0,
  element_snippet text,
  screenshot_url text,
  CONSTRAINT triage_items_pkey PRIMARY KEY (id),
  CONSTRAINT triage_items_audit_id_fkey FOREIGN KEY (audit_id) REFERENCES public.audits(id),
  CONSTRAINT triage_items_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.scan_jobs(id)
);

#--------#
