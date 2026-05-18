## লক্ষ্য
TanStack Start (SSR + Cloudflare Workers) → plain **Vite + React + React Router v6** SPA-তে convert করব। UI/design হুবহু একই থাকবে। Backend call যাবে external Workers API-তে: `https://kaziofficefarmgate.codewithshakib.workers.dev`। Output হবে static `dist/` — Vercel-এ direct deploy যায়।

---

## যা মুছে ফেলা হবে (Cloudflare/SSR/Server bits)

- `wrangler.jsonc`
- `src/server.ts`, `src/start.ts`
- `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR-only)
- `src/lib/booking.functions.ts` (server function — replace with fetch)
- `src/integrations/supabase/client.server.ts`
- `src/integrations/supabase/auth-middleware.ts`
- `src/integrations/supabase/auth-attacher.ts`
- `src/routeTree.gen.ts` (TanStack Router generated)
- `supabase/` folder (যদি শুধু config থাকে এবং user আর Supabase use না করে — কনফার্ম করব)
- TanStack-specific dependencies: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `wrangler`, `@lovable.dev/vite-tanstack-config`

## যা যোগ হবে

- `react-router-dom` (v6)
- নতুন `vite.config.ts` — শুধু `@vitejs/plugin-react` + `@tailwindcss/vite` + path alias
- নতুন `src/main.tsx` — root entry, `BrowserRouter` দিয়ে wrap
- নতুন `src/App.tsx` — `<Routes>` declaration
- নতুন `index.html` — Vite entry
- `vercel.json` — SPA fallback rewrite (`/* → /index.html`)
- `.env.example` — `VITE_API_URL=https://kaziofficefarmgate.codewithshakib.workers.dev`
- `src/lib/api.ts` — central `fetch` wrapper যেটা `import.meta.env.VITE_API_URL` use করবে

## Route conversion

বর্তমান single-page site (homepage এ সব section), তাই শুধু একটা route থাকবে:
- `src/routes/index.tsx` → `src/pages/Index.tsx` (logic একই, শুধু `createFileRoute` সরবে)
- `src/routes/__root.tsx` এর head meta → `index.html` এর `<head>` এ static

কোনো dynamic route নেই তাই migration সহজ।

## Component changes (UI অপরিবর্তিত)

- `Booking.tsx`: `submitBooking` server fn call → `fetch(${VITE_API_URL}/api/bookings, { method: POST, body: JSON })`
- Navbar/Footer-এ যদি `<Link>` from `@tanstack/react-router` থাকে → `react-router-dom` এর `Link`-এ swap
- হোম পেজে hash anchor (#services etc.) already use হচ্ছে — কোনো পরিবর্তন লাগবে না
- সব visual styling, Tailwind classes, design tokens, assets — অপরিবর্তিত

## Supabase সম্পর্কে

`booking.functions.ts` Supabase admin client + Resend দিয়ে DB insert + email পাঠাত। যেহেতু Workers API এসব handle করবে, frontend-এ Supabase client লাগবে না — `src/integrations/supabase/client.ts` ও `types.ts` রাখব শুধু যদি future use থাকে, নয়তো মুছে দিতে পারি (user-এর কাছে জানতে চাইব এ লুপের শেষে নয়, এখনই default: রেখে দেব unused, build break হবে না)।

## Vercel config

`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

`package.json` scripts:
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

## Verification

- `npm install` clean
- `npm run build` → `dist/` produces static assets
- `npm run preview` → site loads, all sections render, booking form posts to Workers API
- কোনো `process.env`, `createServerFn`, `wrangler` reference নেই

---

## Workers API contract (assumed)

Booking form POST করবে:
```
POST {VITE_API_URL}/api/bookings
Content-Type: application/json

{ "name", "phone", "service", "preferred_date", "message" }
```

যদি real endpoint path ভিন্ন হয় (e.g. `/bookings` not `/api/bookings`), implementation-এর সময় code-এ এক জায়গায় বদলালেই হবে।

---

Approve করলে implement শুরু করব।