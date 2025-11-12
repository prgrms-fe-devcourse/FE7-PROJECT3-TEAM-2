import CategoryRankCard from "./CategoryRankCard";

export default function CategoryRankComponent() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 py-7 pt-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      <CategoryRankCard />
      <CategoryRankCard />
      <CategoryRankCard />
      <CategoryRankCard />
    </div>
  );
}
