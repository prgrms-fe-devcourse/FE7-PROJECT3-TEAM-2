import { Database } from "@/utils/supabase/supabase";

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type SearchResultProps = {
  searchType: string;
  data: Post[] | Profile[];
};
