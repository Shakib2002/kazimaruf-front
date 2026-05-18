import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Loader2, MessageCircle } from "lucide-react";

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
import {
  SERVICES,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
  buildBookingWhatsAppMessage,
} from "@/lib/site-data";
import { submitBooking } from "@/lib/booking.functions";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "অনুগ্রহ করে পূর্ণ নাম লিখুন।" })
    .max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, { message: "সঠিক মোবাইল নম্বর লিখুন।" }),
  service: z.string().min(1, { message: "একটি সেবা নির্বাচন করুন।" }),
  date: z.date({ required_error: "তারিখ নির্বাচন করুন।" }),
  message: z.string().max(1000).optional(),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string>(WHATSAPP_URL);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", message: "", website: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    try {
      const dateStr = format(values.date, "yyyy-MM-dd");
      await submitBooking({
        data: {
          name: values.name,
          phone: values.phone,
          service: values.service,
          preferred_date: dateStr,
          message: values.message || null,
          website: values.website || null,
        },
      });

      const wa = buildWhatsAppUrl(
        buildBookingWhatsAppMessage({
          name: values.name,
          phone: values.phone,
          service: values.service,
          date: format(values.date, "PPP"),
          message: values.message,
        }),
      );
      setWaLink(wa);
      setSubmitted(true);
      toast.success("আপনার অ্যাপয়েন্টমেন্ট রিকোয়েস্ট পাঠানো হয়েছে!");
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "কিছু একটা ভুল হয়েছে। সরাসরি WhatsApp-এ যোগাযোগ করুন।";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
      }}
    >
      <div className="islamic-pattern-strong absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-gold/40 bg-primary-darker/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold">
            অ্যাপয়েন্টমেন্ট
          </span>
          <h2 className="gold-underline mt-4 font-bold text-gold">
            অ্যাপয়েন্টমেন্ট বুক করুন
          </h2>
          <p className="mt-6 text-base text-mint">
            ফর্মটি পূরণ করুন — আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-gold/30 sm:p-10">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="pop-in mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary ring-4 ring-primary/10">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h3 className="fade-up mt-5 text-2xl font-bold text-primary-dark" style={{ animationDelay: "0.2s" }}>
                ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </h3>
              <p className="mt-3 text-muted-foreground">
                দ্রুত নিশ্চিতকরণের জন্য WhatsApp-এ ও বার্তা পাঠাতে পারেন: {WHATSAPP_DISPLAY}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
                >
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp-এ পাঠান
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setSubmitted(false);
                  }}
                >
                  নতুন অ্যাপয়েন্টমেন্ট
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot — invisible to humans */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                  <label>
                    Website
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...form.register("website")}
                    />
                  </label>
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-primary-dark">পূর্ণ নাম</FormLabel>
                      <FormControl>
                        <Input placeholder="আপনার পূর্ণ নাম" className="h-11 focus-visible:ring-primary" {...field} />
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
                      <FormLabel className="font-semibold text-primary-dark">মোবাইল নম্বর</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="01XXXXXXXXX" className="h-11 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-primary-dark">সেবার ধরন</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11 focus:ring-primary">
                            <SelectValue placeholder="একটি সেবা নির্বাচন করুন" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.title} value={s.title}>
                              {s.icon} {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-semibold text-primary-dark">পছন্দের তারিখ</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                "h-11 w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value
                                ? format(field.value, "PPP")
                                : "তারিখ নির্বাচন করুন"}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-primary-dark">বার্তা (ঐচ্ছিক)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="আপনার প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন..."
                          className="focus-visible:ring-primary"
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
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gold text-base font-bold text-primary-darker shadow-xl shadow-gold/30 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    "অ্যাপয়েন্টমেন্ট নিশ্চিত করুন"
                  )}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  অথবা সরাসরি{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: "var(--gold)" }}
                  >
                    WhatsApp করুন →
                  </a>
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
