"use client";

import { SearchRecommendProps } from "@/types/search";
import { categoryColor } from "@/utils/category";

export default function SearchRecommend({ TopData, query, setQuery }: SearchRecommendProps) {
  const TopOneData = Array.from(new Map(TopData.map(item => [item.category_name, item])).values());

  const dataChoiceHandler = (keyword: string) => {
    setQuery(keyword);
  };

  return (
    <div className="flex w-full flex-col items-start gap-3 px-6">
      <p className="text-main text-[14px]">추천 검색어</p>
      <div className="flex flex-wrap gap-3">
        {TopOneData.map(item => (
          <button
            key={`${item.category_name}-${item.keyword}`}
            onClick={() => dataChoiceHandler(item.keyword)}
            style={{
              backgroundColor: categoryColor[item.category_name] || "#999999",
            }}
            className="w-min-12 h-7 cursor-pointer rounded-sm px-2 py-1 text-sm text-white hover:bg-gray-200"
          >
            {item.keyword}
          </button>
        ))}
      </div>
    </div>
  );
}
