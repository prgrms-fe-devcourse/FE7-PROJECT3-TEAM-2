import { ArrowDownWideNarrow } from "lucide-react";
import ResultPosts from "@/components/search/ResultPosts";
import SortSelect from "@/components/user/SortSelect";
import { PostWithProfile } from "@/types/search";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ searchParams }: { searchParams: Promise<{ sort: string }> }) {
  const supabase = await createClient();
  const { sort } = await searchParams;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: posts } = await supabase
    .from("bookmark")
    .select("posts(*, category(type), profiles(name))")
    .eq("user_id", user?.id ?? "")
    .order(sort === "category" ? "category_id" : "created_at", { ascending: false, foreignTable: "posts" });

  const flatPosts =
    posts?.map(p => ({
      ...p.posts,
    })) ?? [];
  console.log(posts);
  return (
    <>
      <div className="flex justify-end">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 max-sm:border-none max-sm:p-0">
          <ArrowDownWideNarrow size={12} />
          <SortSelect sort={sort} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ResultPosts data={flatPosts as PostWithProfile[]} />
      </div>
    </>
  );
}
