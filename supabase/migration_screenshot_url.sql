-- ============================================================
-- Migration: add screenshot_url column to triage_items
-- ============================================================
-- scan-worker/index.js writes triage_items.screenshot_url after
-- uploading a screenshot to Supabase Storage. This column was
-- referenced in code but never added via a migration file.
--
-- Safe to run multiple times (IF NOT EXISTS).
-- Run in: Supabase Dashboard → SQL Editor
-- ============================================================

ALTER TABLE public.triage_items
  ADD COLUMN IF NOT EXISTS screenshot_url text;
