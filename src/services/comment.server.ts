import { CommentInserType, FormState } from "@/types";
import { createClient } from "@/utils/supabase/server";

export async function getComments(postId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .rpc("get_detail_comments", {
      p_post_id: postId,
    })
    .order("created_at", { ascending: true });
  if (!error) {
    return data;
  } else return null;
}

export async function createComment(commentData: CommentInserType): Promise<[FormState, CommentInserType | null]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("comments").insert([commentData]).select().maybeSingle();

  if (error) {
    return [
      {
        success: false,
        error: `댓글 업로드 실패: ${error.message}`,
      },
      null,
    ];
  }

  return [{ success: true, error: null }, data];
}
