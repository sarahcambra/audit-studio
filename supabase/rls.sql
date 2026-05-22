-- ============================================================
-- Row Level Security — auditV2
-- Paste this entire file into Supabase SQL Editor and run it.
-- ============================================================

-- ── profiles ────────────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- ── audits ──────────────────────────────────────────────────
ALTER TABLE public.audits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own audits"
  ON public.audits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own audits"
  ON public.audits FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own audits"
  ON public.audits FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own audits"
  ON public.audits FOR DELETE
  USING (auth.uid() = user_id);

-- ── scan_jobs ───────────────────────────────────────────────
ALTER TABLE public.scan_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own scan jobs"
  ON public.scan_jobs FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = scan_jobs.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own scan jobs"
  ON public.scan_jobs FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = scan_jobs.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can update own scan jobs"
  ON public.scan_jobs FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = scan_jobs.audit_id
      AND audits.user_id = auth.uid()
  ));

-- ── scan_results ────────────────────────────────────────────
ALTER TABLE public.scan_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own scan results"
  ON public.scan_results FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.scan_jobs
    JOIN public.audits ON audits.id = scan_jobs.audit_id
    WHERE scan_jobs.id = scan_results.job_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own scan results"
  ON public.scan_results FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.scan_jobs
    JOIN public.audits ON audits.id = scan_jobs.audit_id
    WHERE scan_jobs.id = scan_results.job_id
      AND audits.user_id = auth.uid()
  ));

-- ── screenshots ─────────────────────────────────────────────
ALTER TABLE public.screenshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own screenshots"
  ON public.screenshots FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.scan_jobs
    JOIN public.audits ON audits.id = scan_jobs.audit_id
    WHERE scan_jobs.id = screenshots.job_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own screenshots"
  ON public.screenshots FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.scan_jobs
    JOIN public.audits ON audits.id = scan_jobs.audit_id
    WHERE scan_jobs.id = screenshots.job_id
      AND audits.user_id = auth.uid()
  ));

-- ── triage_items ────────────────────────────────────────────
ALTER TABLE public.triage_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own triage items"
  ON public.triage_items FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = triage_items.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own triage items"
  ON public.triage_items FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = triage_items.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can update own triage items"
  ON public.triage_items FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = triage_items.audit_id
      AND audits.user_id = auth.uid()
  ));

-- ── manual_checks ───────────────────────────────────────────
ALTER TABLE public.manual_checks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own manual checks"
  ON public.manual_checks FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = manual_checks.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own manual checks"
  ON public.manual_checks FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = manual_checks.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can update own manual checks"
  ON public.manual_checks FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = manual_checks.audit_id
      AND audits.user_id = auth.uid()
  ));

-- ── kb_overrides ────────────────────────────────────────────
ALTER TABLE public.kb_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own KB overrides"
  ON public.kb_overrides FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own KB overrides"
  ON public.kb_overrides FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own KB overrides"
  ON public.kb_overrides FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own KB overrides"
  ON public.kb_overrides FOR DELETE
  USING (auth.uid() = user_id);

-- ── catalog_items ───────────────────────────────────────────
ALTER TABLE public.catalog_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own and global catalog items"
  ON public.catalog_items FOR SELECT
  USING (auth.uid() = user_id OR is_global = true);

CREATE POLICY "Users can insert own catalog items"
  ON public.catalog_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own catalog items"
  ON public.catalog_items FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own catalog items"
  ON public.catalog_items FOR DELETE
  USING (auth.uid() = user_id);

-- ── reports ─────────────────────────────────────────────────
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own reports"
  ON public.reports FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own reports"
  ON public.reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ── audit_activity_log ──────────────────────────────────────
ALTER TABLE public.audit_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own activity log"
  ON public.audit_activity_log FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = audit_activity_log.audit_id
      AND audits.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own activity log"
  ON public.audit_activity_log FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.audits
    WHERE audits.id = audit_activity_log.audit_id
      AND audits.user_id = auth.uid()
  ));

-- ── Storage bucket policies ─────────────────────────────────
-- Run these separately in Supabase Dashboard → Storage → Policies
-- if the SQL editor doesn't support storage policies directly.

-- Screenshots bucket: users can only access their own files
-- (files are stored under {job_id}/... — enforce via RLS on screenshots table above)
-- In the Supabase dashboard, set the "screenshots" bucket to: Private
-- Then add these storage policies:

/*
CREATE POLICY "Authenticated users can upload screenshots"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'screenshots' AND auth.role() = 'authenticated');

CREATE POLICY "Users can read own screenshots"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'screenshots' AND auth.uid()::text = (storage.foldername(name))[1]);
*/

-- ── Auto-create profile on sign-up ─────────────────────────
-- This trigger creates a profile row whenever a new user signs up via Supabase Auth.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
