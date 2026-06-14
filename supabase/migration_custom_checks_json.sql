-- Migration: add custom_checks_json column to scan_results
-- Run in Supabase SQL Editor

ALTER TABLE public.scan_results
  ADD COLUMN IF NOT EXISTS custom_checks_json jsonb DEFAULT '[]'::jsonb;

-- Comment for documentation
COMMENT ON COLUMN public.scan_results.custom_checks_json IS
  'Custom Playwright checks (placeholder contrast, page title, lang, autocomplete, link color, link purpose, etc.) stored as array of finding objects.';
