# Deployment Guide

> Source: Consolidated from `CLAUDE.md` (2026-05-28 → 2026-06-14).  
> Last updated: 2026-06-15

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Firebase Hosting Deploy](#firebase-hosting-deploy)
4. [Firebase Functions Deploy](#firebase-functions-deploy)
5. [GCE Worker Deploy](#gce-worker-deploy)
6. [Domain + HTTPS Setup](#domain--https-setup)
7. [End-to-End Verification](#end-to-end-verification)
8. [Historical Context: GCP Migration](#historical-context-gcp-migration)
9. [Historical Context: Cloud Run Incompatibility](#historical-context-cloud-run--chrome-incompatibility)

---

## Prerequisites

### Accounts & Projects
- **GCP Project:** `audit-studio-prod-90ea8`
- **Firebase Project:** Same as GCP (`audit-studio-prod-90ea8`)
- **Supabase Project:** URL `https://vgifjzxnjwieqgltuviv.supabase.co`
- **Domain:** `incluria.com` (purchased via Cloudflare)
- **GCP Credit:** $300 free tier credit covers ~7 months of operation.

### Tools Installed
- `gcloud` CLI (authenticated to `audit-studio-prod-90ea8`)
- `firebase` CLI (authenticated)
- `docker` (for building scan worker locally)
- `node` + `npm`
- `openssl` (for generating secrets)

### Required Files
- `functions/.env` — Firebase Functions runtime env vars (not in git).
- `.env` — Frontend build env vars (not in git).
- `/opt/scan-worker/.env` — GCE worker env vars (on VM, not in git).

---

## Local Development Setup

### 1. Install Dependencies
```bash
cd /Users/sarah/auditV2
npm install
```

### 2. Configure Environment Files

**Frontend (`/.env`):**
```bash
VITE_SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

**Firebase Functions (`functions/.env`):**
```bash
SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
SCAN_WORKER_URL=http://localhost:3001  # Point to local worker for dev
SCAN_WORKER_SECRET=dev-secret  # Use a simple secret for local dev
```

**Scan Worker (`scan-worker/.env` for local testing):**
```bash
SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
WORKER_SECRET=dev-secret
PORT=3001
```

### 3. Start Scan Worker Locally
```bash
cd scan-worker
npm install
node index.js
# Worker runs on http://localhost:3001
```

### 4. Start Frontend Dev Server
```bash
cd /Users/sarah/auditV2
npm run dev
# Usually serves on http://localhost:5173
```

### 5. Emulate Firebase Functions (Optional)
```bash
firebase emulators:start --only functions
```

### 6. Verify Local Setup
- Open `http://localhost:5173`.
- Sign in via Supabase auth.
- Create an audit.
- Trigger a scan — worker should receive request at `http://localhost:3001`.
- Check scan results appear in Supabase Realtime.

---

## Firebase Hosting Deploy

### Build & Deploy
```bash
cd /Users/sarah/auditV2

# 1. Build the frontend
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting --project audit-studio-prod-90ea8
```

### What Gets Deployed
- Vite production build (`dist/`) → Firebase Hosting.
- `firebase.json` configures `/api/*` rewrites to Cloud Functions.
- Hosting URL: `https://audit-studio-prod-90ea8.web.app` (or custom domain if configured).

### Verify Hosting Deploy
```bash
curl -I https://audit-studio-prod-90ea8.web.app
# Expected: HTTP/2 200
```

---

## Firebase Functions Deploy

### Deploy Functions
```bash
cd /Users/sarah/auditV2

# Update SCAN_WORKER_URL in functions/.env if needed
echo "SCAN_WORKER_URL=https://worker.incluria.com" > functions/.env

# Deploy only functions
firebase deploy --only functions --project audit-studio-prod-90ea8
```

### What Gets Deployed
- `functions/index.js` — Firebase Cloud Functions v2 entry point.
- `functions/handlers/scan.js` — Scan job dispatcher.
- `functions/handlers/favicon.js` — Favicon resolver.
- Environment variables from `functions/.env` are set at deploy time.

### Verify Functions Deploy
```bash
# List deployed functions
firebase functions:list --project audit-studio-prod-90ea8

# Test scan function
curl -X POST https://<region>-audit-studio-prod-90ea8.cloudfunctions.net/scan \
  -H "Authorization: Bearer <jwt-token>" \
  -H "Content-Type: application/json" \
  -d '{"auditId":"...","url":"https://example.com"}'
```

---

## GCE Worker Deploy

### Overview
The scan worker runs as a Docker container on a Google Compute Engine VM (`scan-worker-vm`). It uses `playwright-extra` + `stealth` + `axe-core` to perform accessibility scans.

### Current Infrastructure
| Component | Value |
|-----------|-------|
| VM Name | `scan-worker-vm` |
| Zone | `us-central1-a` |
| Machine Type | `e2-medium` (4GB RAM) |
| Static IP | `35.226.21.209` |
| Docker Image | `scan-worker:latest` (built on VM) |
| Base Image | `mcr.microsoft.com/playwright:v1.60.0-noble` |
| Reverse Proxy | Caddy (`worker.incluria.com`) |

### The 5 Critical Fixes (Applied 2026-06-01)
These fixes were required when migrating from Cloud Run to GCE.

| Fix | Issue | Why Critical | Implementation |
|-----|-------|--------------|----------------|
| **#1** | OOM on small instances | Chrome needs 300-600MB, Node needs 200-400MB, heavy pages spike to 800MB+ | Use **e2-medium** (4GB RAM), not e2-small (2GB) |
| **#2** | Pending jobs stuck forever | If VM is down when POST arrives, job stays 'pending' indefinitely | `recoverStaleJobs()` now handles BOTH 'running' AND stale 'pending' jobs older than 5 min |
| **#3** | No HTTPS | Bearer token transmitted in plaintext | **Caddy** auto-provisions Let's Encrypt cert, terminates TLS, proxies to :3001 |
| **#4** | Ephemeral IP | VM restart = new IP = SCAN_WORKER_URL becomes wrong | Reserve **static IP** at VM creation |
| **#5** | Stealth disabled | Bot detection (Cloudflare) blocks scanner, wrong results | **Re-enabled playwright-extra + puppeteer-extra-plugin-stealth** |

### Deployment Steps

#### Step 1: Create VM with Static IP (Fix #4)
```bash
# Reserve static IP first
gcloud compute addresses create scan-worker-ip --region=us-central1 --project=audit-studio-prod-90ea8

# Create e2-medium VM (Fix #1 - 4GB RAM)
gcloud compute instances create scan-worker-vm \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --address=scan-worker-ip \
  --tags=scan-worker \
  --project=audit-studio-prod-90ea8 \
  --metadata startup-script='#!/bin/bash
    apt-get update
    apt-get install -y docker.io caddy
    systemctl enable docker caddy
  '
```

#### Step 2: Configure Firewall
```bash
# Allow HTTP/HTTPS (and optionally port 3001 during initial setup)
gcloud compute firewall-rules create allow-scan-worker \
  --allow tcp:80,tcp:443,tcp:3001 \
  --target-tags=scan-worker \
  --description="Allow HTTP/HTTPS and direct port 3001 to scan worker" \
  --project=audit-studio-prod-90ea8
```

**Important:** Port 3001 must be open for Firebase Function to reach the VM directly **during initial setup**. After domain + HTTPS is configured, restrict to 80/443 only.

#### Step 3: SSH and Setup (Fix #3 - Caddy for HTTPS)
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

# Configure Caddy (auto HTTPS)
sudo tee /etc/caddy/Caddyfile << 'EOF'
{
  email sarahborgesbeu@gmail.com
}

worker.incluria.com {
    reverse_proxy localhost:3001
}
EOF

sudo systemctl reload caddy
```

Caddy will auto-provision a Let's Encrypt certificate on reload. Check status:
```bash
sudo journalctl -u caddy --no-pager -n 20
```

#### Step 4: Create Artifact Registry Repository
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

#### Step 5: Deploy Scan Worker (Build on VM)
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
SUPABASE_SERVICE_ROLE_KEY=<your-full-service-role-key>
WORKER_SECRET=<your-worker-secret>
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

#### Step 6: Update Firebase Functions
```bash
# Get VM external IP (or use domain)
export VM_IP=$(gcloud compute instances describe scan-worker-vm \
  --zone=us-central1-a --project=audit-studio-prod-90ea8 \
  --format='value(networkInterfaces[0].accessConfigs[0].natIP)')

# Update .env to point to VM
echo "SCAN_WORKER_URL=http://${VM_IP}:3001" > functions/.env
# OR after domain setup:
echo "SCAN_WORKER_URL=https://worker.incluria.com" > functions/.env

# Redeploy
cd /Users/sarah/auditV2
firebase deploy --only functions --project audit-studio-prod-90ea8
```

### Alternative: Deploy via Cloud Build + Artifact Registry
```bash
# On local machine — build and push
cd scan-worker
gcloud builds submit --tag gcr.io/audit-studio-prod-90ea8/scan-worker .

# On VM — pull and run
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8

sudo docker pull gcr.io/audit-studio-prod-90ea8/scan-worker:latest

sudo docker run -d \
  --name scan-worker \
  --restart=always \
  -p 3001:3001 \
  -e SUPABASE_URL=https://vgifjzxnjwieqgltuviv.supabase.co \
  -e SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key> \
  -e WORKER_SECRET=<your-worker-secret> \
  -e PORT=3001 \
  gcr.io/audit-studio-prod-90ea8/scan-worker
```

---

## Domain + HTTPS Setup

### Overview
Domain `incluria.com` was purchased via Cloudflare. Subdomain `worker.incluria.com` points to the GCE VM. Caddy handles HTTPS termination with Let's Encrypt.

### Step 1: Cloudflare DNS Record
In Cloudflare dashboard → DNS → Records:

| Type | Name | Content | Proxy status |
|------|------|---------|--------------|
| A | `worker` | `35.226.21.209` | DNS only (grey cloud) |

> **Important:** Keep Proxy Status as **DNS only** (grey cloud) for now. If you later enable Cloudflare proxy (orange cloud), Caddy won't see the real client IP and Let's Encrypt HTTP-01 challenge may fail.

Verify propagation:
```bash
dig worker.incluria.com +short
# expected: 35.226.21.209
```

### Step 2: SSH to VM and Update Caddy
```bash
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
```

Replace Caddyfile:
```bash
sudo tee /etc/caddy/Caddyfile << 'EOF'
{
  email sarahborgesbeu@gmail.com
}

worker.incluria.com {
    reverse_proxy localhost:3001
}
EOF

sudo systemctl reload caddy
```

Caddy will auto-provision a Let's Encrypt certificate on reload. Check status:
```bash
sudo journalctl -u caddy --no-pager -n 20
```

Test HTTPS:
```bash
curl -I https://worker.incluria.com/health
# expected: HTTP/2 200
```

### Step 3: Restrict Firewall (Remove Public Port 3001)
Once HTTPS is confirmed working:
```bash
gcloud compute firewall-rules update allow-scan-worker \
  --allow tcp:80,tcp:443 \
  --source-ranges=0.0.0.0/0 \
  --project=audit-studio-prod-90ea8
```

This removes direct access to port 3001. All traffic must go through Caddy on 80/443.

### Step 4: Redeploy Firebase Functions
Repo already updated (`functions/.env` now points to `https://worker.incluria.com`). Deploy:
```bash
cd /Users/sarah/auditV2
firebase deploy --only functions --project audit-studio-prod-90ea8
```

### Step 5: Rotate WORKER_SECRET (Recommended)
Since the old secret traveled over HTTP, generate a new one:
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

## End-to-End Verification

### 1. Verify VM is Running
```bash
gcloud compute instances list --project=audit-studio-prod-90ea8
# Expected: scan-worker-vm RUNNING
```

### 2. Verify Docker Container
```bash
gcloud compute ssh scan-worker-vm --zone=us-central1-a --project=audit-studio-prod-90ea8
sudo docker ps
# Expected: scan-worker container UP
```

### 3. Verify Health Endpoint
```bash
# From any machine
curl -I https://worker.incluria.com/health
# Expected: HTTP/2 200

# Or directly to VM IP (if 3001 still open)
curl -I http://35.226.21.209:3001/health
# Expected: HTTP/1.1 200 OK
```

### 4. Verify Firebase Functions Route to Worker
```bash
# Test the scan endpoint (requires valid JWT)
curl -X POST https://<region>-audit-studio-prod-90ea8.cloudfunctions.net/scan \
  -H "Authorization: Bearer <valid-jwt>" \
  -H "Content-Type: application/json" \
  -d '{"auditId":"test-audit-id","url":"https://example.com"}'
```

### 5. Run a Full Scan from Frontend
1. Open the app (Firebase Hosting URL or `localhost:5173` for dev).
2. Sign in.
3. Create or open an audit.
4. Enter a URL (e.g., `https://example.com`).
5. Start scan.
6. Expected timeline:
   - Frontend shows "Scanning..." immediately.
   - Worker receives job within 1-2 seconds.
   - Scan completes in ~10-15 seconds for simple pages.
   - Frontend receives Supabase Realtime update (~1s latency).
   - Results appear with violation count, screenshot, and triage items.

### 6. Verify Supabase Realtime
Check that `scan_jobs` table updates:
- `status` goes `pending` → `running` → `complete`.
- `scan_results` row is created with `violations_json`, `summary`, etc.
- `screenshots` rows created if violations found.

### 7. Verify Triage Data
In the app, open Triage tab:
- Expanded rows show full scan-card style panel.
- Title + impact/issue-type badges, SC chips, category chips.
- Element count, fix difficulty, affected users, description.
- Element location, how-to-fix.

### Historical End-to-End Test Results
- **2026-06-01:** `example.com` scanned in 12s, 2 violations found, screenshot uploaded.
- **2026-06-11:** VM recreated, scan verified after re-deployment.

---

## Historical Context: GCP Migration

### Timeline: 2026-05-30
Migrated from Vercel + Railway to Firebase Hosting + Cloud Run.

**What changed:**
- `firebase.json`: Hosting config with `/api/*` rewrites to Cloud Functions.
- `functions/`: Firebase Cloud Functions v2 wrapping `api/scan.js` and `api/favicon.js`.
- `functions/.env`: Runtime env vars for Cloud Functions (not committed to git).
- `scan-worker/Dockerfile`: Uses `mcr.microsoft.com/playwright:v1.60.0-noble` (Cloud Run compatible).
- `scan-worker/.dockerignore`: Optimized build context.
- `MIGRATION_GCP.md`: Full step-by-step deployment guide (legacy file, may still exist).
- Supabase allowed redirect URLs updated to include Firebase Hosting domains.

**Why migrated:**
- Vercel serverless functions had issues with long-running Chrome processes.
- Railway was costly for persistent worker.
- GCP $300 credit + Firebase ecosystem = better fit.

---

## Historical Context: Cloud Run + Chrome Incompatibility

### Problem (2026-06-01)
Cloud Run's security sandbox is incompatible with Chrome's process architecture. Chrome's GPU process initialization hangs indefinitely in Cloud Run's restricted environment, causing all scans to timeout after 60-120 seconds.

### Root Cause
- Cloud Run blocks system calls Chrome needs (`/proc/sys/fs/inotify`, NETLINK sockets, D-Bus).
- Chrome's GPU process tries to initialize sandbox with multiple threads → hangs.
- All flags (`--disable-gpu`, `--disable-software-rasterizer`, `--no-zygote`, etc.) are **insufficient**.

### Solution
Migrated to **Google Compute Engine (GCE)** VM. See § GCE Worker Deploy for full steps.

### Why GCE is the Correct Architecture
Custom checks (`checks/placeholderContrast.js`, `checks/focusVisible.js`) need a **live browser page**:
- Access `::placeholder` pseudo-elements.
- Access computed styles.
- Access focus states.
- Can't run against HTML/JSON from Browserless.
- Would require **complete rewrite** of 17 custom checks.

**Conclusion:** GCE with Docker is the correct architecture for this use case.
