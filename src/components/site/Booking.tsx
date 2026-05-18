import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, MessageCircle } from "lucide-react";

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
import { SERVICES, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/site-data";

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
});

type FormValues = z.infer<typeof schema>;

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  function onSubmit(_values: FormValues) {
    setSubmitted(true);
  }

  return (
    <section id="booking" className="bg-gradient-to-b from-primary/5 to-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            অ্যাপয়েন্টমেন্ট <span className="text-primary">বুক করুন</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-accent" />
          <p className="mt-4 text-muted-foreground">
            ফর্মটি পূরণ করুন — আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground">
                ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </h3>
              <p className="mt-3 text-muted-foreground">
                জরুরি প্রয়োজনে সরাসরি WhatsApp করুন: {WHATSAPP_DISPLAY}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp করুন
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
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>পূর্ণ নাম</FormLabel>
                      <FormControl>
                        <Input placeholder="আপনার পূর্ণ নাম" {...field} />
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
                      <FormLabel>মোবাইল নম্বর</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="01XXXXXXXXX" {...field} />
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
                      <FormLabel>সেবার ধরন</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
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
                      <FormLabel>পছন্দের তারিখ</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
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
                      <FormLabel>বার্তা / অতিরিক্ত তথ্য (ঐচ্ছিক)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="আপনার প্রয়োজন সম্পর্কে সংক্ষেপে লিখুন..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full text-base shadow-lg shadow-primary/20"
                >
                  অ্যাপয়েন্টমেন্ট নিশ্চিত করুন
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  জরুরি প্রয়োজনে সরাসরি WhatsApp করুন:{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    {WHATSAPP_DISPLAY}
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
