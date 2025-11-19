import CategoryRankComponent from "@/components/chart/categoryRank/CategoryRankComponent";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const { data: statsData, error } = await supabase.rpc("get_category_full_statistics");

  if (error) throw error;

  const parsedData = statsData?.map(item => ({
    ...item,
    topusers: item.topusers ? (item.topusers as TopUserType[]) : [],
    badge_counts: item.badge_counts ? (item.badge_counts as BagdeCountType[]) : [],
  }));

  return <CategoryRankComponent stats={parsedData} />;
}
