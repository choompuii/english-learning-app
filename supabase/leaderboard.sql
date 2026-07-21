-- ============================================================================
-- Leaderboard table  (run once in the Supabase SQL Editor)
-- ============================================================================
--
-- Powers the /leaderboard page. Each signed-in learner publishes only their
-- PUBLIC stats here (name, XP, streak, level) — never the full progress blob,
-- which stays private in `user_progress`.
--
-- Security model:
--   • Any authenticated user may READ every row (that's the whole point of a
--     leaderboard) — but only the four public columns are stored here.
--   • A user may INSERT/UPDATE only their OWN row (user_id = auth.uid()).
--
-- The app writes to this table automatically on progress sync (see
-- syncLeaderboard() in src/store.js). If this table is missing the app degrades
-- gracefully and the page shows a setup notice.

create table if not exists public.leaderboard (
  user_id      uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_color text,
  xp           integer not null default 0,
  streak       integer not null default 0,
  level        text,
  updated_at   timestamptz not null default now()
);

-- Fast ordering for the "top N by XP" query.
create index if not exists leaderboard_xp_idx on public.leaderboard (xp desc);

alter table public.leaderboard enable row level security;

-- Everyone signed in can read the board.
drop policy if exists "leaderboard read" on public.leaderboard;
create policy "leaderboard read"
  on public.leaderboard for select
  to authenticated
  using (true);

-- A user can create their own row.
drop policy if exists "leaderboard insert own" on public.leaderboard;
create policy "leaderboard insert own"
  on public.leaderboard for insert
  to authenticated
  with check (auth.uid() = user_id);

-- A user can update only their own row.
drop policy if exists "leaderboard update own" on public.leaderboard;
create policy "leaderboard update own"
  on public.leaderboard for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
