# Testimonials section (গ্রাহকদের মন্তব্য)

WhyUs এর পরে, Booking এর আগে — একটি auto-scrolling carousel যেখানে ৬টি realistic Bengali review দেখা যাবে।

## Design

- **Background:** cream (`--background`) যাতে উপরের red Stats / নিচের booking এর সাথে contrast থাকে
- **Section header:** "গ্রাহকদের মন্তব্য" + gold underline + tagline "যাঁরা আমাদের সেবা নিয়েছেন"
- **Card design (Tailwind):**
  - White bg, `rounded-2xl`, soft gold border, subtle shadow
  - উপরে gold quote icon (`Quote` from lucide)
  - ৫টি gold star (`Star` filled)
  - Bengali review text (italic, leading-relaxed)
  - নিচে avatar circle (initial বা emoji) + name + service taken (e.g., "সুন্নাহ মোতাবেক বিবাহ — ২০২৩")
- **Carousel:**
  - 3 cards visible on desktop, 2 on tablet, 1 on mobile
  - Auto-scroll every 4 seconds with pause-on-hover
  - Navigation dots নিচে (gold active, muted inactive)
  - Prev/next chevron buttons পাশে (optional)
- **Decorative:** subtle paisley/Islamic pattern background 0.04 opacity

## Files

1. **`src/lib/site-data.ts`** — add `TESTIMONIALS` array (6 entries: name, location, service, rating, text, date)
2. **`src/components/site/Testimonials.tsx`** — new component. Use `embla-carousel-react` + `embla-carousel-autoplay` (already common in shadcn projects; will verify and install if missing). Fallback: pure CSS marquee-style transform with `setInterval` if user prefers no new dep.
3. **`src/routes/index.tsx`** — import and render `<Testimonials />` between `<WhyUs />` and `<Booking />`
4. **`src/lib/site-data.ts` NAV_LINKS** — optionally add `{ href: "#testimonials", label: "মন্তব্য" }` (will skip to keep nav clean unless requested)

## Sample reviews (Bengali, realistic)

1. **রহিম উদ্দিন** (ফার্মগেট, ঢাকা) — সুন্নাহ মোতাবেক বিবাহ, ২০২৩ — "আলহামদুলিল্লাহ, খুবই সুন্দরভাবে আমাদের বিবাহ সম্পন্ন হয়েছে। কাজী সাহেব অত্যন্ত অভিজ্ঞ ও আন্তরিক।"
2. **ফারহানা আক্তার** (তেজগাঁও) — কোর্ট ম্যারেজ, ২০২৪ — "দালাল ছাড়া সরাসরি অফিসে গিয়ে কাজ করিয়েছি। স্বচ্ছ ও নির্ভরযোগ্য সেবা পেয়েছি।"
3. **মোঃ ইমরান হোসেন** (সংসদ ভবন এলাকা) — সরকারি রেজিষ্ট্রেশন, ২০২৪ — "মাত্র ১ দিনে নিকাহনামা ও সার্টিফিকেট পেয়েছি। প্রবাসে যাওয়ার আগে এই দ্রুত সেবার জন্য কৃতজ্ঞ।"
4. **সাবরিনা ইসলাম** (মোহাম্মদপুর) — আরবি অনুবাদ ও এপোস্টেল, ২০২৩ — "সৌদি আরবে যাওয়ার জন্য সব ডকুমেন্ট সঠিকভাবে অনুবাদ ও সত্যায়ন করিয়ে দিয়েছেন।"
5. **আব্দুল করিম** (গ্রিন রোড) — তালাক পরামর্শ, ২০২৩ — "কঠিন সময়ে আইনি ও শরীয়াহ — উভয় দিক থেকে সঠিক পরামর্শ পেয়েছি। গোপনীয়তা শতভাগ রক্ষা করেছেন।"
6. **নুসরাত জাহান** (কারওয়ান বাজার) — সুন্নাহ মোতাবেক বিবাহ, ২০২৪ — "পরিবারের সবাই সন্তুষ্ট। কাজী অফিসের পরিবেশ ও আচরণ অত্যন্ত শাল