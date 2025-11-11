import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function protectLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    redirect("/login");
  }

  return <>{children}</>;
}
