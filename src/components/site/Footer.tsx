import { NAV_LINKS, PHONE_DISPLAY, WHATSAPP_DISPLAY, EMAIL } from "@/lib/site-data";
import brandLogo from "@/assets/brand-logo.webp";

export function Footer() {
  return (
    <footer className="bg-primary-darker text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={brandLogo}
                alt="কাজী অফিস ফার্মগেট লোগো"
                className="h-12 w-12 rounded-full object-contain ring-2 ring-gold/40"
              />
              <span className="text-2xl font-bold text-gold">
                কাজী অফিস ফার্মগেট
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mint">
              বিশ্বাস ও অভিজ্ঞতার সাথে আপনার পাশে — দীর্ঘ ২৬ বছর ধরে
              শরীয়াহ সম্মত সেবা প্রদান করে আসছি।
            </p>
            <p className="mt-4 inline-block rounded-full border border-gold/40 bg-primary-dark/60 px-3 py-1 text-xs font-semibold text-gold">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-mint transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
              যোগাযোগ
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-mint">
              <li>📞 ফোন: {PHONE_DISPLAY}</li>
              <li>💬 WhatsApp: {WHATSAPP_DISPLAY}</li>
              <li className="break-all">✉️ {EMAIL}</li>
              <li>📍 ১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট, তেজগাঁও, ঢাকা - ১২১৫</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-accent/70 pt-6 text-center">
          <p className="text-sm text-mint/80">
            © ২০২৫ কাজী অফিস ফার্মগেট। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
