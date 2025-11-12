import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";

export async function signInWithPassword(email: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error && process.env.NODE_ENV === "development") console.error(error);
  if (data && !data.user?.email_confirmed_at) return { ok: false, message: "이메일 인증이 되지 않았습니다" };
  if (!data) return { ok: false, message: "비밀번호가 올바르지 않습니다" };
  return { ok: true, message: "계정이 확인되었습니다" };
}

export async function signInWithOAuth(provider: Provider, redirectUrl: string): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });
  if (error && process.env.NODE_ENV === "development") console.error(error);
}

export const signInWithGithub = async () => signInWithOAuth("github", "http://localhost:3000/oauth/callback");
export const signInWithKakao = async () => signInWithOAuth("kakao", "http://localhost:3000/oauth/callback");
export const signInWithGoogle = async () => signInWithOAuth("google", "http://localhost:3000/oauth/callback");
