import CategoryRankCard from "./CategoryRankCard";

export default function CategoryRankComponent() {
  return (
    <div className="grid w-full grid-cols-2 gap-5 px-6 py-7">
      <CategoryRankCard />
      <CategoryRankCard />
      <CategoryRankCard />
      <CategoryRankCard />
    </div>
  );
}
