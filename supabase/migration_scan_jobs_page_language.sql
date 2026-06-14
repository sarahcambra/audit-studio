-- ============================================================
-- Migration: Add page_language to scan_jobs
-- ============================================================
-- Stores the detected html[lang] attribute value from the
-- scanned page. Relevant to WCAG SC 3.1.1 (Language of Page,
-- Level A). Populated by the scan worker after page load.
--
-- Run in: Supabase Dashboard → SQL Editor
-- Safe to re-run: ADD COLUMN IF NOT EXISTS
-- ============================================================

ALTER TABLE public.scan_jobs
  ADD COLUMN IF NOT EXISTS page_language text;
