-- Create contact_messages table for portfolio contact form
create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  name text,
  email text,
  subject text,
  message text
);

-- Enable RLS
alter table public.contact_messages enable row level security;

-- Policy to allow inserts from serverless backend function
create policy "Allow insert from service role" on public.contact_messages
  for insert with check (true);
