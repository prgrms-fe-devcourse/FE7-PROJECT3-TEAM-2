import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  const redirectBase = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (error) {
    console.error("Auth redirect error:", error);
    return NextResponse.redirect(`${redirectBase}/auth?error=${error}`);
  }

  if (code) {
    const supabase = await createClient();

    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

    if (exchangeError) {
      console.error("Supabase exchange failed:", exchangeError.message);
      return NextResponse.redirect(`${redirectBase}/auth?error=exchange_failed`);
    }

    return NextResponse.redirect(`${redirectBase}/`);
  }

  return NextResponse.redirect(`${redirectBase}/auth?error=missing_code`);
}
