import { createClient } from "@/utils/supabase/server";

export async function getComments(postId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("comment_detail").select("*").eq("post_id", postId);
  if (!error) {
    return data;
  } else return null;
}
