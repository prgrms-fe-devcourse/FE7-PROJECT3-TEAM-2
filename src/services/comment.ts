import { createClient } from "@/utils/supabase/server";

export async function getComments(postId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("get_comment_details", {
    p_post_id: postId,
  });
  if (!error) {
    return data;
  } else return null;
}
