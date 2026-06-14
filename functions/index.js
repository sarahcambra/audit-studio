/**
 * Firebase Cloud Functions v2 — Audit Studio API
 *
 * Exports:
 *   scan    → POST /api/scan
 *   favicon → GET  /api/favicon
 *
 * Environment variables (set via Firebase CLI or Secret Manager):
 *   SUPABASE_URL             — Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY — Service role key
 *   SCAN_WORKER_URL          — Cloud Run worker URL (e.g. https://scan-worker-xxx.run.app)
 *   SCAN_WORKER_SECRET       — Shared Bearer token
 */

import { onRequest } from 'firebase-functions/v2/https'
import scanHandler             from './handlers/scan.js'
import faviconHandler          from './handlers/favicon.js'
import captureScreenshotHandler from './handlers/captureScreenshot.js'

const REGION = 'us-central1'

export const scan = onRequest(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30, cors: false },
  scanHandler
)

export const favicon = onRequest(
  { region: REGION, memory: '256MiB', timeoutSeconds: 10, cors: true },
  faviconHandler
)

export const captureScreenshot = onRequest(
  { region: REGION, memory: '512MiB', timeoutSeconds: 120, cors: true },
  captureScreenshotHandler
)
