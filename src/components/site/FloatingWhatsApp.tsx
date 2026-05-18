import { WHATSAPP_URL } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp এ যোগাযোগ করুন"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl shadow-whatsapp/40 transition-transform hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp opacity-60"
        aria-hidden
      />
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current sm:h-8 sm:w-8"
        aria-hidden
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.66a11.85 11.85 0 0 0 5.72 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.07 21.8h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.84 9.84 0 0 1-1.5-5.24c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        WhatsApp এ যোগাযোগ করুন
      </span>
    </a>
  );
}
