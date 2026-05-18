# Hero ব্যাকগ্রাউন্ড ছবি দৃশ্যমান করা

বর্তমানে overlay অনেক বেশি গাঢ় হওয়ায় বিবাহের ছবি প্রায় দেখাই যাচ্ছে না। ছবির ছায়া কোনোমতে বোঝা যায় — festive feel আসছে না।

## ঠিক করার পরিকল্পনা

`src/components/site/Hero.tsx`-এ overlay গুলো হালকা করব যাতে ছবি স্পষ্ট দেখা যায়, কিন্তু text এর readability বজায় থাকে।

### পরিবর্তন
1. **Image opacity**: `35%` → `100%` (পুরো ছবি দেখাবে)
2. **Green tint layer**: `bg-primary/75` সরিয়ে দেব — সরাসরি gradient দিয়ে control করব
3. **Gradient vignette**: শুধু উপরে ও নিচে গাঢ়, মাঝখানে অনেকটা transparent — যেন কাপলের মুখ স্পষ্ট দেখা যায়:
   - উপরে: `primary-darker/85` (navbar এর জন্য contrast)
   - মাঝে: `primary-darker/15