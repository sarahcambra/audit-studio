-- Fix: add the unique constraint that scan.js upsert expects.
--
-- Background:
--   Earlier migrations created UNIQUE (audit_id, job_id, group_id) (3-col).
--   migration_triage_fix3 dropped that constraint and used onConflict
--   on (audit_id, group_id) (2-col) — but never created the 2-col constraint.
--   Without a real DB constraint, every scan upsert fails with:
--     "there is no unique or exclusion constraint matching ON CONFLICT"
--   and triage items are silently skipped.

-- Drop old 3-column constraint if it somehow still exists
ALTER TABLE triage_items
  DROP CONSTRAINT IF EXISTS triage_items_audit_job_group_key;

-- Add the 2-column constraint that scan.js onConflict relies on
ALTER TABLE triage_items
  DROP CONSTRAINT IF EXISTS triage_items_audit_group_key;

ALTER TABLE triage_items
  ADD CONSTRAINT triage_items_audit_group_key
  UNIQUE (audit_id, group_id);

-- Verify
SELECT COUNT(*) AS triage_items_count FROM triage_items;
