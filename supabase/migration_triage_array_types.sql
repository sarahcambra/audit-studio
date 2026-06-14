-- ============================================================
-- Migration: Fix triage_items array column types
-- ============================================================
-- The original migration used bare ARRAY (no element type).
-- Postgres defaults this to text[] but the schema dump shows
-- just ARRAY, which is ambiguous and can cause type-mismatch
-- errors when inserting via postgrest-js.
--
-- This migration explicitly sets both columns to text[].
--
-- Run in: Supabase Dashboard → SQL Editor
-- Safe to re-run: USING cast is idempotent for text[].
-- ============================================================

ALTER TABLE public.triage_items
  ALTER COLUMN tags  TYPE text[] USING tags::text[],
  ALTER COLUMN sc_ids TYPE text[] USING sc_ids::text[];
