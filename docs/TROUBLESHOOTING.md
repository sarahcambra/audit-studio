# Troubleshooting Guide

> Source: Consolidated from `CLAUDE.md` operational fixes (2026-05-28 → 2026-06-14).  
> Last updated: 2026-06-15

---

## Table of Contents
1. [Scan Worker Issues](#scan-worker-issues)
2. [GCE VM Issues](#gce-vm-issues)
3. [Firebase Functions Issues](#firebase-functions-issues)
4. [Frontend / React Issues](#frontend--react-issues)
5. [Supabase Issues](#supabase-issues)
6. [Deployment Issues](#deployment-issues)
7. [Chrome / Playwright Issues](#chrome--playwright-issues)
8. [General Debugging Commands](#general-debugging-commands)

---

## Scan Worker Issues

### Issue: "Worker request failed after 3 attempts — fetch failed"

| | |
|---|---|
| **Symptom** | Firebase Functions logs show `fetch failed` after 3 retries when trying to reach the worker. |
| **Diagnosis** | Firewall is blocking port 3001 (or the worker is not running). |
| **Fix** | ```bash
# Allow port 3001 through firewall
gcloud compute firewall-rules update allow-scan-worker \
  --allow tcp:80,tcp:443,tcp:3001 \
  --project=audit-studio-prod-90ea8
``` |
| **Prevention** | After initial setup, restrict firewall to 80/443 only and ensure Caddy reverse proxy is working. Document firewall rules in infrastructure notes. |

---

### Issue: "browserType.launch: Timeout 60000ms exceeded"

| | |
|---|---|
| **Symptom** | Scan job stays "running" indefinitely. Worker logs show `browserType.launch: Timeout 60000ms exceeded`. |
| **Diagnosis** | VM doesn't exist, Docker container is not running, or Chrome is stuck in a zombie state. |
| **Fix** | ```bash
# 1. Check VM status
gcloud compute instances list --project=audit-studio-prod-90ea8

# 2. If VM exists, SSH and check container
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
sudo docker ps

# 3. If container is up but stuck, restart it
sudo docker restart scan-worker

# 4. If Chrome zombies exist, kill them
sudo docker exec scan-worker pkill -9 chrome || true

# 5. If VM is missing, recreate it (see DEPLOYMENT.md § GCE Worker Deploy)
``` |
| **Prevention** | Set up VM uptime alerts in GCP Monitoring. Use `restart=always` Docker flag. Schedule monthly VM restarts to clear Chrome zombie processes. |

---

### Issue: "Scan stuck on 'Processing results' indefinitely"

| | |
|---|---|
| **Symptom** | Frontend shows "Processing results" forever. No scan results appear. |
| **Diagnosis** | GCE VM was deleted and no longer exists. Scans are queued but never processed. |
| **Fix** | Recreate VM, reinstall Docker + Caddy, rebuild scan worker, update Firebase Functions. See DEPLOYMENT.md § VM Recreation. |
| **Prevention** | Never delete the VM manually. Use `gcloud` with caution. Set up GCP project-level delete protections. |

---

### Issue: Scans return empty or incorrect results

| | |
|---|---|
| **Symptom** | Scans complete but show 0 violations on sites known to have issues, or results differ from manual testing. |
| **Diagnosis** | Stealth plugin is disabled, or bot detection (Cloudflare) is blocking the scanner. |
| **Fix** | Verify stealth is enabled in `scan-worker/index.js`: ```javascript
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
const stealth = StealthPlugin()
chromium.use(stealth)
``` |
| **Prevention** | Always use `playwright-extra` + stealth on GCE. Never disable unless explicitly debugging. |

---

### Issue: Supabase key corrupted in env file

| | |
|---|---|
| **Symptom** | Worker starts but fails to write scan results to Supabase. Logs show authentication errors. |
| **Diagnosis** | The `SUPABASE_SERVICE_ROLE_KEY` in `/opt/scan-worker/.env` has a `'` character in the project ref portion, corrupting the key. |
| **Fix** | Rewrite `/opt/scan-worker/.env` with the correct key: ```bash
sudo tee /opt/scan-worker/.env << 'EOF'
SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...
WORKER_SECRET=...
PORT=3001
EOF
sudo docker restart scan-worker
``` |
| **Prevention** | Copy keys from Supabase dashboard using the "Copy" button. Never type keys manually. Validate key format before saving env files. |

---

### Issue: Single scan blocks all subsequent scans

| | |
|---|---|
| **Symptom** | One scan hangs; all new scans queue up and never start. |
| **Diagnosis** | Single Node.js process — one deadlocked Chromium blocks all scans. No queue-based architecture. |
| **Fix** | ```bash
# Kill stuck Chrome processes
sudo docker exec scan-worker pkill -9 chrome || true

# Restart container
sudo docker restart scan-worker

# Mark stuck jobs as error in Supabase (or wait for recoverStaleJobs() on restart)
``` |
| **Prevention** | The 2-minute hard watchdog (`runWithWatchdog`) mitigates but doesn't fully solve. Future: implement child-process per scan or queue-based architecture (e.g., Bull + Redis). |

---

### Issue: Pending jobs stuck forever

| | |
|---|---|
| **Symptom** | Jobs with status `pending` never transition to `running` or `complete`. |
| **Diagnosis** | If VM is down when POST arrives from Firebase Function, job stays `pending` indefinitely. Old `recoverStaleJobs()` only recovered `running` jobs. |
| **Fix** | Update `recoverStaleJobs()` in `scan-worker/index.js` to handle both `running` AND stale `pending` jobs older than 5 minutes: ```javascript
// Recover running jobs
.eq('status', 'running')
// PLUS recover stale pending jobs
.eq('status', 'pending')
.lt('created_at', fiveMinutesAgo)
``` |
| **Prevention** | `recoverStaleJobs()` runs on every worker startup. Also: frontend 10-minute watchdog per job, plus `pg_cron` safety net every 5 minutes. |

---

## GCE VM Issues

### Issue: VM runs out of memory (OOM)

| | |
|---|---|
| **Symptom** | Worker container killed by OOM killer. Logs show `OutOfMemoryError` or container restarts unexpectedly. |
| **Diagnosis** | Using `e2-small` (2GB RAM) instead of `e2-medium` (4GB). Chrome needs 300-600MB, Node needs 200-400MB, heavy pages spike to 800MB+. |
| **Fix** | Recreate VM with `e2-medium` (4GB RAM): ```bash
gcloud compute instances create scan-worker-vm \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  ...
``` |
| **Prevention** | Always use `e2-medium` minimum. Monitor memory with `free -h` and `docker stats --no-stream`. Set up GCP alerts for memory usage > 80%. |

---

### Issue: VM IP changes after restart

| | |
|---|---|
| **Symptom** | After VM restart, Firebase Functions can no longer reach the worker. `SCAN_WORKER_URL` points to old IP. |
| **Diagnosis** | VM was created without a reserved static IP. |
| **Fix** | 1. Reserve static IP: ```bash
gcloud compute addresses create scan-worker-ip --region=us-central1 --project=audit-studio-prod-90ea8
``` 2. Recreate VM with `--address=scan-worker-ip`. 3. Update `functions/.env` with new IP/domain and redeploy. |
| **Prevention** | Always reserve a static IP at VM creation. Use domain name (`worker.incluria.com`) instead of raw IP in `functions/.env` so DNS handles IP changes. |

---

### Issue: Caddy fails to provision Let's Encrypt certificate

| | |
|---|---|
| **Symptom** | `curl -I https://worker.incluria.com/health` returns SSL error or connection refused. |
| **Diagnosis** | Cloudflare proxy (orange cloud) is enabled, hiding the real client IP from Caddy. Let's Encrypt HTTP-01 challenge fails. |
| **Fix** | In Cloudflare dashboard → DNS → Records, set Proxy Status to **DNS only** (grey cloud) for `worker.incluria.com`. Then reload Caddy: ```bash
sudo systemctl reload caddy
``` |
| **Prevention** | Keep Cloudflare DNS as DNS-only for worker subdomain. If you need Cloudflare proxy features later, use Cloudflare Origin CA certificates or switch to DNS-01 challenge. |

---

## Firebase Functions Issues

### Issue: Firebase Function pointing to old worker URL

| | |
|---|---|
| **Symptom** | Scans fail after worker IP/domain changes. Functions logs show connection errors to old URL. |
| **Diagnosis** | `functions/.env` still contains old `SCAN_WORKER_URL` (e.g., old Cloud Run URL or old VM IP). |
| **Fix** | Update `functions/.env`: ```bash
echo "SCAN_WORKER_URL=https://worker.incluria.com" > functions/.env
# Or if using IP directly:
echo "SCAN_WORKER_URL=http://35.226.21.209:3001" > functions/.env
``` Then redeploy: ```bash
firebase deploy --only functions --project audit-studio-prod-90ea8
``` |
| **Prevention** | Use a domain name instead of IP. Document URL changes in deploy checklist. Verify `SCAN_WORKER_URL` before every functions deploy. |

---

### Issue: CORS errors from frontend

| | |
|---|---|
| **Symptom** | Browser console shows CORS errors when calling `/api/scan`. |
| **Diagnosis** | `functions/handlers/scan.js` had `Access-Control-Allow-Origin: *` which is insecure, or origin is not whitelisted. |
| **Fix** | Ensure `functions/handlers/scan.js` restricts `Access-Control-Allow-Origin` to Firebase Hosting domains + localhost. Example: ```javascript
const allowedOrigins = [
  'https://audit-studio-prod-90ea8.web.app',
  'https://audit-studio-prod-90ea8.firebaseapp.com',
  'http://localhost:5173',
  'http://localhost:3000'
];
``` |
| **Prevention** | Never use `*` in production. Keep allowed origins list updated when adding custom domains. Test CORS after every functions deploy. |

---

## Frontend / React Issues

### Issue: Page goes blank when scan completes (React Error #130)

| | |
|---|---|
| **Symptom** | Page goes blank when scan completes. Console shows: `Minified React error #130; Element type is invalid: expected a string or class/function but got: undefined`. |
| **Diagnosis** | `ViolationCard` component was defined **AFTER** `export default` statement in `ScanResults.jsx`. When React tried to render `<ViolationCard />`, the component was `undefined` because the export runs before subsequent code. |
| **Fix** | In `src/features/scan/components/ScanResults.jsx`, move `ViolationCard` definition **before** the `export default` statement: ```javascript
// BEFORE (broken):
export default memo(ScanResults, ...)
function ViolationCard({ group, ... }) { ... }  // Defined AFTER export = undefined

// AFTER (fixed):
function ViolationCard({ group, ... }) { ... }  // Defined BEFORE export
export default memo(ScanResults, ...)
``` |
| **Prevention** | Always define helper components **before** the export statement. Use ESLint rules or code review to catch export-order issues. |

---

### Issue: Lazy-loaded pages not rendering

| | |
|---|---|
| **Symptom** | Route changes but page content doesn't appear, or shows infinite loading spinner. |
| **Diagnosis** | `App.jsx` uses `lazy()` for code splitting, but the import path is wrong or the component has a default export mismatch. |
| **Fix** | Verify `App.jsx` lazy imports: ```javascript
const AuditsPage = lazy(() => import('@pages/AuditsPage'))
``` Ensure the target file has a default export: ```javascript
export default function AuditsPage() { ... }
``` |
| **Prevention** | Use consistent default exports for page components. Test all routes after adding new lazy imports. |

---

### Issue: Theme toggle doesn't work

| | |
|---|---|
| **Symptom** | Dark mode toggle has no effect, or page flashes wrong theme on load. |
| **Diagnosis** | `ThemeContext` not wrapping the app, or `index.css` variables are not correctly scoped. |
| **Fix** | Verify `ThemeProvider` wraps the app in `main.jsx`. Check that `index.css` defines variables for both `.light` and `.dark` classes. Ensure `localStorage` preference is read on mount. |
| **Prevention** | Test theme toggle after any global CSS changes. Avoid inline styles that override theme classes. |

---

## Supabase Issues

### Issue: Realtime updates not reaching frontend

| | |
|---|---|
| **Symptom** | Scan completes but frontend doesn't auto-update. Must refresh page to see results. |
| **Diagnosis** | Supabase Realtime subscription is not established, or the `scan_jobs` table doesn't have Realtime enabled. |
| **Fix** | 1. Check `useScanRunner.js` subscribes to `scan_jobs` changes. 2. In Supabase dashboard → Database → Realtime, ensure `scan_jobs` is enabled. 3. Verify `SUPABASE_ANON_KEY` is correct in frontend `.env`. |
| **Prevention** | Document Realtime-enabled tables. Test Realtime after any Supabase schema migration. |

---

### Issue: Row-Level Security (RLS) blocking reads/writes

| | |
|---|---|
| **Symptom** | Frontend sees empty data, or server-side writes fail with "new row violates row-level security policy". |
| **Diagnosis** | Supabase RLS policies are too restrictive, or the client is using `anon` key instead of `service_role` key server-side. |
| **Fix** | For server-side operations (Firebase Functions, GCE worker), use `SUPABASE_SERVICE_ROLE_KEY` which bypasses RLS. For frontend, ensure RLS policies allow the authenticated user's `user_id` to match `auth.uid()`. |
| **Prevention** | Use `SUPABASE_SERVICE_ROLE_KEY` only server-side. Never expose it in frontend code. Review RLS policies after schema changes. |

---

### Issue: scan_results missing screenshot URL

| | |
|---|---|
| **Symptom** | Scan results appear but screenshot is missing or broken image. |
| **Diagnosis** | `screenshotUrl` is not included in all result-building paths in `useScanRunner.js`, or screenshot upload failed in worker. |
| **Fix** | Ensure `useScanRunner.js` all three result-building paths include `screenshot: summary.screenshotUrl`. Verify worker uploads screenshot BEFORE inserting `scan_results`, and stores URL in `summary.screenshotUrl`. |
| **Prevention** | Test screenshot upload for every scan type (page, component, flow). Add screenshot validation in end-to-end tests. |

---

## Deployment Issues

### Issue: `.env` variables leaked into git

| | |
|---|---|
| **Symptom** | Secrets (API keys, tokens) appear in git history. |
| **Diagnosis** | `.env` file was accidentally committed before `.gitignore` was properly configured. |
| **Fix** | 1. Remove `.env` from tracking: ```bash
git rm --cached .env
git commit -m "Remove .env from tracking"
``` 2. Harden `.gitignore`: ```bash
echo ".env" >> .gitignore
``` 3. **Purge from git history** with `git filter-repo` or BFG before pushing to any shared/public remote: ```bash
git filter-repo --path .env --invert-paths
``` 4. Rotate all leaked secrets immediately. |
| **Prevention** | Create `.gitignore` before adding any env files. Use `git status` to verify no secrets are staged. Run secret scanning (e.g., GitHub secret scanning) if pushing to remote. |

---

### Issue: Dead artifacts from old platforms

| | |
|---|---|
| **Symptom** | Confusing imports, broken references, or build errors from old Vercel/Railway files. |
| **Diagnosis** | Old `api/` directory (Vercel serverless functions) or old config files still exist in repo. |
| **Fix** | Remove dead artifacts: ```bash
rm -rf api/  # Old Vercel serverless functions — superseded by functions/
rm -f vercel.json  # If no longer needed
``` Also moved `src/components/user-profile/ProfilePageHeader.jsx` → `src/features/auth/components/` and removed `src/components/user-profile/`. |
| **Prevention** | Clean up old platform artifacts immediately after migration. Use a "migration checklist" to track file moves and deletions. |

---

### Issue: Firebase Hosting rewrite conflicts

| | |
|---|---|
| **Symptom** | `/api/scan` returns 404 or serves the React app instead of hitting the function. |
| **Diagnosis** | `firebase.json` rewrites are misconfigured, or the function name doesn't match the rewrite pattern. |
| **Fix** | Verify `firebase.json`: ```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "/api/**",
        "function": "api"
      }
    ]
  }
}
``` Ensure the function `api` exists and exports `scan` and `favicon` handlers. |
| **Prevention** | Test all API routes after any `firebase.json` change. Use `firebase deploy --only hosting,functions` together to keep rewrites in sync. |

---

## Chrome / Playwright Issues

### Issue: Chrome GPU process hangs

| | |
|---|---|
| **Symptom** | `browserType.launch: Timeout 60000ms exceeded` on Cloud Run. Scans never start. |
| **Diagnosis** | Cloud Run's security sandbox blocks system calls Chrome needs (`/proc/sys/fs/inotify`, NETLINK sockets, D-Bus). Chrome's GPU process tries to initialise sandbox with multiple threads → hangs. |
| **Fix** | **Migrate to GCE.** All flags (`--disable-gpu`, `--disable-software-rasterizer`, `--no-zygote`, etc.) are insufficient on Cloud Run. See DEPLOYMENT.md § Cloud Run Incompatibility. |
| **Prevention** | Don't attempt to run Chrome in restricted sandbox environments (Cloud Run, AWS Lambda). Use GCE, GKE, or dedicated VM for browser automation. |

---

### Issue: Navigation crashes the scan

| | |
|---|---|
| **Symptom** | Scan fails immediately on `page.goto()`. Worker crashes and restarts. |
| **Diagnosis** | `page.goto()` error is not caught, causing the entire Node.js process to exit. |
| **Fix** | Add `.catch()` to navigation so `goto` failures don't crash the scan: ```javascript
await page.goto(url, { timeout: 60000 }).catch(e => {
  console.error('Navigation failed:', e.message);
  // Mark job as error in Supabase
});
``` |
| **Prevention** | Always wrap `page.goto()` in try/catch or `.catch()`. Handle all Playwright errors gracefully. |

---

### Issue: Bot detection blocks scanner

| | |
|---|---|
| **Symptom** | Scan completes but shows 0 violations on sites with known issues, or returns a Cloudflare challenge page. |
| **Diagnosis** | Stealth plugin is disabled, or `blockHeavyResources()` is breaking site detection. |
| **Fix** | 1. Ensure stealth is enabled: ```javascript
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
chromium.use(StealthPlugin())
``` 2. Do NOT use `blockHeavyResources()` — it breaks sites that detect missing assets. |
| **Prevention** | Always use stealth on GCE. Test scans against Cloudflare-protected sites after any worker code changes. |

---

### Issue: Chrome zombie processes accumulate

| | |
|---|---|
| **Symptom** | VM memory usage slowly increases over days. Eventually scans fail or container restarts. |
| **Diagnosis** | Chrome processes are not fully cleaned up after scan timeouts or crashes, causing a slow memory leak. |
| **Fix** | Kill zombie Chrome processes: ```bash
sudo docker exec scan-worker pkill -9 chrome || true
``` Or restart the container: ```bash
sudo docker restart scan-worker
``` |
| **Prevention** | Schedule monthly VM/container restarts during low-traffic periods. Implement a cron job inside the container to kill stale Chrome processes. Future: move to queue-based architecture with process isolation. |

---

## General Debugging Commands

### Firebase Functions
```bash
# View function logs
firebase functions:log --project audit-studio-prod-90ea8

# List deployed functions
firebase functions:list --project audit-studio-prod-90ea8
```

### GCE VM
```bash
# Check VM status
gcloud compute instances list --project=audit-studio-prod-90ea8

# SSH to VM
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8

# Check VM memory
free -h

# Check disk space
df -h
```

### Docker
```bash
# Check container status
sudo docker ps

# View logs
sudo docker logs scan-worker --tail 50

# Follow logs
sudo docker logs scan-worker -f

# Restart container
sudo docker restart scan-worker

# Kill zombie Chrome
sudo docker exec scan-worker pkill -9 chrome || true

# Container stats
sudo docker stats --no-stream

# Execute shell inside container
sudo docker exec -it scan-worker /bin/bash
```

### Caddy
```bash
# Check Caddy status
sudo systemctl status caddy

# View Caddy logs
sudo journalctl -u caddy --no-pager -n 20

# Reload config
sudo systemctl reload caddy

# Test config
sudo caddy validate --config /etc/caddy/Caddyfile
```

### Network
```bash
# Test health endpoint
curl -I https://worker.incluria.com/health
# Or directly:
curl -I http://35.226.21.209:3001/health

# Check DNS propagation
dig worker.incluria.com +short

# Check firewall rules
gcloud compute firewall-rules list --project=audit-studio-prod-90ea8

# Trace route
traceroute worker.incluria.com
```

### Supabase
```bash
# Test Supabase connection from VM
curl -I https://vgifjzxnjwieqgltuviv.supabase.co/rest/v1/

# Check Realtime status (via Supabase dashboard)
# Database → Realtime → verify scan_jobs is enabled
```

### Git / Secrets
```bash
# Check if .env is tracked
git ls-files | grep .env

# Check git history for secrets
git log --all --full-history -- .env

# Purge .env from history
git filter-repo --path .env --invert-paths
```
