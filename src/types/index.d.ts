import { Database } from "@/utils/supabase/supabase";

export type CategoryType = Database["public"]["Tables"]["category"]["Row"];
export type PostType = Database["public"]["Tables"]["posts"]["Row"];
export type PostInsertType = Database["public"]["Tables"]["posts"]["Insert"];
export type PostUpdateType = Database["public"]["Tables"]["posts"]["Update"];
export type PostCardType = {
  adopted_comment_id: string | null;
  category_id: string;
  content: string | null;
  created_at: string;
  id: string;
  post_image: string | null;
  title: string;
  user_id: string;
  category: {
    id: string;
    name: string;
    type: string | null;
  };
  profiles: {
    id: string;
    name: string;
    avatar_image: string | null;
  };
};
export type CommentType = Database["public"]["Tables"]["comments"]["Row"];
export type CommentDetailType = {
  content: string;
  id: string;
  created_at: string;
  user_id: string;
  comment_reactions:
    | {
        comment_id: string;
        created_at: string;
        id: string;
        type: string;
        user_id: string;
      }[]
    | null;
  profiles: {
    avatar_image: string | null;
    name: string;
  };
};
export type ProfileType = Database["public"]["Tables"]["profiles"]["Row"];

export type FormState = {
  success: boolean;
  error: string | null;
};
