"use client";

import { createClient } from "@/utils/supabase/client";

export async function deleteComment(userId: string, commentId: string) {
  const supabase = createClient();
  const { error } = await supabase.from("comments").delete().eq("id", commentId).eq("user_id", userId);
  if (error) {
    console.error("댓글 삭제 에러");
  }
}

export async function selectReaction(userId: string, commentId: string) {
  const supabase = createClient();
  return await supabase.from("comment_reactions").select("*").eq("comment_id", commentId).eq("user_id", userId);
}

export async function addReaction(type: string, userId: string, commentId: string) {
  const supabase = createClient();

  return await supabase
    .from("comment_reactions")
    .insert([{ user_id: userId, comment_id: commentId, type: type }])
    .select();
}

export async function deleteReaction(userId: string, commentId: string) {
  const supabase = createClient();

  return await supabase.from("comment_reactions").delete().eq("comment_id", commentId).eq("user_id", userId);
}

export async function hasAdoptedComment(postId: string) {
  const supabase = createClient();

  return await supabase.from("posts").select("adopted_comment_id").eq("id", postId).maybeSingle();
}

export async function adoptComment(postId: string, commentId: string | null) {
  const supabase = createClient();

  return await supabase.from("posts").update({ adopted_comment_id: commentId }).eq("id", postId).select();
}
