# Migration: Vercel + Railway → GCP (Firebase + Cloud Run)

## Architecture after migration

| Layer | Before | After |
|---|---|---|
| Frontend hosting | Vercel | Firebase Hosting |
| API functions | Vercel serverless | Firebase Cloud Functions v2 |
| Scan worker | Railway | Cloud Run |
| Database / Auth | Supabase | Supabase (unchanged) |
| Storage | Supabase | Supabase (unchanged) |

---

## Prerequisites

Install the tools you'll need:

```bash
# Google Cloud CLI
brew install google-cloud-sdk

# Firebase CLI
npm install -g firebase-tools

# Log in
gcloud auth login
firebase login
```

---

## Step 1 — Create a GCP project

```bash
gcloud projects create audit-studio-prod --name="Audit Studio"
gcloud config set project audit-studio-prod

# Link billing (required for Cloud Run + Functions)
# Go to: https://console.cloud.google.com/billing
# Link your account to audit-studio-prod

# Enable required APIs
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  cloudfunctions.googleapis.com \
  firebase.googleapis.com
```

Then go to https://console.firebase.google.com → Add project → select `audit-studio-prod`.

---

## Step 2 — Update .firebaserc

Edit `.firebaserc` and replace `YOUR_GCP_PROJECT_ID` with `audit-studio-prod` (or whatever you named it).

---

## Step 3 — Deploy the scan worker to Cloud Run

### Build and push the container

```bash
cd scan-worker

# Build with Cloud Build (no Docker needed locally)
gcloud builds submit \
  --tag gcr.io/audit-studio-prod/scan-worker \
  .
```

### Deploy to Cloud Run

```bash
gcloud run deploy scan-worker \
  --image gcr.io/audit-studio-prod/scan-worker \
  --platform managed \
  --region us-central1 \
  --memory 2Gi \
  --cpu 2 \
  --concurrency 1 \
  --min-instances 0 \
  --max-instances 1 \
  --timeout 600 \
  --allow-unauthenticated \
  --set-env-vars "SUPABASE_URL=https://YOUR_PROJECT.supabase.co" \
  --set-env-vars "SUPABASE_SERVICE_KEY=YOUR_SERVICE_ROLE_KEY" \
  --set-env-vars "WORKER_SECRET=YOUR_WORKER_SECRET"
```

> **Important:** Generate a strong WORKER_SECRET, e.g. `openssl rand -hex 32`

After deploy, Cloud Run will print the worker URL:
```
Service URL: https://scan-worker-XXXXXXXX-uc.a.run.app
```
Save this — you'll need it in Step 5.

---

## Step 4 — Set Firebase Functions environment variables

```bash
cd ..  # back to project root

# Install functions dependencies first
cd functions && npm install && cd ..

# Set env vars for the functions (these become process.env.* at runtime)
firebase functions:config:set \
  supabase.url="https://YOUR_PROJECT.supabase.co" \
  supabase.service_role_key="YOUR_SERVICE_ROLE_KEY" \
  scan.worker_url="https://scan-worker-XXXXXXXX-uc.a.run.app" \
  scan.worker_secret="YOUR_WORKER_SECRET"
```

> **Note:** Firebase Functions v2 reads from `process.env` directly. The config above sets
> the runtime env vars that map to:
> - `SUPABASE_URL`
> - `SUPABASE_SERVICE_ROLE_KEY`
> - `SCAN_WORKER_URL`
> - `SCAN_WORKER_SECRET`
>
> If using Firebase Functions v2 with `.env` files instead, create `functions/.env`:
> ```
> SUPABASE_URL=https://YOUR_PROJECT.supabase.co
> SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
> SCAN_WORKER_URL=https://scan-worker-XXXXXXXX-uc.a.run.app
> SCAN_WORKER_SECRET=YOUR_WORKER_SECRET
> ```
> (Do not commit this file — add `functions/.env` to `.gitignore`)

---

## Step 5 — Build the frontend

```bash
# In the project root
npm run build
```

This produces `dist/` which Firebase Hosting will serve.

---

## Step 6 — Deploy everything

```bash
firebase deploy
```

This deploys:
- `functions/` → Firebase Cloud Functions (`scan` and `favicon`)
- `dist/` → Firebase Hosting

After deploy you'll get a hosting URL like `https://audit-studio-prod.web.app`.

---

## Step 7 — Verify

1. Open `https://audit-studio-prod.web.app`
2. Sign in
3. Run a scan — check Railway logs → should now be Cloud Run logs:
   ```bash
   gcloud run services logs read scan-worker --region us-central1 --limit 50
   ```
4. Confirm screenshot appears in scan results

---

## Step 8 — Tear down old services

Once confirmed working:

```bash
# Cancel Railway subscription (Dashboard → Settings → Delete service)
# Remove Vercel project (Dashboard → Settings → Delete project)
```

---

## Cost estimate (GCP $300 credit)

| Service | Est. monthly cost |
|---|---|
| Cloud Run (scan worker, min=0) | ~$0–5 (billed per request) |
| Firebase Hosting | Free tier (10 GB/month) |
| Firebase Functions | Free tier (2M invocations/month) |
| Supabase | Unchanged |

The $300 credit covers ~1–2 years at this usage level.

---

## Env var reference

### Cloud Run (scan-worker)
| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Service role key |
| `WORKER_SECRET` | Shared bearer token (must match Functions) |
| `PORT` | Auto-set by Cloud Run (default 3001) |

### Firebase Cloud Functions
| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key |
| `SCAN_WORKER_URL` | Cloud Run worker URL |
| `SCAN_WORKER_SECRET` | Shared bearer token (must match worker) |

### Frontend (.env / Vite build)
| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL (public) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key (public) |

These are baked into the build — they stay the same as before.
