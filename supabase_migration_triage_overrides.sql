-- Migration: Add override + evidence columns to triage_items
-- Run this in Supabase SQL Editor → then wire the Save buttons in IssueDetailDrawer

ALTER TABLE triage_items
  ADD COLUMN IF NOT EXISTS overrides_json JSONB DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS evidence_files JSONB DEFAULT '[]'::jsonb;

COMMENT ON COLUMN triage_items.overrides_json IS
  'Auditor overrides for RULE_ENRICHMENTS fields: clientFix, fixDifficulty, badExample, goodExample, affectedUsers';

COMMENT ON COLUMN triage_items.evidence_files IS
  'Array of uploaded evidence file metadata: [{type, url, name, uploadedAt}]';

-- Expose new columns in the audit_summary view if needed:
-- (no action required if audit_summary only selects from audits table)
