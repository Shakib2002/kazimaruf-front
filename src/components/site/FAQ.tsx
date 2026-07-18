import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FAQ_DATA = [
  {
    question: "ফার্মগেটে কাজী অফিস কোথায়?",
    questionEn: "Where is the Kazi Office in Farmgate, Dhaka?",
    answer:
      "কাজী অফিস ফার্মগেটের ঠিকানা: ১৪৫, এয়ারপোর্ট রোড সুপার মার্কেট, তেজগাঁও, ঢাকা - ১২১৫। ফার্মগেট, মণিপুরী পাড়া, শেরেবাংলা নগর, জাতীয় সংসদ এলাকা, আগারগাঁও ও তেজগাঁও এলাকায় সেবা প্রদান করা হয়। ফোন: ০১৮১৮-০৯০৯৩৮।",
  },
  {
    question: "বিবাহ রেজিস্ট্রেশন করতে কি কি লাগে?",
    questionEn: "What documents are needed for marriage registration in Bangladesh?",
    answer:
      "বিবাহ রেজিস্ট্রেশনের জন্য প্রয়োজন: বর ও কনের জাতীয় পরিচয়পত্র (NID), ২ কপি পাসপোর্ট সাইজ ছবি, বর পক্ষের ২ জন ও কনে পক্ষের ২ জন সাক্ষী (NID সহ), কাবিন নামার স্ট্যাম্প ও ফি। বিস্তারিত জানতে ০১৮১৮-০৯০৯৩৮ নম্বরে যোগাযোগ করুন।",
  },
  {
    question: "কোর্ট ম্যারেজ করতে কত সময় লাগে?",
    questionEn: "How long does court marriage take in Dhaka?",
    answer:
      "কোর্ট ম্যারেজ সাধারণত ১ দিনেই সম্পন্ন করা সম্ভব। প্রয়োজনীয় কাগজপত্র (NID, পাসপোর্ট সাইজ ছবি, জন্ম সনদ, নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা) ও সাক্ষী নিয়ে আসলে একই দিনে হলফনামাসহ কোর্ট ম্যারেজ সম্পন্ন হয়।",
  },
  {
    question: "তালাক রেজিস্ট্রেশন কিভাবে করতে হয়?",
    questionEn: "How does divorce registration work in Bangladesh?",
    answer:
      "মুসলিম পারিবারিক আইন অনুযায়ী তালাক রেজিস্ট্রেশনের জন্য নির্ধারিত ফর্মে আবেদন, চেয়ারম্যান/কাউন্সিলরের কাছে নোটিশ প্রদান এবং ৯০ দিনের নোটিশ পিরিয়ড অনুসরণ করতে হয়। আমরা সম্পূর্ণ আইনি প্রক্রিয়ায় ও শতভাগ গোপনীয়তার সাথে সহায়তা করি।",
  },
  {
    question: "নিকাহনামা হারিয়ে গেলে কি করতে হবে?",
    questionEn: "How to get a duplicate nikah-nama in Bangladesh?",
    answer:
      "নিকাহনামা হারিয়ে গেলে সংশ্লিষ্ট কাজী অফিস থেকে সত্যায়িত কপি (certified copy) সংগ্রহ করা যায়। আমাদের অফিসে রেজিস্ট্রেশনকৃত সকল নিকাহনামার রেকর্ড সংরক্ষিত আছে। ফোন করুন: ০১৮১৮-০৯০৯৩৮।",
  },
  {
    question: "আরবি অনুবাদ ও এপোস্টেল সেবা কি পাওয়া যায়?",
    questionEn: "Do you provide Arabic translation and apostille services?",
    answer:
      "হ্যাঁ, আমরা বিবাহ সনদ ও অন্যান্য দলিলের আরবি অনুবাদ এবং পররাষ্ট্র মন্ত্রণালয়ের সত্যায়ন (apostille) সেবা প্রদান করি। মধ্যপ্রাচ্যে যাওয়া বা বসবাসের জন্য এই সেবা অত্যন্ত প্রয়োজনীয়।",
  },
  {
    question: "প্রবাসীদের জন্য কি বিশেষ সেবা আছে?",
    questionEn: "Do you offer services for expatriates and NRBs?",
    answer:
      "হ্যাঁ, প্রবাসী ও বিদেশগামী বাংলাদেশীদের জন্য দ্রুত সেবা (fast-track), আরবি অনুবাদ, এপোস্টেল, ভিসা ও ইমিগ্রেশন সার্টিফিকেট সেবা অগ্রাধিকারের ভিত্তিতে প্রদান করা হয়। ২৪/৭ WhatsApp এ যোগাযোগ করতে পারেন।",
  },
  {
    question: "অফিসের সময়সূচী কি?",
    questionEn: "What are the office hours of Kazi Office Farmgate?",
    answer:
      "আমরা সপ্তাহের ৭ দিন সকাল ৯টা থেকে রাত ৯টা পর্যন্ত সেবা প্রদান করি। জরুরি প্রয়োজনে ২৪/৭ ফোন ও WhatsApp এ যোগাযোগ করা যায়: ০১৮১৮-০৯০৯৩৮।",
  },
];

export function FAQ() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="relative bg-background py-20 sm:py-28"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="islamic-pattern absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal-up mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <HelpCircle className="h-4 w-4" />
            সচরাচর জিজ্ঞাসা
          </span>
          <h2 className="gold-underline mt-4 font-bold text-primary-dark">
            প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            বিবাহ রেজিস্ট্রেশন, কোর্ট ম্যারেজ ও কাজী সেবা সম্পর্কে সাধারণ প্রশ্ন ও উত্তর।
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={i}
                className="group overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-primary/5"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-base font-bold text-primary-dark sm:text-lg"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    {/* Hidden English text for SEO crawlers */}
                    <span className="sr-only">{faq.questionEn}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="border-t border-primary/10 px-6 py-5">
                    <p
                      className="text-sm leading-relaxed text-foreground/80 sm:text-base"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            আরো প্রশ্ন আছে? আমাদের সাথে যোগাযোগ করুন —
          </p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  );
}
