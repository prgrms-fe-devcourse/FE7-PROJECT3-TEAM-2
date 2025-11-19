"use client";

import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import ProfileSlide from "@/components/user/ProfileSlide";
import CategoryRankCard from "./CategoryRankCard";

export default function CategoryRankComponent({ stats }: { stats: categoryStatsType[] }) {
  const search = useSearchParams();
  const user = search.get("user");
  return (
    <div>
      <div
        className={twMerge(
          "grid w-full grid-cols-1 gap-5 py-7 pt-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2",
          user && "hidden"
        )}
      >
        {stats?.map(st => (
          <CategoryRankCard key={st.category_id} stats={st} />
        ))}
      </div>
      <div>
        <ProfileSlide />
      </div>
    </div>
  );
}
