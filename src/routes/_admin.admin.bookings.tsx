import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listBookings, updateBookingStatus } from "@/lib/admin.functions";
import { buildWhatsAppUrl, buildBookingWhatsAppMessage } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Loader2, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_admin/admin/bookings")({
  component: BookingsPage,
});

const STATUS_LABELS: Record<string, string> = {
  new: "নতুন",
  contacted: "যোগাযোগ হয়েছে",
  done: "সম্পন্ন",
  cancelled: "বাতিল",
};

const STATUS_VARIANTS: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  new: "default",
  contacted: "secondary",
  done: "outline",
  cancelled: "destructive",
};

function BookingsPage() {
  const fetchBookings = useServerFn(listBookings);
  const updateStatus = useServerFn(updateBookingStatus);
  const router = useRouter();

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["admin-bookings"],
    queryFn: () => fetchBookings(),
  });

  async function handleStatus(id: string, status: string) {
    try {
      await updateStatus({ data: { id, status: status as "new" } });
      toast.success("স্ট্যাটাস আপডেট হয়েছে");
      refetch();
    } catch (e) {
      toast.error("আপডেট ব্যর্থ");
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const bookings = data?.bookings ?? [];
  const newCount = bookings.filter((b) => b.status === "new").length;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">সকল অ্যাপয়েন্টমেন্ট</h1>
          <p className="text-sm text-muted-foreground">
            মোট {bookings.length} টি — {newCount} টি নতুন
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isFetching}>
          <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
          রিফ্রেশ
        </Button>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-2xl bg-card p-12 text-center text-muted-foreground ring-1 ring-border">
          এখনো কোনো অ্যাপয়েন্টমেন্ট নেই।
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => {
            const waUrl = buildWhatsAppUrl(
              buildBookingWhatsAppMessage({
                name: b.name,
                phone: b.phone,
                service: b.service,
                date: b.preferred_date,
                message: b.message ?? undefined,
              }),
            );
            return (
              <div
                key={b.id}
                className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold">{b.name}</h3>
                      <Badge variant={STATUS_VARIANTS[b.status] ?? "default"}>
                        {STATUS_LABELS[b.status] ?? b.status}
                      </Badge>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                      <div>
                        <strong className="text-foreground">সেবা:</strong> {b.service}
                      </div>
                      <div>
                        <strong className="text-foreground">পছন্দের তারিখ:</strong>{" "}
                        {b.preferred_date}
                      </div>
                      <div>
                        <strong className="text-foreground">ফোন:</strong>{" "}
                        <a href={`tel:${b.phone}`} className="text-primary hover:underline">
                          {b.phone}
                        </a>
                      </div>
                      <div>
                        <strong className="text-foreground">পাঠানো হয়েছে:</strong>{" "}
                        {format(new Date(b.created_at), "PPpp")}
                      </div>
                    </div>
                    {b.message && (
                      <p className="mt-3 rounded-lg bg-muted/50 p-3 text-sm">
                        <strong>বার্তা:</strong> {b.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-stretch gap-2 sm:w-56">
                    <Button asChild size="sm" variant="outline">
                      <a href={`tel:${b.phone}`}>
                        <Phone className="h-4 w-4" /> কল করুন
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
                    >
                      <a href={waUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </Button>
                    <Select
                      value={b.status}
                      onValueChange={(v) => handleStatus(b.id, v)}
                    >
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">নতুন</SelectItem>
                        <SelectItem value="contacted">যোগাযোগ হয়েছে</SelectItem>
                        <SelectItem value="done">সম্পন্ন</SelectItem>
                        <SelectItem value="cancelled">বাতিল</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
