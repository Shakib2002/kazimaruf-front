import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  const url =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : "";
  return (
    <>
      <Helmet>
        <title>পেইজটি পাওয়া যায়নি (৪০৪) | কাজী অফিস ফার্মগেট</title>
        <meta name="description" content="আপনি যে পেইজটি খুঁজছেন সেটি বিদ্যমান নেই বা সরিয়ে নেওয়া হয়েছে। কাজী অফিস ফার্মগেটের হোমে ফিরে যান।" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content="পেইজটি পাওয়া যায়নি (৪০৪) | কাজী অফিস ফার্মগেট" />
        <meta property="og:description" content="আপনি যে পেইজটি খুঁজছেন সেটি বিদ্যমান নেই।" />
        <meta name="twitter:title" content="পেইজটি পাওয়া যায়নি (৪০৪) | কাজী অফিস ফার্মগেট" />
        <meta name="twitter:description" content="আপনি যে পেইজটি খুঁজছেন সেটি বিদ্যমান নেই।" />
      </Helmet>
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
    </>
  );
}
