import { Database } from "@/utils/supabase/supabase";

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type SearchResultProps = {
  searchType: string;
  searchData: Post[] | Profile[];
  queryParam: string;
};

export type SearchBarProps = {
  searchType: string;
  isSearched: boolean;
  TopData: TopKeyword[];
};

export type SearchRecommendProps = {
  TopData: TopKeyword[];
  query: string;
  setQuery: (value: string) => void;
};

export type PostWithProfile = Post & {
  profiles?: {
    name?: string;
  };
  category?: {
    type: string;
    name: string;
  };
};

export type TopKeyword = {
  category_name: string;
  keyword: string;
  keyword_count: number;
};
