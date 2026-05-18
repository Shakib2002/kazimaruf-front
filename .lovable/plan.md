# Production-Ready Plan — কাজী অফিস ফার্মগেট

আপনি যেটা চাইলেন: **A (WhatsApp redirect) + B (Supabase DB + Resend Email)** — দুইটাই একসাথে। মানে booking হলে — (1) Supabase DB-তে save হবে, (2) Resend-এর মাধ্যমে kazi সাহেবকে email notification যাবে, (3) user-কে WhatsApp-এ pre-filled message সহ redirect হবে। Triple safety — কোনো booking হারাবে না।

---

## Phase 1 — Booking system (workable backend)

### 1.1 Lovable Cloud enable + `bookings` table
Supabase Free Tier-এর জন্য Lovable Cloud enable করব (one-click, কোনো external Supabase account লাগে না)। তারপর migration দিয়ে table বানাব:

```
bookings (
  id uuid primary key,
  name text,
  phone text,
  service text,
  preferred_date date,
  message text,
  status text default 'new',   -- new | contacted | done | cancelled
  created_at timestamptz default now()
)
```

**RLS policies:**
- Public `INSERT` allowed (যাতে guest-রা booking দিতে পারে)
- `SELECT/UPDATE/DELETE` শুধু admin role-এর জন্য (kazi সাহেব দেখবেন)

### 1.2 Submit-booking server function
`src/lib/booking.functions.ts` — `createServerFn` দিয়ে:
- Zod validation (length limits, phone regex, honeypot field check)
- Supabase `INSERT`
- Resend API call → kazi সাহেবের email-এ notification (নাম, ফোন, সেবা, তারিখ, message)
- Return success/error

### 1.3 Booking.tsx update
- `onSubmit` এখন আসলে API call করবে
- Loading spinner দেখাবে
- Success হলে: success message + "WhatsApp-এ ও জানিয়ে দিন" button (pre-filled message সহ)
- Failure হলে: error toast + fallback হিসেবে direct WhatsApp button
- Hidden honeypot field (anti-spam)

### 1.4 WhatsApp pre-filled URL helper
`src/lib/site-data.ts` এ একটা utility:
```
buildWhatsAppUrl({ name, phone, service, date, message }) 
→ https://wa.me/880XXX?text=encoded_message
```
FloatingWhatsApp button-এও এটা ব্যবহার করব (একটা general greeting সহ)।

---

## Phase 2 — Resend email integration

### 2.1 Resend connector + secret
- `RESEND_API_KEY` secret request করব (আপনি Resend dashboard থেকে পাবেন)
- আপনার domain Resend-এ verify না করা থাকলে শুরুতে `onboarding@resend.dev` থেকে kazi সাহেবের email-এ পাঠাবে (testing)
- পরে নিজের domain verify করলে `notify@yourdomain.com` use করব
- **আপনার থেকে দরকার:** kazi সাহেবের notification email address (e.g., `kazimaruf@gmail.com`)

### 2.2 Email template
React HTML email — gold/green brand colors, Bengali text, সব booking details, "Reply" button।

---

## Phase 3 — Admin dashboard (booking management)

### 3.1 Auth — email/password login
- `/admin/login` route
- Supabase Auth (email/password) — kazi সাহেবের জন্য একটাই account
- `_authenticated` layout route দিয়ে protect
- **আপনার থেকে দরকার:** admin email + initial password (অথবা আমি default `admin@kaziofficefarmgate.com` বানিয়ে দিব)

### 3.2 `/admin/bookings` dashboard
- সব booking list (latest first)
- Filter: status (new/contacted/done), date range
- প্রতিটা booking-এ:
  - নাম, ফোন (clickable `tel:`), সেবা, পছন্দের তারিখ, message
  - "WhatsApp-এ যোগাযোগ" button (pre-filled)
  - Status dropdown (new → contacted → done)
- Total count badge

### 3.3 Logout button + session handling

---

## Phase 4 — SEO & brand metadata

### 4.1 Root metadata Bengali
`__root.tsx` — default title, description, og:title, og:description, og:locale (bn_BD), twitter card — সব brand-consistent Bengali।

### 4.2 Favicon + OG share image
- Brand favicon generate (gold + green কাজী monogram)
- 1200x630 OG share image generate (hero text + brand colors)
- `__root.tsx` head এ wire

### 4.3 LocalBusiness JSON-LD
`__root.tsx` এ structured data inject:
- `@type: LegalService` / `LocalBusiness`
- Name, address (ফার্মগেট/তেজগাঁও, ঢাকা), phone, opening hours
- AggregateRating (5.0, testimonial count থেকে)
- Service list

### 4.4 `public/robots.txt` + `public/sitemap.xml`
Single-page site, কিন্তু Google crawler-এর জন্য proper sitemap।

---

## Phase 5 — Polish

### 5.1 Bengali 404 + error page
`__root.tsx` এর `NotFoundComponent` ও `ErrorComponent` — brand-consistent Bengali।

### 5.2 A11y + small fixes
- All buttons proper `aria-label`
- Contact section-এ phone numbers `tel:` link verify
- Focus rings consistent

---

## 📋 Execution Order

```
Phase 1 — Booking backend (Cloud + DB + serverFn + form wiring)
Phase 2 — Resend email notification
Phase 3 — Admin dashboard (auth + bookings list)
Phase 4 — SEO & brand metadata
Phase 5 — 404/error page + a11y polish
```

প্রতিটা phase finish হওয়ার পর আমি browser preview দিয়ে verify করব।

---

## ❓ আপনার থেকে যা দরকার (proceed করার আগে)

1. **kazi সাহেবের notification email** — কোন ঠিকানায় new booking এর email যাবে?
2. **Admin login** — কোন email/password দিয়ে kazi সাহেব admin dashboard-এ login করবেন?
3. **Resend domain** — শুরুতে `onboarding@resend.dev` use করব (instant works)। পরে আপনার নিজের domain verify করতে চাইলে জানাবেন।
4. **License/registration number** — kazi সাহেবের সরকারি registration number থাকলে দিন (About section-এ trust signal হিসেবে যোগ করব)। না থাকলে skip।

আপনি এই ৪টা info দিলেই আমি Phase 1 থেকে শুরু করব। অথবা **"approve, default value use kor"** বললে আমি sensible defaults দিয়ে এগিয়ে যাব (notification email আপনাকে পরে update করতে বলব, admin credentials আপনাকে private chat-এ পাঠাবো)।
