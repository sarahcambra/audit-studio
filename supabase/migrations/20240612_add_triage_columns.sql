-- ============================================================
-- Migration: Add missing triage_items columns + unique constraint
-- Run this in Supabase SQL Editor (or via psql)
--
-- Why: The scan worker inserts enriched triage data that the schema
--      doesn't yet support, causing silent upsert failures.
-- ============================================================

-- 1. Add missing columns that the worker populates
ALTER TABLE public.triage_items
  ADD COLUMN IF NOT EXISTS friendly_description text,
  ADD COLUMN IF NOT EXISTS location_context     text,
  ADD COLUMN IF NOT EXISTS visible_text         text,
  ADD COLUMN IF NOT EXISTS tag_name             text,
  ADD COLUMN IF NOT EXISTS selectors_to_highlight text[];

-- 2. Add unique constraint required for upsert(onConflict: audit_id, group_id)
--    If rows already exist with duplicate (audit_id, group_id) combos,
--    this will fail. In that case, deduplicate first (see note below).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes
    WHERE indexname = 'triage_items_audit_group_unique'
  ) THEN
    CREATE UNIQUE INDEX triage_items_audit_group_unique
      ON public.triage_items (audit_id, group_id);
  END IF;
END
$$;

-- ============================================================
-- NOTE: If the CREATE UNIQUE INDEX fails with "could not create unique index",
-- it means you have duplicate (audit_id, group_id) rows already.
-- Run this deduplication first, then retry the migration:
--
--   WITH dups AS (
--     SELECT id,
--            ROW_NUMBER() OVER (PARTITION BY audit_id, group_id ORDER BY created_at DESC) AS rn
--     FROM public.triage_items
--   )
--   DELETE FROM public.triage_items WHERE id IN (SELECT id FROM dups WHERE rn > 1);
--
-- ============================================================

-- 3. Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'triage_items'
  AND column_name IN (
    'friendly_description', 'location_context', 'visible_text',
    'tag_name', 'selectors_to_highlight'
  )
ORDER BY ordinal_position;
