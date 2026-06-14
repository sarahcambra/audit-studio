-- Add page_language column to scan_jobs table
-- This stores the HTML lang attribute detected during the scan

ALTER TABLE public.scan_jobs
  ADD COLUMN page_language text;

-- Optional: add comment for documentation
COMMENT ON COLUMN public.scan_jobs.page_language IS 'HTML lang attribute of the scanned page (e.g. "sv", "en")';

-- Verify the column was added
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'scan_jobs'
ORDER BY ordinal_position;
