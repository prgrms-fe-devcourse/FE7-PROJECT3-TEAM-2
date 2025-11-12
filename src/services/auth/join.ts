import { createClient } from "@/utils/supabase/client";

export async function signUpWithEmail(email: string, password: string, name: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
      },
    },
  });
  if (error) {
    if (error.code === "over_email_send_rate_limit") return { ok: false, message: "잠시후 다시 시도해주세요" };
  }
  if (data) return { ok: true, message: "계정이 확인되었습니다" };
  return { ok: false, message: "계정 생성이 실패되었습니다" };
}
