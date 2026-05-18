
-- Roles enum + table (admin gating)
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Admins can view all roles"
on public.user_roles for select to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
on public.user_roles for all to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

-- Bookings table
create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service text not null,
  preferred_date date not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.bookings enable row level security;

-- Anyone (including anon visitors) can submit a booking
create policy "Anyone can insert bookings"
on public.bookings for insert to anon, authenticated
with check (
  length(name) between 2 and 100
  and length(phone) between 10 and 20
  and length(service) between 1 and 200
  and (message is null or length(message) <= 1000)
);

-- Only admins can read/update/delete bookings
create policy "Admins can view bookings"
on public.bookings for select to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update bookings"
on public.bookings for update to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete bookings"
on public.bookings for delete to authenticated
using (public.has_role(auth.uid(), 'admin'));

create index bookings_created_at_idx on public.bookings (created_at desc);
create index bookings_status_idx on public.bookings (status);
