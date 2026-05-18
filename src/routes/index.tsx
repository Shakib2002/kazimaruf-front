import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "কাজী অফিস ফার্মগেট — সরকার অনুমোদিত বিবাহ ও আইনি সেবা";
const DESCRIPTION =
  "সরকার অনুমোদিত কাজী অফিস ফার্মগেট। ২৬+ বছরের অভিজ্ঞতায় ফার্মগেট, তেজগাঁও ও সংসদ এলাকায় শরীয়াহ সম্মত বিবাহ, কোর্ট ম্যারেজ, তালাক ও নিকাহনামা সেবা।";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "কাজী অফিস, ফার্মগেট, বিবাহ রেজিস্ট্রেশন, কোর্ট ম্যারেজ, নিকাহনামা, তেজগাঁও, kazi office Dhaka" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "bn_BD" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: "/src/assets/kazi-portrait.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LegalService", "LocalBusiness"],
          name: "কাজী অফিস ফার্মগেট",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট, কক্ষ নং-৩৩",
            addressLocality: "Tejgaon",
            addressRegion: "Dhaka",
            postalCode: "1215",
            addressCountry: "BD",
          },
          telephone: "+8801757778186",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "09:00",
              closes: "22:00",
            },
          ],
          areaServed: ["Farmgate", "Tejgaon", "Sangsad Bhaban Area", "Dhaka"],
          priceRange: "৳৳",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}
