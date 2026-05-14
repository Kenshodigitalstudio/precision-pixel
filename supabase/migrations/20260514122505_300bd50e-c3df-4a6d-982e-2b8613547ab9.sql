create table public.orders (
  id uuid primary key default gen_random_uuid(),
  stripe_session_id text not null unique,
  stripe_payment_intent_id text,
  stripe_customer_id text,
  customer_email text,
  customer_name text,
  price_id text,
  product_id text,
  amount_total integer,
  currency text,
  status text not null default 'completed',
  environment text not null default 'sandbox',
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index idx_orders_email on public.orders(customer_email);
create index idx_orders_created_at on public.orders(created_at desc);

alter table public.orders enable row level security;

-- No public access; only service role (used by webhook) can read/write.
create policy "Service role manages orders"
  on public.orders for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');