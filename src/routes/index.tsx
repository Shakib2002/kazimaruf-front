import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Booking } from "@/components/site/Booking";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "কাজী অফিস ফার্মগেট — বিশ্বস্ত বিবাহ ও তালাক রেজিস্ট্রেশন" },
      {
        name: "description",
        content:
          "সরকার অনুমোদিত কাজী অফিস ফার্মগেট। ২৬ বছরের অভিজ্ঞতায় ফার্মগেট, তেজগাঁও ও সংসদ এলাকায় শরীয়াহ সম্মত বিবাহ, তালাক ও নিকাহনামা সেবা।",
      },
      { property: "og:title", content: "কাজী অফিস ফার্মগেট" },
      {
        property: "og:description",
        content: "সরকার অনুমোদিত কাজী অফিস — ২৬ বছরের অভিজ্ঞতা।",
      },
      { property: "og:type", content: "website" },
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
        <Services />
        <WhyUs />
        <Booking />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
