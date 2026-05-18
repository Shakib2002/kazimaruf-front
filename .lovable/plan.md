# Kazi Office Farmgate — Bengali Single-Page Website

A bold, mobile-first Bengali landing page with Bangladesh flag colors, Hind Siliguri typography, and a working appointment form (client-side only).

## Pages & Routing

Single route only: `src/routes/index.tsx` (replaces the placeholder). All sections live on the home page; navbar links smooth-scroll to section IDs (this is the explicit single-page request, so anchor links are appropriate here).

SEO meta on the root route updated to Bengali title and description.

## Design System (src/styles.css)

Add CSS tokens in oklch:
- `--primary` → Bangladesh green #006A4E
- `--accent` → Bangladesh red #C8102E
- `--primary-foreground`, `--accent-foreground` → white
- Neutral background near-white, soft card surfaces
- `--radius` slightly larger (1rem) for friendly card feel

Typography:
- Import Hind Siliguri (weights 400/500/600/700) via `@import url(...)` at top of `styles.css`
- Set `font-family: "Hind Siliguri", system-ui, sans-serif` on `body`
- `html { scroll-behavior: smooth; }`

Decorative pattern:
- A reusable `.islamic-pattern` utility using pure CSS `background-image` with layered `radial-gradient` + `conic-gradient` at low opacity, applied as subtle backgrounds on Hero and Why-Us sections.

## Sections (components in `src/components/site/`)

1. `Navbar.tsx` — sticky, white/blur background, logo "🇧🇩 কাজী অফিস ফার্মগেট", 5 nav links, green WhatsApp button (desktop) + mobile hamburger sheet.
2. `Hero.tsx` — large headline, sub, two CTAs (primary green scroll-to-booking, outline WhatsApp), 3 stat badges, geometric pattern background, red accent underline on headline.
3. `Services.tsx` — responsive grid (1/2/3 cols) of 9 cards with emoji icon, title, and a one-line Bengali blurb; green icon chip, red hover ring.
4. `WhyUs.tsx` — 4 feature boxes in 2x2 / 4-col grid with check icons.
5. `Booking.tsx` — react-hook-form + zod validation, shadcn Input/Select/Textarea/Calendar(Popover) for date, services dropdown listing the 9 services. On valid submit: hide form, show Bengali success card + WhatsApp note. Error messages in Bengali.
6. `About.tsx` — Kazi name as heading, paragraph text, decorative side accent bar in red/green.
7. `Contact.tsx` — 3-column cards (Address / Phone+WhatsApp+Email / Hours) + embedded Google Maps iframe for Tejgaon, Dhaka-1215.
8. `FloatingWhatsApp.tsx` — fixed bottom-right green circle with WhatsApp SVG icon, pulse animation (Tailwind `animate-ping` ring), tooltip on hover.
9. `Footer.tsx` — two Bengali lines, centered, dark green band.

## Technical Notes

- shadcn components reused: button, input, textarea, select, popover, calendar, sheet, sonner (for toast fallback).
- All colors via semantic tokens; no hardcoded hex inside components.
- Form: zod schema with Bengali error messages, `mode: "onSubmit"`.
- WhatsApp links: `https://wa.me/8801818090938` (open in new tab, `rel="noopener"`).
- Google Maps: standard `<iframe>` embed URL for "Tejgaon, Dhaka 1215" — no API key needed.
- All `<a>` smooth-scroll handled natively via `html { scroll-behavior: smooth }` and `#id` hrefs.
- Update root `head()` meta: title `কাজী অফিস ফার্মগেট — বিশ্বস্ত বিবাহ ও তালাক রেজিস্ট্রেশন`, `lang="bn"` on `<html>`.

## File Changes

```text
src/styles.css                       (tokens, font import, pattern utility)
src/routes/__root.tsx                (lang="bn", meta)
src/routes/index.tsx                 (compose sections)
src/components/site/Navbar.tsx
src/components/site/Hero.tsx
src/components/site/Services.tsx
src/components/site/WhyUs.tsx
src/components/site/Booking.tsx
src/components/site/About.tsx
src/components/site/Contact.tsx
src/components/site/FloatingWhatsApp.tsx
src/components/site/Footer.tsx
src/lib/site-data.ts                 (services array, contact info)
```

No new dependencies needed (react-hook-form, zod, shadcn ui already present).
