import Toast from "@/components/common/toast/Toast";
import { createClient } from "@/utils/supabase/client";

export async function getBookmarkCount(postId: string) {
  const supabase = createClient();
  const { data, error } = await supabase.from("bookmark").select("post_id").eq("post_id", postId);
  if (error) {
    console.error("북마크 카운트 조회 실패");
    return;
  }

  return data.length;
}

export async function isBookmarked(postId: string, userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("bookmark")
    .select("post_id")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    Toast({ message: "북마크 id 조회 실패", type: "ERROR" });
    return;
  }

  return !!data;
}

export async function addBookmark(postId: string, userId: string) {
  const supabase = createClient();
  const { error } = await supabase.from("bookmark").insert([{ post_id: postId, user_id: userId }]);

  if (error) {
    Toast({ message: "북마크 추가 실패", type: "ERROR" });
    return { success: false, data: null };
  }

  Toast({ message: "북마크 추가", type: "SUCCESS" });
  return { success: true, data: null };
}

export async function deleteBookmark(postId: string, userId: string) {
  const supabase = createClient();
  const { error } = await supabase.from("bookmark").delete().eq("post_id", postId).eq("user_id", userId);

  if (error) {
    Toast({ message: "북마크 삭제 실패", type: "ERROR" });
    return { success: false, data: null };
  }

  Toast({ message: "북마크 삭제", type: "SUCCESS" });
  return { success: true, data: null };
}
