import { createClient } from "@/utils/supabase/server";

export async function updateDisplayedBadge(userId: string, displayedBadgeList: string) {
  const supabase = await createClient();
  const { error: updateErrors } = await supabase
    .from("profiles")
    .update({ displayed_badge: displayedBadgeList })
    .eq("id", userId);

  if (updateErrors) {
    return { success: false, message: updateErrors };
  }

  return { success: true, message: "성공적으로 대표 뱃지를 업데이트 했습니다." };
}
