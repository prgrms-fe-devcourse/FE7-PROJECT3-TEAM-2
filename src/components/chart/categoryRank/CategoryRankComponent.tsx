import { createClient } from "@/utils/supabase/server";
import CategoryRankCard from "./CategoryRankCard";

export default async function CategoryRankComponent() {
  const supabase = await createClient();
  const { data: statsData, error } = await supabase.rpc("get_category_full_statistics");

  if (error) throw error;

  const parsedData = statsData?.map(item => ({
    ...item,
    topusers: item.topusers ? (item.topusers as TopUserType[]) : [],
    badge_counts: item.badge_counts ? (item.badge_counts as BagdeCountType[]) : [],
  }));

  return (
    <div className="grid w-full grid-cols-1 gap-5 py-7 pt-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      {parsedData?.map(stats => (
        <CategoryRankCard key={stats.category_id} stats={stats} />
      ))}
    </div>
  );
}
