import { createFileRoute, Outlet, redirect, Link, useRouter } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { checkIsAdmin } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/_admin")({
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/admin/login" });
    }
    try {
      const { isAdmin } = await checkIsAdmin();
      if (!isAdmin) {
        throw redirect({ to: "/admin/login", search: { error: "no-access" } as never });
      }
    } catch {
      throw redirect({ to: "/admin/login", search: { error: "no-access" } as never });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const router = useRouter();
  async function handleLogout() {
    await supabase.auth.signOut();
    router.navigate({ to: "/admin/login" });
  }
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/admin/bookings" className="text-lg font-bold">
            🕌 কাজী অফিস — অ্যাডমিন
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" /> লগআউট
          </Button>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
