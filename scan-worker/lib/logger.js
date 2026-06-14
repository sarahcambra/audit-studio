/**
 * scan-worker/lib/logger.js — FIX (#14): structured logging
 * -----------------------------------------------------------
 * Drop-in replacement for scattered console.log/error calls. Emits one JSON
 * object per line, which Google Cloud Logging (and most log aggregators) parse
 * natively into queryable fields — so you can filter by level, jobId, or url
 * instead of grepping free-text. `severity` is the field Cloud Logging reads.
 *
 * Usage:
 *   import { log } from './lib/logger.js'
 *   log.info('scan started', { jobId, url })
 *   log.error('scan failed', { jobId, err: err.message })
 *   const t = log.timer('scan'); ...; t.end({ jobId })   // logs durationMs
 *
 * Integration (do this incrementally — no rush):
 *   replace `console.log('[scan] X', a)` → `log.info('X', { a })`
 *   replace `console.error('[worker] Y', e)` → `log.error('Y', { err: e.message })`
 */
const LEVELS = { debug: 10, info: 20, warn: 30, error: 40 }
const MIN = LEVELS[process.env.LOG_LEVEL] ?? LEVELS.info
const SEVERITY = { debug: 'DEBUG', info: 'INFO', warn: 'WARNING', error: 'ERROR' }

function emit(level, msg, fields = {}) {
  if (LEVELS[level] < MIN) return
  const line = {
    severity: SEVERITY[level],
    time: new Date().toISOString(),
    msg,
    ...fields,
  }
  const out = level === 'error' || level === 'warn' ? process.stderr : process.stdout
  out.write(JSON.stringify(line) + '\n')
}

export const log = {
  debug: (msg, f) => emit('debug', msg, f),
  info:  (msg, f) => emit('info', msg, f),
  warn:  (msg, f) => emit('warn', msg, f),
  error: (msg, f) => emit('error', msg, f),
  /** Start a duration timer; call .end(extraFields) to log elapsed ms. */
  timer(msg) {
    const start = Date.now()
    return {
      end: (fields = {}) => emit('info', `${msg} done`, { ...fields, durationMs: Date.now() - start }),
    }
  },
}

export default log
