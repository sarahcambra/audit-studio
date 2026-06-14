-- ============================================================
-- Migration: Add UNIQUE constraint to kb_overrides(user_id, rule_id)
-- ============================================================
-- saveKbOverride() in src/lib/db/kb.js calls:
--   .upsert(..., { onConflict: 'user_id,rule_id' })
-- Without this constraint, every upsert silently fails with a
-- "no unique constraint matching ON CONFLICT" Postgres error.
--
-- Run in: Supabase Dashboard → SQL Editor
-- Safe to re-run: ADD CONSTRAINT IF NOT EXISTS
-- ============================================================

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'kb_overrides_user_rule_key'
      AND conrelid = 'public.kb_overrides'::regclass
  ) THEN
    ALTER TABLE public.kb_overrides
      ADD CONSTRAINT kb_overrides_user_rule_key UNIQUE (user_id, rule_id);
  END IF;
END $$;
