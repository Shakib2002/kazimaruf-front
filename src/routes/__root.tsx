import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";

const SITE_NAME = "কাজী অফিস ফার্মগেট";
const SITE_TITLE = "কাজী অফিস ফার্মগেট — বিশ্বস্ত বিবাহ ও তালাক রেজিস্ট্রেশন সেবা";
const SITE_DESC =
  "ফার্মগেট, ঢাকায় ২৬ বছরের অভিজ্ঞ ও সরকার-অনুমোদিত কাজী অফিস। সুন্নাহ মোতাবেক বিবাহ, কোর্ট ম্যারেজ, নিকাহনামা, তালাক, আরবি অনুবাদ ও এপোস্টেল সেবা — শতভাগ গোপনীয়তা ও দালাল-মুক্ত।";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE_NAME,
  description: SITE_DESC,
  image: "/og-image.jpg",
  telephone: "+8801818090938",
  priceRange: "৳৳",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ফার্মগেট",
    addressLocality: "তেজগাঁও, ঢাকা",
    addressRegion: "ঢাকা",
    addressCountry: "BD",
  },
  areaServed: { "@type": "City", name: "Dhaka" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "6",
  },
  serviceType: [
    "সুন্নাহ মোতাবেক বিবাহ",
    "কোর্ট ম্যারেজ",
    "সরকারি রেজিষ্ট্রেশন",
    "নিকাহনামা",
    "আরবি অনুবাদ ও এপোস্টেল",
    "তালাক ও বিবাহ বিচ্ছেদ পরামর্শ",
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">৪০৪</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">পেইজটি পাওয়া যায়নি</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনি যে পেইজটি খুঁজছেন সেটি বিদ্যমান নেই বা সরিয়ে নেওয়া হয়েছে।
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            হোমে ফিরুন
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          পেইজটি লোড হয়নি
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          কিছু একটা ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা হোমে ফিরে যান।
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            আবার চেষ্টা করুন
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            হোমে ফিরুন
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: SITE_NAME },
      { name: "keywords", content: "কাজী অফিস, ফার্মগেট, বিবাহ রেজিস্ট্রেশন, কোর্ট ম্যারেজ, নিকাহনামা, তালাক, ঢাকা কাজী, kazi office farmgate, marriage registration dhaka" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "bn_BD" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "theme-color", content: "#0f5132" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
