import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";

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
