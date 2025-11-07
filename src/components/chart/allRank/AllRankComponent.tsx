import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import AllRankCard from "./AllRankCard";

export default function AllRankComponent({
  title,
  stats,
}: {
  title: string;
  stats: {
    total: number;
    categories: {
      id: number;
      name: string;
      count: number;
      image: string;
    }[];
  };
}) {
  const categories = stats.categories.map(c => ({
    ...c,
    percent: ((c.count / stats.total) * 100).toFixed(0),
  }));

  return (
    <ResponsiveContainer className="w-full px-6 py-7">
      {
        <div className="flex flex-col">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-text-title text-lg font-semibold">{title === "게시글" ? "게시글 수" : "훈수"}</span>
            <span className="text-text-light text-xs font-semibold">
              카테고리별 {title === "게시글" ? "게시글 수" : "훈수"}
            </span>
          </div>
          <div className="mx-auto grid w-3/4 grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <ResponsiveContainer className="bg-main col-span-1 p-6">
              <div className="mb-2 flex flex-col gap-1">
                <div className="text-xs text-gray-200">전체 {title}</div>
                <div className="text-2xl text-gray-50">{stats.total}</div>
                <span className="invisible text-xs">0%</span>
              </div>
              <div className="flex w-full justify-end">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-white text-sm text-white">
                  전체
                </div>
              </div>
            </ResponsiveContainer>
            {categories.map(category => (
              <AllRankCard key={category.id} category={category} title={title} />
            ))}
          </div>
        </div>
      }
    </ResponsiveContainer>
  );
}
