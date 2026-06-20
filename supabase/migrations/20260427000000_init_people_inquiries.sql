-- Initial schema for contact pipeline
-- Two tables: people (the human) + inquiries (each message they send)
-- RLS locked down. All writes go through the server-side API using the service role.
-- 2026-04-27

create extension if not exists "pgcrypto";

-- ============================================================================
-- people: one row per human, deduped by email
-- ============================================================================
create table if not exists public.people (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  email text not null unique,
  name text not null,
  phone text,
  source text not null default 'contact-form',
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists people_email_idx on public.people (lower(email));
create index if not exists people_created_at_idx on public.people (created_at desc);

-- ============================================================================
-- inquiries: one row per message, linked to a person
-- ============================================================================
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  person_id uuid not null references public.people(id) on delete cascade,
  subject text,
  message text not null,
  source text not null default 'contact-form',
  status text not null default 'new' check (status in ('new','reading','replied','closed')),
  replied_at timestamptz
);

create index if not exists inquiries_person_id_idx on public.inquiries (person_id);
create index if not exists inquiries_status_idx on public.inquiries (status);
create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);

-- ============================================================================
-- updated_at trigger on people (only people gets updated; inquiries is append-only on writes)
-- ============================================================================
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists people_updated_at on public.people;
create trigger people_updated_at
  before update on public.people
  for each row execute function public.touch_updated_at();

-- ============================================================================
-- RLS: lock both tables. No anon or authenticated policies.
-- The service role (server-only) bypasses RLS by design.
-- ============================================================================
alter table public.people enable row level security;
alter table public.inquiries enable row level security;

-- ============================================================================
-- Backfill from legacy contact_submissions if present
-- Idempotent: re-running the migration will not duplicate rows.
-- ============================================================================
do $$
declare
  has_old_table boolean;
begin
  select exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_name = 'contact_submissions'
  ) into has_old_table;

  if has_old_table then
    -- People: dedupe by email, take the earliest record per email
    insert into public.people (email, name, source, created_at)
    select distinct on (lower(email))
      lower(email) as email,
      coalesce(name, 'Unknown') as name,
      'contact-form-legacy' as source,
      coalesce(created_at, now()) as created_at
    from public.contact_submissions
    where email is not null and email <> ''
    order by lower(email), created_at asc nulls last
    on conflict (email) do nothing;

    -- Inquiries: one per legacy submission, joined back to the person by email
    insert into public.inquiries (person_id, message, source, created_at)
    select
      p.id,
      cs.message,
      'contact-form-legacy' as source,
      coalesce(cs.created_at, now()) as created_at
    from public.contact_submissions cs
    join public.people p on p.email = lower(cs.email)
    where cs.message is not null and cs.message <> ''
      and not exists (
        select 1 from public.inquiries i
        where i.person_id = p.id
          and i.message = cs.message
          and i.source = 'contact-form-legacy'
      );

    raise notice 'Backfilled people + inquiries from contact_submissions.';
  end if;
end $$;

-- ============================================================================
-- Helpful views (optional, read-only via service role)
-- ============================================================================
create or replace view public.inquiries_with_person as
select
  i.id as inquiry_id,
  i.created_at as inquired_at,
  i.subject,
  i.message,
  i.status,
  i.source as inquiry_source,
  p.id as person_id,
  p.email,
  p.name,
  p.phone
from public.inquiries i
join public.people p on p.id = i.person_id
order by i.created_at desc;
