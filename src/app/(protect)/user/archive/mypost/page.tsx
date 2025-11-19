import { ArrowDownWideNarrow } from "lucide-react";
import ArchiveResult from "@/components/user/ArchiveResult";
import SortSelect from "@/components/user/SortSelect";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ searchParams }: { searchParams: Promise<{ sort: string }> }) {
  const supabase = await createClient();
  const { sort } = await searchParams;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: category } = await supabase.from("category").select("id").eq("type", sort).single();

  let data = supabase
    .from("posts")
    .select("*, category(type,name), profiles(name)")
    .eq("user_id", user?.id ?? "")
    .order("created_at", { ascending: false });

  if (category?.id && sort !== "all") {
    data = data.eq("category_id", category.id);
  }
  const { data: posts } = await data;
  return (
    <>
      <div className="flex justify-end">
        <div className="border-border-main flex items-center gap-2 rounded-full border px-3 py-2 max-sm:border-none max-sm:p-0">
          <ArrowDownWideNarrow size={12} />
          <SortSelect sort={sort} />
        </div>
      </div>
      <ArchiveResult posts={posts ?? []} />
    </>
  );
}
