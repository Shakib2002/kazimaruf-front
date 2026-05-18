# Update Kazi name and add photo

## Changes

1. **Add photo asset**
   - Copy `user-uploads://image.png` → `src/assets/kazi-maruf.jpg`

2. **Update `src/components/site/About.tsx`**
   - Replace the gradient placeholder card with the actual photo of the Kazi.
   - Wrap the image in a rounded card with a subtle green/red accent border and the islamic-pattern decoration behind it, preserving the current visual style.
   - Update the Kazi name from **কাজী মারুফ হোসেন** to **মাওঃ মারুফ খন্দকার**.
   - Keep the "সরকার অনুমোদিত কাজী" label and ward/role caption beneath the photo.

3. **Update `src/lib/site-data.ts`** (if name referenced — currently it is not, but double-check) and any other place using the old name.

No other content, layout, or color changes.
