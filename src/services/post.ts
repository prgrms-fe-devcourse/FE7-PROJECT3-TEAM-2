import { z } from "zod";
import { FormState, PostCardType, PostInsertType, PostUpdateType } from "@/types";
import { BadgeType } from "@/types/badge";
import { createClient } from "@/utils/supabase/server";

export async function createPost(postData: PostInsertType): Promise<[FormState, PostInsertType | null]> {
  const supabase = await createClient();
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
  const supabase = await createClient();
  const { data, error } = await supabase.from("posts").update(updateData).eq("id", id);

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

export async function getPosts(category: BadgeType | "all") {
  const supabase = await createClient();
  if (category === "all") {
    const { data, error } = await supabase.from("post_card").select("*").order("created_at", { ascending: false });

    if (!error) {
      return data as PostCardType[];
    } else return null;
  } else {
    const { data, error } = await supabase
      .from("post_card")
      .select("*")
      .eq("category->>type", category)
      .order("created_at", { ascending: false });

    if (!error) {
      return data as PostCardType[];
    } else return null;
  }
}

// export async function getDetailPost() {

// }
