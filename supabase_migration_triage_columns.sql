-- Migration: Add scan-derived columns to triage_items
-- Run this in Supabase SQL Editor before the next deployment.
-- Safe to run multiple times (IF NOT EXISTS guards).

ALTER TABLE triage_items
  ADD COLUMN IF NOT EXISTS impact          text,
  ADD COLUMN IF NOT EXISTS page_name       text,
  ADD COLUMN IF NOT EXISTS selector        text,
  ADD COLUMN IF NOT EXISTS tags            text[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS wcag_sc         text,
  ADD COLUMN IF NOT EXISTS sc_ids          text[]  DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS node_count      integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS element_snippet text;

-- Index for common filter queries
CREATE INDEX IF NOT EXISTS triage_items_audit_impact_idx
  ON triage_items (audit_id, impact);

CREATE INDEX IF NOT EXISTS triage_items_audit_decision_idx
  ON triage_items (audit_id, decision);
