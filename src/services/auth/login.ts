import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";

export async function signInWithPassword(email: string, password: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    if (process.env.NODE_ENV === "development") console.error(error);

    return {
      ok: false,
      message: "이메일 또는 비밀번호가 올바르지 않습니다.",
    };
  }
  if (!data.user?.email_confirmed_at) {
    return { ok: false, message: "이메일 인증이 되지 않았습니다" };
  }
  redirect(`/`);
}

export async function signInWithOAuth(provider: Provider, redirectUrl: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/oauth/callback` : redirectUrl,
    },
  });
  if (error && process.env.NODE_ENV === "development") console.error(error);
}

export const signInWithGithub = async () => signInWithOAuth("github", "http://localhost:3000/oauth/callback");
export const signInWithKakao = async () => signInWithOAuth("kakao", "http://localhost:3000/oauth/callback");
export const signInWithGoogle = async () => signInWithOAuth("google", "http://localhost:3000/oauth/callback");
