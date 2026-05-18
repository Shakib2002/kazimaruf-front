import avatarRahim from "@/assets/avatar-rahim.jpg";
import avatarFarhana from "@/assets/avatar-farhana.jpg";
import avatarImran from "@/assets/avatar-imran.jpg";
import avatarSabrina from "@/assets/avatar-sabrina.jpg";
import avatarKarim from "@/assets/avatar-karim.jpg";
import avatarNusrat from "@/assets/avatar-nusrat.jpg";

export const WHATSAPP_NUMBER = "8801818090938";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = "01818-090938";
export const PHONE_DISPLAY = "01757-778186";
export const EMAIL = "kazipmm@gmail.com";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildBookingWhatsAppMessage(input: {
  name: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
}): string {
  return [
    "আসসালামু আলাইকুম। আমি অ্যাপয়েন্টমেন্ট নিতে চাই।",
    "",
    `নাম: ${input.name}`,
    `ফোন: ${input.phone}`,
    `সেবা: ${input.service}`,
    `পছন্দের তারিখ: ${input.date}`,
    input.message ? `বার্তা: ${input.message}` : "",
    "",
    "ধন্যবাদ।",
  ]
    .filter(Boolean)
    .join("\n");
}

export const NAV_LINKS = [
  { href: "#home", label: "হোম" },
  { href: "#services", label: "সেবাসমূহ" },
  { href: "#about", label: "আমাদের সম্পর্কে" },
  { href: "#booking", label: "অ্যাপয়েন্টমেন্ট" },
  { href: "#contact", label: "যোগাযোগ" },
];

export const SERVICES = [
  { icon: "💍", title: "সুন্নাহ মোতাবেক বিবাহ", desc: "ইসলামী শরীয়াহ অনুসারে পূর্ণাঙ্গ ও বরকতময় বিবাহ অনুষ্ঠান।" },
  { icon: "⚖️", title: "কোর্ট ম্যারেজ", desc: "আইনগতভাবে স্বীকৃত হলফনামাসহ দ্রুত কোর্ট ম্যারেজ সেবা।" },
  { icon: "📜", title: "সরকারি রেজিষ্ট্রেশন", desc: "সরকার অনুমোদিত বিবাহ ও তালাক নিবন্ধন।" },
  { icon: "📋", title: "নিকাহনামা ও ম্যারেজ সার্টিফিকেট", desc: "বাংলা ও ইংরেজি উভয় ভাষায় প্রামাণিক সনদ।" },
  { icon: "🌐", title: "আরবি অনুবাদ ও এপোস্টেল", desc: "পররাষ্ট্র মন্ত্রণালয়ের সত্যায়নসহ আরবি অনুবাদ।" },
  { icon: "✈️", title: "ভিসা ও ইমিগ্রেশন সার্টিফিকেট", desc: "প্রবাসী ও বিদেশগামীদের জন্য প্রয়োজনীয় সনদ।" },
  { icon: "📝", title: "ধর্মান্তর হলফনামা", desc: "অ্যাফিডেভিটসহ ধর্মান্তরের সকল আনুষ্ঠানিকতা।" },
  { icon: "🤝", title: "তালাক ও বিবাহ বিচ্ছেদ পরামর্শ", desc: "মুসলিম পারিবারিক আইনে অভিজ্ঞ পরামর্শ।" },
  { icon: "🔏", title: "শতভাগ গোপনীয়তা নিশ্চিত", desc: "আপনার তথ্য সম্পূর্ণ সুরক্ষিত ও গোপন।" },
];

export const WHY_US = [
  { icon: "🏅", title: "২৬ বছরের নির্ভরযোগ্যতা", desc: "দীর্ঘ অভিজ্ঞতায় হাজারো পরিবারের আস্থা অর্জন।" },
  { icon: "🛡️", title: "দালাল ও হ্যাসেলমুক্ত সেবা", desc: "সরাসরি কাজীর সঙ্গে স্বচ্ছ ও সৎ লেনদেন।" },
  { icon: "📿", title: "শতভাগ আইনি ও শরীয়াহ সম্মত", desc: "সরকার ও শরীয়াহ — উভয়ের অনুমোদনে পরিচালিত।" },
  { icon: "⚡", title: "জরুরি ও প্রবাসী সেবায় অগ্রাধিকার", desc: "দ্রুত প্রক্রিয়াকরণ ও ২৪/৭ সহযোগিতা।" },
];

export const STATS = [
  { value: 26, suffix: "+", label: "বছর অভিজ্ঞতা" },
  { value: 10000, suffix: "+", label: "সফল বিবাহ" },
  { value: 100, suffix: "%", label: "গোপনীয়তা" },
  { value: 24, suffix: "/৭", label: "সেবা" },
];

export const TESTIMONIALS = [
  {
    name: "রহিম উদ্দিন",
    avatar: avatarRahim,
    location: "ফার্মগেট, ঢাকা",
    service: "সুন্নাহ মোতাবেক বিবাহ",
    year: "২০২৩",
    rating: 5,
    text: "আলহামদুলিল্লাহ, খুবই সুন্দরভাবে আমাদের বিবাহ সম্পন্ন হয়েছে। কাজী সাহেব অত্যন্ত অভিজ্ঞ ও আন্তরিক। পরিবারের সবাই সন্তুষ্ট।",
  },
  {
    name: "ফারহানা আক্তার",
    avatar: avatarFarhana,
    location: "তেজগাঁও",
    service: "কোর্ট ম্যারেজ",
    year: "২০২৪",
    rating: 5,
    text: "দালাল ছাড়া সরাসরি অফিসে গিয়ে কাজ করিয়েছি। স্বচ্ছ ও নির্ভরযোগ্য সেবা পেয়েছি। কোনো হিডেন চার্জ নেই।",
  },
  {
    name: "মোঃ ইমরান হোসেন",
    avatar: avatarImran,
    location: "সংসদ ভবন এলাকা",
    service: "সরকারি রেজিষ্ট্রেশন",
    year: "২০২৪",
    rating: 5,
    text: "মাত্র ১ দিনে নিকাহনামা ও সার্টিফিকেট পেয়েছি। প্রবাসে যাওয়ার আগে এই দ্রুত সেবার জন্য কৃতজ্ঞ।",
  },
  {
    name: "সাবরিনা ইসলাম",
    avatar: avatarSabrina,
    location: "মোহাম্মদপুর",
    service: "আরবি অনুবাদ ও এপোস্টেল",
    year: "২০২৩",
    rating: 5,
    text: "সৌদি আরবে যাওয়ার জন্য সব ডকুমেন্ট সঠিকভাবে অনুবাদ ও সত্যায়ন করিয়ে দিয়েছেন। পররাষ্ট্র মন্ত্রণালয়ের কাজও দ্রুত হয়েছে।",
  },
  {
    name: "আব্দুল করিম",
    avatar: avatarKarim,
    location: "গ্রিন রোড",
    service: "তালাক পরামর্শ",
    year: "২০২৩",
    rating: 5,
    text: "কঠিন সময়ে আইনি ও শরীয়াহ — উভয় দিক থেকে সঠিক পরামর্শ পেয়েছি। গোপনীয়তা শতভাগ রক্ষা করেছেন।",
  },
  {
    name: "নুসরাত জাহান",
    avatar: avatarNusrat,
    location: "কারওয়ান বাজার",
    service: "সুন্নাহ মোতাবেক বিবাহ",
    year: "২০২৪",
    rating: 5,
    text: "কাজী অফিসের পরিবেশ ও আচরণ অত্যন্ত শালীন ও পেশাদার। সম্পূর্ণ শরীয়াহ মেনে বিবাহ সম্পন্ন হয়েছে।",
  },
];
