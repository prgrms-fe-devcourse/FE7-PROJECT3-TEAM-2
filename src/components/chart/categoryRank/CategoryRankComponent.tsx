import CategoryRankCard from "./CategoryRankCard";

export default function CategoryRankComponent({
  stats,
}: {
  stats: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-5 py-7 pt-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      <CategoryRankCard stats={stats} />
      <CategoryRankCard stats={stats} />
      <CategoryRankCard stats={stats} />
      <CategoryRankCard stats={stats} />
    </div>
  );
}
