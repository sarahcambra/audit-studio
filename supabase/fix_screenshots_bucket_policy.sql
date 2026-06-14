-- Fix screenshots bucket to allow public read access
-- Run this in Supabase SQL Editor

-- Make the bucket public
UPDATE storage.buckets
SET public = true
WHERE name = 'screenshots';

-- Create policy for public read access
CREATE POLICY IF NOT EXISTS "Public Access"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'screenshots');

-- Create policy for authenticated uploads
CREATE POLICY IF NOT EXISTS "Authenticated uploads"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'screenshots');
