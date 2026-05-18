import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle2, MessageCircle, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { SERVICES, WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const TIME_SLOTS = [
  "১০:০০ AM",
  "১২:০০ PM",
  "৩:০০ PM",
  "৫:০০ PM",
  "৭:০০ PM",
];

const REQUIREMENTS = [
  "জাতীয় পরিচয়পত্র (NID) — উভয়পক্ষ",
  "২ কপি পাসপোর্ট সাইজ ছবি — উভয়পক্ষ",
  "সাক্ষীগণের NID কপি (ন্যূনতম ২ জন)",
  "পূর্ব বিবাহিত হলে তালাকনামা / ডেথ সার্টিফিকেট",
];

const schema = z.object({
  name: z.string().trim().min(2, { message: "অনুগ্রহ করে পূর্ণ নাম লিখুন।" }).max(100),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+?88)?01[3-9]\d{8}$/, { message: "সঠিক BD মোবাইল নম্বর লিখুন (01XXXXXXXXX)।" }),
  service: z.string().min(1, { message: "একটি সেবা নির্বাচন করুন।" }),
  date: z.date({ required_error: "তারিখ নির্বাচন করুন।" }),
  time: z.string().min(1, { message: "সময় নির্বাচন করুন।" }),
  message: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

function buildWhatsAppLink(v: Partial<FormValues>) {
  const lines = [
    "আসসালামু আলাইকুম, আমি একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
    "",
    `নাম: ${v.name ?? ""}`,
    `মোবাইল: ${v.phone ?? ""}`,
    `সেবা: ${v.service ?? ""}`,
    v.date ? `তারিখ: ${format(v.date, "PPP")}` : "",
    v.time ? `সময়: ${v.time}` : "",
    v.message ? `বার্তা: ${v.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return `${WHATSAPP_URL}?text=${encodeURIComponent(lines)}`;
}

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", time: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmittedValues(values);
    setSubmitted(true);
    toast.success("অ্যাপয়েন্টমেন্ট রিকোয়েস্ট পাঠানো হয়েছে", {
      description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    });
  }

  return (
    <section id="booking" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">Appointment</span>
            <h2 className="mt-4 font-bold text-primary-dark">
              অ্যাপয়েন্টমেন্ট বুক করুন
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              ফর্মটি পূরণ করুন — আমরা ৩০ মিনিটের মধ্যে কনফার্ম করব। জরুরি প্রয়োজনে সরাসরি WhatsApp করুন।
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr,0.6fr]">
          {/* FORM */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
              <span className="absolute inset-x-0 top-0 h-1 bg-gold" aria-hidden />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", damping: 12 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success ring-4 ring-success/15"
                  >
                    <CheckCircle2 className="h-10 w-10" strokeWidth={2} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold text-primary-dark">
                    ধন্যবাদ! আপনার রিকোয়েস্ট গ্রহণ করা হয়েছে।
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    দ্রুত কনফার্মেশনের জন্য নিচের বাটনে চেপে WhatsApp এ বিস্তারিত পাঠান।
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppLink(submittedValues ?? {})}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-bold text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp এ কনফার্ম করুন
                    </a>
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-border px-6"
                      onClick={() => {
                        form.reset();
                        setSubmitted(false);
                        setSubmittedValues(null);
                      }}
                    >
                      নতুন অ্যাপয়েন্টমেন্ট
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">পূর্ণ নাম</FormLabel>
                            <FormControl>
                              <Input placeholder="আপনার পূর্ণ নাম" className="h-12 rounded-xl border-border focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">মোবাইল নম্বর</FormLabel>
                            <FormControl>
                              <Input type="tel" inputMode="tel" placeholder="01XXXXXXXXX" className="h-12 rounded-xl border-border font-display focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground">সেবার ধরন</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-border focus:ring-primary">
                                <SelectValue placeholder="একটি সেবা নির্বাচন করুন" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICES.map((s) => (
                                <SelectItem key={s.title} value={s.title}>
                                  {s.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-sm font-semibold text-foreground">পছন্দের তারিখ</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    className={cn(
                                      "h-12 w-full justify-start rounded-xl border-border text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {field.value ? format(field.value, "PPP") : "তারিখ নির্বাচন করুন"}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                  initialFocus
                                  className={cn("p-3 pointer-events-auto")}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">পছন্দের সময়</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-xl border-border focus:ring-primary">
                                  <SelectValue placeholder="সময় নির্বাচন করুন" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {TIME_SLOTS.map((t) => (
                                  <SelectItem key={t} value={t}>
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-foreground">বার্তা (ঐচ্ছিক)</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="আপনার প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন..."
                              className="rounded-xl border-border focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-soft disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          পাঠানো হচ্ছে...
                        </>
                      ) : (
                        <>অ্যাপয়েন্টমেন্ট নিশ্চিত করুন</>
                      )}
                    </button>

                    <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                      <ShieldCheck className="h-3.5 w-3.5 text-gold-deep" />
                      আপনার তথ্য সম্পূর্ণ গোপন রাখা হবে।
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>

          {/* SIDE: requirements + WA quick connect */}
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-3xl border border-border bg-secondary/40 p-7">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Checklist
              </div>
              <h3 className="mt-2 text-xl font-bold text-primary-dark">যা প্রয়োজন</h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-primary p-7 text-primary-foreground">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Quick Connect
              </div>
              <h3 className="mt-2 text-xl font-bold text-white">দ্রুত যোগাযোগ</h3>
              <p className="mt-3 text-sm leading-relaxed text-mint">
                ফর্ম পূরণ না করে সরাসরি WhatsApp বা ফোনেও কথা বলতে পারেন।
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-bold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/-/g, "")}`}
                className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-gold/40 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
              >
                ফোন · {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
