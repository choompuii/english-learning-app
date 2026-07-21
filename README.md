# LearnEN — เรียนภาษาอังกฤษ

แอปเรียนภาษาอังกฤษสำหรับคนไทย ครอบคลุมระดับ A1 → C2 พร้อมบทเรียน คำศัพท์ ควิซ เกม
การฝึกทักษะ (ฟัง พูด อ่าน เขียน) และระบบเกมมิฟิเคชัน (XP, badge, streak, daily challenge)

> A Thai-first English learning web app. All UI copy and explanations are bilingual
> (English + Thai). Built as a lightweight vanilla-JS single-page app — no framework.

---

## ฟรี 100% — ไม่ใช้เครื่องมือที่เสียเงิน

แอปนี้ออกแบบมาให้ **ฟรีทั้งหมด ไม่มีค่าใช้จ่ายแฝง และไม่พึ่งพา API หรือบริการที่ต้องเสียเงิน**
ทุกความสามารถใช้เทคโนโลยีในตัวเบราว์เซอร์หรือบริการที่มี free tier เพียงพอต่อการใช้งานจริง:

| ความสามารถ | ใช้อะไร | ค่าใช้จ่าย |
|------------|---------|-----------|
| ออกเสียง (Text-to-Speech) | Web Speech API ในตัวเบราว์เซอร์ | ฟรี |
| ฝึกพูด (Speech Recognition) | Web Speech API ในตัวเบราว์เซอร์ | ฟรี |
| ตรวจไวยากรณ์ / เขียน | กฎภาษาฝั่ง client (`src/utils/grammar-rules.js`) | ฟรี |
| แจ้งเตือนรายวัน | Notification API ในตัวเบราว์เซอร์ (ไม่มี push server) | ฟรี |
| ออฟไลน์ / ติดตั้งเป็นแอป | Service Worker + Web Manifest | ฟรี |
| เก็บความคืบหน้า | `localStorage` (ในเครื่อง) | ฟรี |
| ล็อกอิน + ซิงก์ข้ามเครื่อง | Supabase (free tier) | ฟรี |
| ฟอนต์ | Google Fonts | ฟรี |
| เนื้อหาทั้งหมด | ข้อมูลสถิตในโปรเจกต์ (`src/data/`) | ฟรี |

**หลักการที่ยึดถือ:**
- ❌ ไม่มีการเรียก AI/LLM API แบบจ่ายเงิน (เช่น OpenAI, Claude API) — การตรวจไวยากรณ์และการให้คะแนนทำด้วยกฎฝั่ง client ล้วน
- ❌ ไม่มีเสียงที่ต้องซื้อ/สมัครสมาชิก — ใช้เสียงสังเคราะห์ในตัวเบราว์เซอร์
- ❌ ไม่มี push notification server ที่เสียเงิน — แจ้งเตือนแบบ local ขณะเปิดแอป
- ✅ ทุกอย่างรันได้บน free tier และโฮสต์เป็น static site ได้ (Vercel/Netlify/GitHub Pages)

> เมื่อจะเพิ่มฟีเจอร์ใหม่ ให้คงหลักการนี้ไว้ — เลือกความสามารถในตัวเบราว์เซอร์หรือบริการที่มี free tier ก่อนเสมอ

---

## Tech stack

| Area | Choice |
|------|--------|
| Language | Vanilla JavaScript (ES modules) |
| Build | [Vite](https://vitejs.dev) 5 |
| Tests | [Vitest](https://vitest.dev) |
| Styling | Plain CSS with design tokens (`src/styles/tokens.css`) |
| State | Custom store over `localStorage` (`src/store.js`) |
| Backend | [Supabase](https://supabase.com) — auth + cloud progress sync |
| Offline | Service worker + Web App Manifest (installable PWA) |

No paid services are used — the app runs entirely on free tiers.

## Getting started

```bash
npm install
npm run dev        # start the Vite dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm test           # run the Vitest suite once
npm run test:watch # run tests in watch mode
```

Requires Node 18+.

## Project structure

```
index.html                # app shell, PWA meta, font + style links
public/                   # static assets served at the site root
  manifest.webmanifest    # PWA manifest
  sw.js                   # service worker (offline shell + runtime caching)
  icon.svg, icon-maskable.svg
src/
  main.js                 # route registration + app boot
  router.js               # hash-based SPA router
  store.js                # progress/XP/streak/badge state + Supabase sync
  components/             # reusable UI widgets (sidebar, flashcard, quiz question…)
  pages/                  # one module per route (home, course, quiz, profile…)
  data/                   # static content (lessons, vocabulary, quizzes, games…)
  lib/                    # Supabase client + auth wrappers
  utils/                  # tts, reminders, pwa, grammar rules, effects, html…
  styles/                 # CSS (tokens, base, layout, components, skills, course, profile)
test/                     # Vitest suite (store logic)
```

## Features

**Learning paths**
- **Course** — structured A1 → C2 track with units and unlockable unit tests
- **Skills** — Vocabulary, Grammar, Reading, Listening, Speaking, Writing

**Practice modes**
- Lessons, Flashcards (SM-2 spaced repetition), Quizzes
- Word Games (Hangman, Word Match, Word Scramble)
- Sentence Builder, Speed Round, Dictation
- Idioms & Phrasal Verbs, Role-play Conversations
- Daily Challenge (mixed review of weak/due words)
- Speaking (Speech Recognition) and Writing (client-side grammar checks)

**Progress & motivation**
- XP, levels/ranks, study & goal streaks, 13 badges, certificates
- Activity calendar, insights, review-mistakes, personal notebook

## Data & persistence

Progress is stored locally under the `elapp_progress` key in `localStorage` and
synced to Supabase (`user_progress` table) with a 2-second debounce when signed in.
On sign-in, local and cloud state are merged (the newer of the two wins).

See `src/store.js` for the full state shape and the public API used by pages.

## PWA & offline

- The app is installable (manifest + icons) and boots offline once visited.
- `public/sw.js` uses a network-first strategy for navigations (fresh HTML,
  cached shell as fallback) and stale-while-revalidate for JS/CSS/fonts.
- Supabase and other API calls are never cached — they always hit the network.
- The service worker is registered **only in production builds** (`src/utils/pwa.js`)
  so it never interferes with Vite's dev server / HMR.
- Bump `CACHE_VERSION` in `public/sw.js` when you want to invalidate cached assets.

## Daily reminders

Opt-in study reminders (Profile → Goals → *แจ้งเตือนให้เรียน*) fire a browser
notification at a chosen time on days the learner hasn't studied yet. This is a
**local** reminder that only fires while the app is open in a tab — there is no
push server (keeping the app free/serverless). See `src/utils/reminders.js`.

## Configuration

Supabase credentials live in `src/lib/supabase.js`. The `anon` key is safe to ship
to the client, but for cleanliness it is recommended to move it to a Vite env var
(`import.meta.env.VITE_SUPABASE_*`) before deploying widely.

## Testing

The Vitest suite in `test/store.test.js` covers the store logic: best-score
tracking, SM-2 flashcard scheduling, quiz attempts, daily XP/streaks, notebook,
difficult/learned words, daily challenge streaks, dictation, and reminder settings.
The suite mocks Supabase so no network access is needed.

```bash
npm test
```
