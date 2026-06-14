-- Add selectors_to_highlight column to triage_items
-- This stores the CSS selectors that need to be highlighted when re-capturing screenshots

ALTER TABLE public.triage_items
ADD COLUMN IF NOT EXISTS selectors_to_highlight text[] DEFAULT NULL;

COMMENT ON COLUMN public.triage_items.selectors_to_highlight IS
  'Array of CSS selectors to highlight when re-capturing screenshots';
