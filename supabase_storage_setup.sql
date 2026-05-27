-- Setup: Create triage-evidence storage bucket for file uploads
-- Run this in Supabase SQL Editor AFTER the triage_overrides migration

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'triage-evidence',
  'triage-evidence',
  false,
  52428800,  -- 50MB limit per file
  ARRAY['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm']
)
ON CONFLICT (id) DO NOTHING;

-- RLS policy: drop existing policies first to avoid conflicts, then recreate
DROP POLICY IF EXISTS "Users can upload evidence for their audits" ON storage.objects;
DROP POLICY IF EXISTS "Users can view their own evidence" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own evidence" ON storage.objects;

CREATE POLICY "Users can upload evidence for their audits"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'triage-evidence');

CREATE POLICY "Users can view their own evidence"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'triage-evidence');

CREATE POLICY "Users can delete their own evidence"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'triage-evidence');
