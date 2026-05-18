# Full Design Refinement Plan

আগের audit-এ পাওয়া ৭টা issue সব fix করব + professional scroll animations যোগ করব।

## কী কী fix হবে

### 1. Hero Section
- Primary CTA button বড় ও prominent (glow effect + larger padding)
- Secondary CTA visually subordinate
- "সরকার অনুমোদিত" trust badge hero-তে visible করব
- Hero text-এ subtle fade-in animation

### 2. About Section
- Image-এ clean rounded frame + soft shadow + gold border accent
- Background থেকে আলাদা করে pop করানো

### 3. Services Section (9 cards)
- First/featured card-কে highlight (gradient border, larger)
- Hover-এ icon subtle rotate/scale
- Cards scroll-এ stagger fade-in (একটার পর একটা)

### 4. Stats Counter
- Intersection Observer threshold কমিয়ে (0.1) দ্রুত trigger
- Number animation smooth করব

### 5. Section Transitions
- সব section-এ scroll-reveal (fade-in + slide-up) যোগ করব
- Custom hook `useScrollReveal` বানাব (IntersectionObserver based, no extra lib)

### 6. Testimonials
- Auto-rotating carousel (5s interval, hover-pause)
- Smooth slide transition

### 7. Booking Form
- Success state-এ checkmark scale-in animation
- Submit button-এ loading spinner polish

## Technical approach

```text
src/
├── hooks/
│   └── useScrollReveal.ts          [NEW] IntersectionObserver hook
├── components/site/
│   ├── Hero.tsx                    [EDIT] bigger CTA, trust badge, fade-in
│   ├── About.tsx                   [EDIT] image frame + shadow
│   ├── Services.tsx                [EDIT] featured card + stagger reveal
│   ├── Stats.tsx                   [EDIT] threshold fix
│   ├── Testimonials.tsx            [EDIT] auto-rotate carousel
│   └── Booking.tsx                 [EDIT] success animation
└── styles.css                      [EDIT] new keyframes (reveal-up, glow-pulse)
```

- কোনো external library install করব না — pure CSS animations + native IntersectionObserver
- সব color/shadow design tokens থেকে (`src/styles.css`)
- Mobile responsive বজায় থাকবে
- Build break হবে না — incremental edits

## সময়
আনুমানিক ৪০-৫০ মিনিট। সব শেষে preview screenshot দিয়ে verify করব।

Implement করতে চাইলে "Implement plan" চাপুন।
