import { createClient } from "@/utils/supabase/client";

export async function updateProfile(userId: string, name: string, email: string, phoneNumber: string, bio: string) {
  const supabase = await createClient();
  const { error: updateErrors } = await supabase
    .from("profiles")
    .update({ name, email, phone_number: phoneNumber, bio })
    .eq("id", userId);

  if (updateErrors) {
    return {
      success: false,
      error: "프로필 저장중에 문제가 발생하였습니다.",
    };
  }
  return { success: true, error: null };
}
