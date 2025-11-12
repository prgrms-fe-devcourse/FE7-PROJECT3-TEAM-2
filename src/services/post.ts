import { FormState, PostInsertType, PostUpdateType } from "@/types";
import { createClient } from "@/utils/supabase/server";

const supabase = await createClient();

export async function createPost(postData: PostInsertType): Promise<[FormState, PostInsertType | null]> {
  const { data, error } = await supabase.from("posts").insert([postData]).select().maybeSingle();

  if (error) {
    return [
      {
        success: false,
        error: `게시글 업로드 실패: ${error.message}`,
      },
      null,
    ];
  }

  return [{ success: true, error: null }, data];
}

export async function updatePost({ id, updateData }: { id: string; updateData: PostUpdateType }) {
  const { data, error } = await supabase.from("posts").update([updateData]).eq("id", id);

  if (error || !id) {
    return [
      {
        success: false,
        error: `게시글 업데이트 실패: ${error?.message}`,
      },
      null,
    ];
  }

  return [{ success: true, error: null }, data];
}
