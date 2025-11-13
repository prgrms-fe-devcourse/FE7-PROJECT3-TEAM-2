import { Post, Profile } from "@/types/search";
import { createClient } from "@/utils/supabase/server";
import SearchResultClient from "./SearchResultClient";

export default async function SearchResult({ searchType, queryParam }: { searchType: string; queryParam: string }) {
  const supabase = await createClient();

  if (!queryParam) return null;

  let data: Post[] | Profile[] = [];

  if (searchType === "post") {
    const { data: posts } = await supabase
      .from("posts")
      .select("*, profiles(name)")
      .or(`title.ilike.%${queryParam}%, content.ilike.%${queryParam}%`);
    data = posts || [];
  } else {
    const { data: users } = await supabase.from("profiles").select("*").ilike("name", `%${queryParam}%`);
    data = users || [];
  }

  return <SearchResultClient searchType={searchType} data={data} />;
}
