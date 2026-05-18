import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-lg shadow-[0_1px_0_rgba(11,61,46,0.04)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            className={cn(
              "flex items-center gap-2.5 transition-colors",
              scrolled ? "text-primary" : "text-white",
            )}
          >
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-display font-bold transition-colors",
                scrolled ? "bg-primary text-gold" : "bg-white/10 text-gold ring-1 ring-gold/40",
              )}
              aria-hidden
            >
              ك
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold sm:text-base">কাজী অফিস ফার্মগেট</span>
              <span
                className={cn(
                  "mt-1 font-display text-[10px] tracking-[0.18em]",
                  scrolled ? "text-muted-foreground" : "text-gold/80",
                )}
              >
                EST. 1999 · GOVT. APPROVED
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm font-semibold transition-colors",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full",
                  scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-gold",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`}
              className={cn(
                "hidden h-10 items-center gap-2 text-sm font-semibold font-display transition-colors md:inline-flex",
                scrolled ? "text-primary hover:text-gold-deep" : "text-white hover:text-gold",
              )}
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#booking"
              className="hidden h-11 items-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-primary-darker shadow-sm transition-all hover:bg-gold-soft hover:shadow-md sm:inline-flex"
            >
              অ্যাপয়েন্টমেন্ট
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
                scrolled
                  ? "bg-primary text-gold"
                  : "bg-white/10 text-white ring-1 ring-white/30",
              )}
              aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-30 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-primary-darker/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background pt-24 transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-1 flex-col gap-1 px-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-semibold text-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="border-t border-border px-6 py-6">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-gold text-sm font-bold text-primary-darker"
            >
              অ্যাপয়েন্টমেন্ট বুক করুন
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-primary text-sm font-bold text-primary"
            >
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
