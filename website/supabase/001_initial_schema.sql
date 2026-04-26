-- Initial schema for Dru Personal Brand
-- Run in the Supabase SQL Editor.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  message text,
  created_at timestamptz default now()
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

-- Allow anonymous inserts (so the public site can write contact + newsletter rows).
alter table contact_submissions enable row level security;
alter table newsletter_subscribers enable row level security;

drop policy if exists "anon_insert_contact" on contact_submissions;
create policy "anon_insert_contact"
  on contact_submissions for insert
  to anon
  with check (true);

drop policy if exists "anon_insert_newsletter" on newsletter_subscribers;
create policy "anon_insert_newsletter"
  on newsletter_subscribers for insert
  to anon
  with check (true);
