"use client";

import { createClient } from "@/utils/supabase/client";

export async function deletePost(id: string, imageUrl: string) {
  const supabase = createClient();

  // 기존 이미지 삭제
  const filePath = imageUrl.replace(
    "https://lfkxloulmqeonuzaudtt.supabase.co/storage/v1/object/public/user_upload_image/",
    ""
  );

  const { error: removeImageError } = await supabase.storage.from("user_upload_image").remove([filePath]);

  if (removeImageError) {
    console.error(`게시글 삭제 실패: ${removeImageError?.message}`);
    return;
  }

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error || !id) {
    console.error(`게시글 삭제 실패: ${error?.message}`);
    return;
  }

  return alert("게시글을 삭제했습니다.");
}
