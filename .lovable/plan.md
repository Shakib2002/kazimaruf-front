# Hero ব্যাকগ্রাউন্ডে বিবাহের ছবি যোগ করা

ব্যবহারকারীর আপলোড করা বিবাহের ছবিটি Hero সেকশনের ব্যাকগ্রাউন্ডে বসানো হবে — উপরে গাঢ় সবুজ overlay দিয়ে যেন headline ও CTA গুলো পরিষ্কার পড়া যায় এবং festive wedding feel বজায় থাকে।

## পরিবর্তনসমূহ

### 1. Asset যোগ
- `user-uploads://image-3.png` → `src/assets/hero-wedding.jpg` কপি করা হবে।

### 2. `src/components/site/Hero.tsx` আপডেট
- নতুন import: `heroWedding from "@/assets/hero-wedding.jpg"`
- Section এ background image হিসেবে `<img>` element যোগ করা হবে:
  - `absolute inset-0 h-full w-full object-cover`
  - `opacity-30` (যেন overlay-এর সাথে blend হয়)
- উপরে multi-layer overlay:
  - Base deep-green tint: `bg-primary/85`
  - Gradient vignette: উপর থেকে নিচে `from-primary-darker/70 via-primary/60 to-primary-darker/85` — যাতে text এর কনট্রাস্ট ভালো থাকে
  - Existing islamic-pattern overlay opacity একটু কমিয়ে `0.05` করা হবে যেন ছবি দেখা যায়
- বিদ্যমান glow (accent + gold blur circles) রাখা হবে — festive accents হিসেবে।
- Headline, subtext, CTA, trust badges অপরিবর্তিত — শুধু drop-shadow সামান্য যোগ যাতে readability নিশ্চিত হয়।

### 3. Responsive ও Performance
- Image এ `loading="eager"` এবং `fetchpriority="high"` (LCP element)
- `object-position: center` — মোবাইলে কাপলের মুখ ফ্রেমে থাকবে
- কোনো নতুন dependency বা বড় refactor নেই।

## যা পরিবর্তন হবে না
- Color palette, typography, অন্যান্য সেকশন — সব আগের মতই থাকবে।
- Hero এর গঠন, button, badges, govt logo eyebrow — অপরিবর্তিত।
