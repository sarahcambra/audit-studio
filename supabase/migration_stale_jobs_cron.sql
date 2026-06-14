-- Migration: pg_cron job to auto-expire stale scan_jobs
-- Run this once in your Supabase SQL editor.
--
-- Requirements: pg_cron extension must be enabled.
-- Enable it in: Supabase Dashboard → Database → Extensions → pg_cron
--
-- What it does: every 5 minutes, marks any scan_job that has been
-- stuck in 'running' for more than 10 minutes as 'error'.
-- This is a safety net for cases where both the scan worker startup
-- cleanup AND the frontend 10-min watchdog miss the failure.

-- Enable pg_cron (idempotent — safe to run if already enabled)
create extension if not exists pg_cron;

-- Remove any existing version of this job before recreating
select cron.unschedule('expire-stale-scan-jobs')
where exists (
  select 1 from cron.job where jobname = 'expire-stale-scan-jobs'
);

-- Schedule: every 5 minutes, expire jobs stuck in 'running' for > 10 minutes
select cron.schedule(
  'expire-stale-scan-jobs',
  '*/5 * * * *',
  $$
    update public.scan_jobs
    set
      status        = 'error',
      error_message = 'Scan was interrupted — the worker may have restarted. Please try again.',
      completed_at  = now()
    where
      status     = 'running'
      and started_at < now() - interval '10 minutes';
  $$
);
