DROP POLICY IF EXISTS "Service role manages orders" ON public.orders;
REVOKE ALL ON public.orders FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.orders TO service_role;
CREATE POLICY "Service role manages orders" ON public.orders AS RESTRICTIVE FOR ALL TO public USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');