import type { FollowType } from "@/types";
import { createClient } from "@/utils/supabase/client";

export const getFollowingUserId = async (id: string): Promise<string[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("follow").select<"*", FollowType["Row"]>("*").eq("follower_id", id);

  if (error) {
    console.error("Error fetching following:", error);
    return [];
  }
  return data.map(f => f.following_id) ?? [];
};
