# Scan Worker

Standalone Express server that runs Playwright + axe-core with no timeout constraint.
Deployed separately from Vercel so long scans never hit the 60-second limit.

## How it works

```
Frontend → POST /api/scan (Vercel)
              ↓ creates scan_job in Supabase
              ↓ fires POST /scan to this worker (no await)
              ↓ returns { jobId } immediately

Worker → receives job → runs Playwright + axe → writes results to Supabase
Frontend → polls Supabase every 3s until job.status === 'complete'
```

## Deploy to Railway (recommended — free tier, no sleep on Hobby)

1. Go to [railway.app](https://railway.app) and create a new project
2. Connect your GitHub repo
3. Set **Root Directory** to `scan-worker`
4. Set **Start Command** to `npm start`
5. Add environment variables (see below)
6. Deploy — Railway gives you a URL like `https://your-app.railway.app`

## Deploy to Fly.io (free — stays awake)

```bash
cd scan-worker
fly launch --name audit-scan-worker
fly secrets set SUPABASE_URL=... SUPABASE_SERVICE_KEY=... WORKER_SECRET=...
fly deploy
```

## Environment variables

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Your Supabase project URL (same as `VITE_SUPABASE_URL`) |
| `SUPABASE_SERVICE_KEY` | Supabase service role key (same as `SUPABASE_SERVICE_ROLE_KEY`) |
| `WORKER_SECRET` | Any random string — must match `SCAN_WORKER_SECRET` in Vercel |
| `PORT` | Port to listen on (Railway/Fly set this automatically) |

## Vercel environment variables to add

After deploying the worker, add these to your Vercel project settings:

| Variable | Value |
|---|---|
| `SCAN_WORKER_URL` | Your worker URL, e.g. `https://audit-scan-worker.railway.app` |
| `SCAN_WORKER_SECRET` | Same random string as `WORKER_SECRET` above |

## Generating a secret

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Local development

```bash
cd scan-worker
npm install
SUPABASE_URL=... SUPABASE_SERVICE_KEY=... WORKER_SECRET=mysecret node index.js
```

Then set `SCAN_WORKER_URL=http://localhost:3001` and `SCAN_WORKER_SECRET=mysecret`
in your `.env.local` for the Vite dev server.

## Health check

```
GET https://your-worker.railway.app/health
→ { "status": "ok" }
```
