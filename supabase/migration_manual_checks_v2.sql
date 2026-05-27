-- ============================================================
-- Manual Checks — schema enhancement
-- Run in Supabase SQL Editor.
--
-- Adds the columns and constraints needed for SC-level
-- manual testing workflow seeded from scan results.
-- ============================================================

-- ── New columns ───────────────────────────────────────────────

-- SC display name (stored at insert time so the UI doesn't need a lookup)
ALTER TABLE public.manual_checks
  ADD COLUMN IF NOT EXISTS sc_name        text;

-- Auditor-set final verdict
-- null = untriaged (auditor hasn't decided yet)
ALTER TABLE public.manual_checks
  ADD COLUMN IF NOT EXISTS verdict        text
  CHECK (verdict IN ('pass', 'fail', 'na', 'deferred') OR verdict IS NULL);

-- Free-text notes from the auditor
ALTER TABLE public.manual_checks
  ADD COLUMN IF NOT EXISTS auditor_notes  text;

-- Axe-derived status (set automatically when scan completes)
-- 'fail'          → axe found violations mapped to this SC
-- 'needs-check'   → axe found incomplete items for this SC
-- 'na'            → axe said this SC was inapplicable (no relevant elements)
-- 'pass'          → axe tested this SC and found no violations
-- 'always-manual' → axe cannot test this SC at all
ALTER TABLE public.manual_checks
  ADD COLUMN IF NOT EXISTS auto_status    text
  CHECK (auto_status IN ('fail', 'needs-check', 'na', 'pass', 'always-manual') OR auto_status IS NULL);

-- Snapshot of triage evidence counts for this SC
-- { confirmed: N, not_failure: N, manual_check: N, deferred: N, untriaged: N }
ALTER TABLE public.manual_checks
  ADD COLUMN IF NOT EXISTS evidence_json  jsonb DEFAULT '{}'::jsonb;

-- ── Unique constraint ─────────────────────────────────────────
-- One manual-check row per SC per audit. Upsert uses this.
ALTER TABLE public.manual_checks
  DROP CONSTRAINT IF EXISTS manual_checks_audit_id_sc_id_key;

ALTER TABLE public.manual_checks
  ADD CONSTRAINT manual_checks_audit_id_sc_id_key
    UNIQUE (audit_id, sc_id);

-- ── Source column: extend allowed values ─────────────────────
-- Previous default was 'sc'. Now we distinguish source type.
-- Drop any old check constraint and add a permissive one.
ALTER TABLE public.manual_checks
  DROP CONSTRAINT IF EXISTS manual_checks_source_check;

ALTER TABLE public.manual_checks
  ADD CONSTRAINT manual_checks_source_check
    CHECK (source IN (
      'sc',             -- created manually from scope
      'axe-violations', -- seeded from violation groups
      'axe-incomplete', -- seeded from incomplete items
      'axe-na',         -- seeded from inapplicable items
      'always-manual',  -- SC axe cannot test
      'mixed'           -- multiple sources for this SC
    ) OR source IS NULL);
