## Plan: Email-only Booking (No Admin Dashboard)

কেউ appointment নিলে kazi সাহেবের email-এ সব details চলে যাবে। কোনো admin login/dashboard লাগবে না।

### যা যা করব

**1. Booking flow simplify**
- `src/components/site/Booking.tsx` — form submit হলে `submitBooking` server function call হবে (already wired)
- Success হলে user-কে WhatsApp pre-filled link দেখাব (already done)

**2. Email notification (Resend)**
- `src/lib/booking.functions.ts` already configured — Resend দিয়ে email পাঠাচ্ছে
- Email content নিশ্চিত করব: নাম, ফোন, service, preferred date, message — সবগুলো সুন্দর Bengali HTML template এ
- `BOOKING_NOTIFY_EMAIL` (kazi সাহেবের mail) এ যাবে
- From: `onboarding@resend.dev` (instant works)

**3. Database (rakhbo, but no admin UI)**
- `bookings` table থাকবে — backup হিসেবে data store হবে (email fail করলেও data থাকবে)
- RLS: শুধু public insert allowed, কেউ read করতে পারবে না

**4. Cleanup — admin জিনিসপত্র সরাব**
- `src/routes/_admin.tsx` delete
- `src/routes/_admin.admin.bookings.tsx` delete
- `src/routes/admin.login.tsx` delete
- `src/lib/admin.functions.ts` delete
- `user_roles` table-related code unused হয়ে যাবে (table থাকতে পারে, harm নাই)

**5. Testing**
- Form submit করে verify email আসছে কিনা check করব (server function logs দিয়ে)

### যা lagবে না
- Admin login
- Supabase Auth setup
- Google sign-in
- Admin dashboard route

### Confirm করুন
- `BOOKING_NOTIFY_EMAIL` already set আছে — সেটাই use করব, ঠিক আছে?
- Approve করলে implement শুরু করি।
