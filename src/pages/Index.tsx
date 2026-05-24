import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Booking } from "@/components/site/Booking";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";
import { Footer } from "@/components/site/Footer";
import heroWedding from "@/assets/hero-wedding.webp";

export default function Index() {
  useEffect(() => {
    // Preload hero image
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroWedding;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Helmet>
        <link rel="canonical" href={`${origin}/`} />
        <meta property="og:url" content={`${origin}/`} />
      </Helmet>
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
      <MobileStickyCTA />
    </div>
  );
}
