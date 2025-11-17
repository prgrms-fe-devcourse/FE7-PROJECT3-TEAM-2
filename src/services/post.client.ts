"use client";

import { createClient } from "@/utils/supabase/client";

export async function deletePost(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error || !id) {
    console.error(`게시글 삭제 실패: ${error?.message}`);
    return;
  }

  return alert("게시글을 삭제했습니다.");
}
