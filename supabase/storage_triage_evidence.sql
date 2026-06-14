-- ============================================================
-- Storage: triage-evidence bucket
-- ============================================================
-- src/lib/db/triage.js uploadEvidenceFile() uploads to the
-- 'triage-evidence' bucket, but this bucket was never provisioned
-- in any migration file.
--
-- Run in: Supabase Dashboard → SQL Editor
-- Safe to re-run: INSERT uses ON CONFLICT DO NOTHING,
-- policies use DROP IF EXISTS + CREATE.
--
-- NOTE: CREATE POLICY IF NOT EXISTS requires PostgreSQL 17+.
-- Supabase runs PG 15/16, so we DROP first then CREATE instead.
-- ============================================================

-- Create the bucket (private — not publicly accessible)
INSERT INTO storage.buckets (id, name, public)
VALUES ('triage-evidence', 'triage-evidence', false)
ON CONFLICT (id) DO NOTHING;

-- ── Upload policy ─────────────────────────────────────────────────────────────
DROP POLICY IF EXISTS "Authenticated users can upload triage evidence"
  ON storage.objects;

CREATE POLICY "Authenticated users can upload triage evidence"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'triage-evidence');

-- ── Read policy (own files only) ──────────────────────────────────────────────
-- Paths are expected to be prefixed with the user's ID:
--   e.g.  {user_id}/audit_{audit_id}/evidence_001.png
DROP POLICY IF EXISTS "Users can read own triage evidence"
  ON storage.objects;

CREATE POLICY "Users can read own triage evidence"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'triage-evidence'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- ── Delete policy (own files only) ────────────────────────────────────────────
DROP POLICY IF EXISTS "Users can delete own triage evidence"
  ON storage.objects;

CREATE POLICY "Users can delete own triage evidence"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'triage-evidence'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );
