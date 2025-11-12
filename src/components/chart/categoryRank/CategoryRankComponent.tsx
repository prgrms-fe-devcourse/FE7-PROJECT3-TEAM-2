import { createClient } from "@/utils/supabase/server";
import CategoryRankCard from "./CategoryRankCard";

export default async function CategoryRankComponent() {
  const badgeData = [
    { name: "연애", value: 25 },
    { name: "기술/IT", value: 18 },
    { name: "제테크/소비", value: 10 },
    { name: "음식/요리", value: 9 },
    { name: "생활", value: 8 },
    { name: "게임", value: 7 },
  ];

  const supabase = await createClient();

  const { data: categoryTotalData, error: categoryDataError } = await supabase.from("category").select("*");
  const { data: topKeyword, error: topKeywordError } = await supabase.rpc("get_top_keyword");

  console.log(topKeyword);
  console.log(categoryTotalData);

  // 에러처리
  if (categoryDataError) console.log(categoryTotalData);

  return (
    <div className="grid w-full grid-cols-1 gap-5 py-7 pt-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      {categoryTotalData?.map(stats => (
        <CategoryRankCard key={stats.id} data={badgeData} stats={stats} />
      ))}
    </div>
  );
}
