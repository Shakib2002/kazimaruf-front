## Audit — Current site weaknesses

**Brand & color**
- Three loud brand colors (green + bright red + gold) fight each other; red on Stats bar and corner triangles reads "alert" not "premium".
- Hero uses 5 overlapping overlays (multiply wash + dark tint + 2 gradients + radial + pattern) → muddy photo, soft text contrast.
- Heavy use of `bg-primary-darker/40 + backdrop-blur + border gold` everywhere → cluttered, template-y.

**Typography**
- Only Hind Siliguri; no Inter for Latin/numerals → "26+" and phone numbers look weak.
- `h1` clamp peaks at 4rem but hero headline competes with too many badges, eyebrow, subtitle, 2 CTAs, 3 trust pills stacked tightly — no breathing room.
- No defined type scale beyond h1–h3; body line-height inherits browser default.

**Layout & hierarchy**
- Every section uses the same recipe: eyebrow chip → gold-underline h2 → grid. No rhythm variation, sections blur together.
- Service cards (9 items, equal-grid) overwhelm; no "Learn more" affordance; corner red triangle is decorative noise.
- Stats sits in a red band that breaks the cream → green flow.
- WhyUs and Services overlap conceptually.

**Navbar**
- Static, no scroll state, no blur, mobile menu likely basic. CTA button not differentiated from links.

**Hero**
- Trust badges placed below CTAs (low priority real-estate) instead of reinforcing the headline.
- Wave SVG divider into red stats = jarring transition.
- No real photo of the kazi / office — generic wedding stock.

**Booking form**
- Single-column on desktop wastes width; no time-slot selector (brief asked); no loading state, no toast, no WhatsApp fallback inside success state; success just flips a boolean with no animation.
- Phone regex is loose; no BD-specific format hint.

**Trust / social proof**
- Stats exist but no "client satisfaction %", "avg response time", no Bar Council / govt registration number visible as a credential block.
- Testimonials present but service+year tag styled as a chip in gold/primary — fine, but no distinct "Verified Client" affordance.

**About / lawyer profile**
- No experience timeline, no credentials list, no headshot, no video placeholder. Currently a thin block.

**Footer**
- 64 lines → likely minimal. Missing: services column, social icons row, Privacy/Terms links, copyright with year, NAP block for local SEO.

**Contact**
- No real map embed; office hours not surfaced as a card; no "WhatsApp now" quick action.

**Accessibility**
- Gold-on-cream and mint-on-green pairings need contrast verification (some likely <4.5:1).
- `fetchpriority` attr cast with `@ts-expect-error` — fragile.
- Icon-only buttons (likely floating WhatsApp) need aria-labels audit.
- Decorative SVGs/imgs: most have `aria-hidden`, good — keep.

**Performance**
- Hero image not preloaded via route `head().links`.
- 6 avatar JPGs imported eagerly into site-data.ts → all ship even if testimonials below the fold.
- Embla + autoplay loaded on initial route.

**SEO**
- Single index route, no per-section meta strategy. No JSON-LD `LocalBusiness` (critical for a local kazi office).
- No og:image, no canonical, no structured opening-hours.

**Mobile**
- Hero `py-24 sm:py-32` is okay, but headline `clamp(2.25rem, 6vw, 4rem)` + 3 stacked badge groups → fold gets eaten.
- Sticky floating WhatsApp likely overlaps bottom CTAs.

---

## Design direction (locked)

- **Palette (CSS tokens rewrite in `src/styles.css`):**
  - `--primary` Deep Emerald `#0B3D2E` · `--primary-dark` `#082A20` · `--primary-soft` `#0F4A38`
  - `--gold` `#D4AF37` · `--gold-soft` `#E8C76A`
  - `--background` Warm Ivory `#F8F7F2` · `--foreground` `#1E1E1E` · `--muted-foreground` `#6B7280`
  - `--accent` reserved, used sparsely (govt seal + 1 underline accent), not as section background
  - `--success` `#15803D`
- **Type:** Add Inter for Latin/numerals; keep Hind Siliguri for Bangla. Body 16/1.7, h1 56–72 desktop, h2 36–44, generous tracking on uppercase eyebrows.
- **Motion:** Framer Motion `whileInView` fade-up (20px, 0.6s, stagger 0.08). Hover lift on cards (translateY -4px, shadow). No parallax, no marquees beyond testimonials.
- **Tone:** quiet luxury — lots of ivory whitespace, thin gold hairline dividers, serif-feel weight via Hind Siliguri 700 only on headings.

---

## Implementation plan

### 1. Foundation
- Rewrite `src/styles.css` tokens to emerald+gold+ivory; remove `--accent-deep`, `--accent-darker`, red-leaning patterns. Keep one subtle `--accent` for govt-seal ribbon only.
- Add Inter via `@import` alongside Hind Siliguri; set `--font-sans` to Hind Siliguri, `--font-display` Inter for numerals (`.font-display` utility, applied to stats/phone).
- Replace `islamic-pattern-strong` with a refined sparse gold-dot pattern (lower opacity, larger spacing).
- Install `framer-motion` (`bun add framer-motion`).
- New utility `<Reveal>` wrapper in `src/components/site/Reveal.tsx` using Framer Motion's `useInView`.

### 2. Navbar (`Navbar.tsx`)
- Sticky, transparent over hero, switches to `bg-background/85 backdrop-blur-md border-b` after 24px scroll (scroll listener + state).
- Replace red CTA with solid gold "অ্যাপয়েন্টমেন্ট" pill.
- Mobile: full-height sheet (shadcn Sheet) with large tap targets and contact info at bottom.

### 3. Hero (`Hero.tsx`)
- Two-column on lg+: left = headline + subtitle + CTAs + 4 inline trust chips (২৬+ বছর, ১০০০+ কেস, ২৪/৭, বিশ্বস্ত); right = portrait card (lawyer/kazi photo, govt-approved badge floating).
- Single dark emerald overlay (no multi-layer wash); ivory text only.
- Generate new hero portrait via imagegen (professional Bangladeshi kazi in panjabi, neutral studio bg).
- Replace wavy SVG → thin gold hairline + smooth fade to ivory.
- Preload hero image via route `head().links`.

### 4. Stats / Trust strip (`Stats.tsx`)
- Move out of red band → ivory section with 4 columns separated by gold hairlines.
- Large Inter numerals in emerald, label in muted gray below.
- Add 5th micro-line: "সরকার অনুমোদিত · কাজী রেজি. নং ___" (placeholder).

### 5. Services (`Services.tsx`)
- 3×3 grid → 3×2 featured + "View all" expander (or keep 9 but redesign).
- Card: ivory bg, thin border, emerald icon in gold-tinted circle, title, 2-line desc, "বিস্তারিত →" link in gold. Hover: border emerald, translateY -4px, shadow.
- Remove corner red triangle entirely.

### 6. About / Lawyer profile (`About.tsx`)
- Two-column: left portrait + credentials chips (Bar Council #, Govt Reg #, ২৬ বছর), right narrative + experience timeline (4 milestones with year dots on a gold vertical line) + "Practice areas" badge cluster.
- Reserved 16:9 video intro placeholder card below (play-icon poster, "শীঘ্রই আসছে").

### 7. Why Us → Trust block (`WhyUs.tsx`)
- Reframe as "কেন আমাদের বেছে নেবেন" with 4 large feature rows (icon left, title+desc right) instead of grid cards. Adds rhythm variation.

### 8. Testimonials (`Testimonials.tsx`)
- Keep Embla but redesign cards: ivory, large gold quote glyph top-left, italic Hind Siliguri body, avatar + name + "Verified Client" check + service/year line at bottom. Dots in emerald. Add "৫.০ Google reviews" trust line above carousel.

### 9. Booking (`Booking.tsx`)
- Two-column on md+: left = form, right = "যা প্রয়োজন" checklist + WhatsApp quick-connect card.
- Add time-slot Select (10:00, 12:00, 15:00, 17:00, 19:00).
- Add loading state (button spinner), toast on submit (sonner), animated success state (Framer Motion scale-in checkmark + "WhatsApp এ confirm করুন" CTA opening prefilled WA link).
- Section bg = ivory (not emerald), form card = white with emerald border-top accent.

### 10. Contact (`Contact.tsx`)
- 3 modern cards: Address (with Google Maps embed below), Phone/WhatsApp, Email/Hours.
- Each card: ivory, gold icon circle, title, content, CTA link.

### 11. Footer (`Footer.tsx`)
- 4 columns: brand+tagline+govt seal · Quick Links · Services (top 6) · Contact NAP + social icons (FB, YouTube, WA).
- Bottom bar: © 2026 · Privacy · Terms · "Made with care".

### 12. SEO + head
- `src/routes/index.tsx` head(): title, description, og tags, canonical, JSON-LD `LegalService` + `LocalBusiness` with address, openingHours, telephone, geo placeholder.
- Lazy-import Testimonials avatars: convert to URL-only fetch via `?url` or move to public/.

### 13. Accessibility & perf pass
- Audit contrast on every gold-on-ivory and ivory-on-emerald pair (target AA 4.5:1).
- Add `aria-label` to floating WhatsApp.
- Replace `@ts-expect-error fetchpriority` with proper preload link in `head()`.
- Lazy-load below-fold sections via dynamic imports if bundle grows.

### Files touched
- Rewritten: `Hero`, `Navbar`, `Stats`, `Services`, `About`, `WhyUs`, `Testimonials`, `Booking`, `Contact`, `Footer`, `FloatingWhatsApp`, `styles.css`, `routes/index.tsx`, `lib/site-data.ts`
- New: `components/site/Reveal.tsx`, hero portrait asset
- Added dep: `framer-motion`

### Out of scope (flag for later)
- Real Bar Council / kazi registration numbers — placeholders used; user to fill.
- Real Google Maps coordinates — embed uses approximate Farmgate location.
- Backend form submission — currently visual success only; can wire to Lovable Cloud on request.
