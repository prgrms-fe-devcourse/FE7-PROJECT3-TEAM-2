"use client";

import { createClient } from "@/utils/supabase/client";

export async function deleteComment(commentId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("comments").delete().eq("id", commentId);
  console.log(data);
  if (error) {
    console.log("댓글 삭제 에러");
  } else console.log("댓글 삭제 완료");
}
