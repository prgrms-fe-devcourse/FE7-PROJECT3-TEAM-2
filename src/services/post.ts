import { FormState, PostInsertType } from "@/types";
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
