import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("OAuth exchange failed:", error.message);
      return NextResponse.redirect(new URL("/error", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}
