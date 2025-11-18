import type { FollowType } from "@/types";
import { createClient } from "@/utils/supabase/client";

export const getFollowingUserId = async (id: string): Promise<string[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("follow")
    .select<"following_id", FollowType["Row"]>("following_id")
    .eq("follower_id", id);

  if (error) {
    console.error("Error fetching following:", error);
    return [];
  }

  const followingIds = data?.map(row => row["follower_id"]) ?? [];

  return followingIds;
};
