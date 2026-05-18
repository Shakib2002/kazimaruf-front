import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>🇧🇩</span>
          <span className="text-base font-bold leading-tight text-primary sm:text-lg">
            কাজী অফিস ফার্মগেট
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 sm:inline-flex"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card lg:hidden"
            aria-label="মেনু"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-border/60 bg-card" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-base font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp করুন
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
