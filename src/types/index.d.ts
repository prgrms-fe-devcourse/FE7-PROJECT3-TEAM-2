import { Database } from "@/utils/supabase/supabase";
import { BadgeType } from "./badge";

export type CategoryType = Database["public"]["Tables"]["category"]["Row"];
export type PostType = Database["public"]["Tables"]["posts"]["Row"];
export type PostInsertType = Database["public"]["Tables"]["posts"]["Insert"];
export type PostUpdateType = Database["public"]["Tables"]["posts"]["Update"];
export type PostCardViewType = Database["public"]["Views"]["post_card"]["Row"];
export type PostCardType = Omit<PostCardViewType, "category" | "profiles"> & {
  category: {
    id: string;
    name: string;
    type: BadgeType;
  };
  profiles: {
    id: string;
    name: string;
    avatar_url?: string | null;
  };
};
export type CommentType = Database["public"]["Tables"]["comments"]["Row"];

export type FormState = {
  success: boolean;
  error: string | null;
};
