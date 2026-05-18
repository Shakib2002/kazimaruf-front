# Bold Festive Redesign — কাজী অফিস ফার্মগেট

Transform the current minimal site into a vibrant, festive, culturally-rich Bangladeshi wedding feel — deep green, bold red, rich gold, with alternating section backgrounds, dramatic typography, and celebratory motifs (subtle Islamic geometry + wedding accents).

## 1. Design tokens (`src/styles.css`)
- Add new palette in oklch:
  - `--primary` Deep Green #006A4E
  - `--primary-dark` #004D38
  - `--primary-darker` #002E22 (footer)
  - `--accent` Bold Red #F42A41
  - `--gold` #D4AF37
  - `--cream` #FDF8F0 (new `--background`)
  - `--whatsapp` #25D366
  - light-green text `#9FD6C5` for dark sections
- Add new utility classes:
  - `.islamic-pattern-strong` (opacity 0.08 SVG-style CSS pattern for hero)
  - `.arabic-watermark` (large opacity-0.05 decorative bg)
  - `.wave-divider-bottom` (SVG-mask wave between sections)
  - `.gold-underline` (decorative double-line gold accent under H2s)
  - `.shimmer` (subtle shimmer keyframe for stat numbers)
  - `.fade-up`, `.fade-up-stagger` reveal-on-scroll classes
- Typography scale set on `body` / headings: H1 64px (clamp for mobile), H2 42px, H3 24px, body 16px, Hind Siliguri weights 400/600/700.

## 2. Hero (`src/components/site/Hero.tsx`)
- Full viewport height (`min-h-screen`), deep green bg, islamic pattern overlay.
- Headline (white, 64px, bold): "দীর্ঘ ২৬ বছরের বিশ্বস্ত কাজী অফিস" — red underline accent specifically under "২৬ বছর".
- Gold subtext line: "শরীয়াহ সম্মত ও সরকার অনুমোদিত বিবাহ রেজিস্ট্রেশন সেবা"
- Two large CTAs side by side:
  - Gold filled `অ্যাপয়েন্টমেন্ট নিন` (dark text)
  - White outlined `WhatsApp করুন` with icon
- 3 trust-badge pills (semi-transparent dark green, gold check icons): সরকার অনুমোদিত | ২৬ বছর অভিজ্ঞতা | ২৪/৭ সেবা
- Fade-up entrance animation, bottom SVG wave divider into stats.

## 3. New Stats Bar (`src/components/site/Stats.tsx`)
- Full-width red `#F42A41` band, white 56px bold animated count-up numbers, gold labels, gold vertical dividers, shimmer animation.
- Numbers: ২৬+ বছর | ১০,০০০+ বিবাহ | ১০০% গোপনীয়তা | ২৪/৭ সেবা
- IntersectionObserver hook triggers count-up once on view.

## 4. Services (`src/components/site/Services.tsx`)
- Cream bg, gold-underlined section title.
- Replace existing 9 services with the new list (icons + titles per spec).
- Card redesign: white bg, 4px left green border, small red triangle top-right (CSS clip-path), large green icon, bold title, description, green `বিস্তারিত →` link, hover lifts + green border turns red.
- Soft green shadow `0 4px 20px rgba(0,106,78,0.15)`.
- Staggered fade-in on scroll.

## 5. Why Choose Us (`src/components/site/WhyUs.tsx`)
- Dark green `#004D38` bg with large faint Arabic-style calligraphy watermark (decorative SVG-like CSS, opacity 0.05).
- Gold title, 4 feature cards: semi-transparent dark green, gold top border, gold icon circle, white title, light green (`#9FD6C5`) description.

## 6. Appointment (`src/components/site/Booking.tsx`)
- Section bg: gradient `#006A4E → #004D38`.
- Gold title above a centered white card (max-w 600px, strong shadow, rounded-2xl).
- Form inputs with green focus rings, large gold submit button "অ্যাপয়েন্টমেন্ট নিশ্চিত করুন".
- Below form: "অথবা সরাসরি WhatsApp করুন →" gold link.
- Keep existing react-hook-form + zod validation & Bengali errors.

## 7. About (`src/components/site/About.tsx`)
- Cream bg, split 40/60 layout.
- Left: photo of কাজী মারুফ খন্দকার with green double-frame + gold corner ornaments, gold nameplate below ("মাওঃ মারুফ খন্দকার"), red designation badge ("নিকাহ রেজিস্ট্রার, ২৭ নং ওয়ার্ড").
- Right: bold green heading, paragraph, 3 green pill achievement badges.

## 8. Contact (`src/components/site/Contact.tsx`)
- Dark green `#004D38` bg, 3 transparent dark info cards (gold icons, white text): ঠিকানা | ফোন+ইমেইল (with prominent green WhatsApp button) | সেবার সময়.
- Full-width Google Map iframe below, gold border-top.

## 9. Floating WhatsApp (`src/components/site/FloatingWhatsApp.tsx`)
- 64px `#25D366` circle, white SVG, red pulsing notification dot top-right, hover scale + gold/green tooltip pill.

## 10. Footer (`src/components/site/Footer.tsx`)
- `#002E22` bg, 3-column layout:
  - Logo + gold tagline "বিশ্বাস ও অভিজ্ঞতার সাথে আপনার পাশে"
  - Quick links (light green hover gold)
  - Contact info
- Red separator line, bottom copyright in muted text + "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত".

## 11. Navbar (`src/components/site/Navbar.tsx`)
- Transparent over hero → solid cream/green on scroll (scroll listener).
- Gold accent under active link, mobile slide-in drawer with green bg + gold links.

## 12. Data (`src/lib/site-data.ts`)
- Update SERVICES to the new 9 items (icon + title + desc).
- Update WHY_US to 4 items aligned with new copy.
- Keep contact/WhatsApp constants.

## 13. Animations (utilities + small hook)
- Add `src/hooks/use-in-view.ts` (IntersectionObserver) for count-up and staggered reveals.
- Use Tailwind `animate-fade-in` + custom `.fade-up` keyframes; stagger via inline `style={{ animationDelay }}`.
- All buttons get `transition hover:scale-[1.05]`.

## Technical notes
- All colors defined as oklch tokens in `src/styles.css`; components reference `bg-primary`, `bg-accent`, `text-gold` etc. — no raw hex in JSX.
- Responsive: H1 uses `clamp(36px, 6vw, 64px)`; grids collapse 3→2→1.
- No backend changes; booking form remains client-side success message.
- Reuse existing photo `src/assets/kazi-maruf.jpg`.

## Out of scope
- No new routes, no CMS, no real form submission backend, no i18n toggle.
