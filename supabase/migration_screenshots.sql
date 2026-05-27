-- ============================================================
-- migration_screenshots.sql
-- Adds screenshot_url to triage_items so each violation row
-- can reference the full-page scan screenshot stored in
-- Supabase Storage (bucket: screenshots).
--
-- Run in Supabase SQL Editor.
-- ============================================================

-- 1. Add screenshot_url column to triage_items (nullable)
ALTER TABLE public.triage_items
  ADD COLUMN IF NOT EXISTS screenshot_url text;

-- 2. Create the screenshots storage bucket (idempotent via insert ignore)
--    public = true so the signed URL returned by getPublicUrl works without auth.
INSERT INTO storage.buckets (id, name, public)
VALUES ('screenshots', 'screenshots', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Storage RLS policies — allow the service role to upload,
--    and anyone to read (the bucket is public so anon reads work automatically,
--    but we add an explicit policy for authenticated users too).

DROP POLICY IF EXISTS "Authenticated users can upload screenshots" ON storage.objects;
CREATE POLICY "Authenticated users can upload screenshots"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'screenshots');

DROP POLICY IF EXISTS "Public read of screenshots" ON storage.objects;
CREATE POLICY "Public read of screenshots"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'screenshots');

DROP POLICY IF EXISTS "Authenticated users can update screenshots" ON storage.objects;
CREATE POLICY "Authenticated users can update screenshots"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'screenshots');
