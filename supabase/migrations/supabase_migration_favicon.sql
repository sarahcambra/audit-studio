-- Add favicon_url column to audits table
ALTER TABLE audits
  ADD COLUMN IF NOT EXISTS favicon_url text;
