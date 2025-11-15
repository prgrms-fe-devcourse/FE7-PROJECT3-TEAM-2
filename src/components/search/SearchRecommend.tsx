"use client";

import Badge from "@/components/common/Badge";
import { TopKeyword } from "@/types/search";

export default function SearchRecommend({ TopData }: { TopData: TopKeyword[] }) {
  const dataChoiceHandler = () => {
    console.log(TopData);
  };

  return (
    <div className="flex w-full flex-col items-start gap-3 px-6">
      <p className="text-main text-[14px]">추천 검색어</p>
      <div className="flex gap-3">
        <button
          onClick={dataChoiceHandler}
          className="w-min-12 px-2.1 h-7 cursor-pointer rounded-sm bg-pink-500 px-2 py-1 text-sm text-white hover:bg-gray-200"
        >
          연애
        </button>
        <Badge size="md" className="bg-emerald-500 px-2 py-1 text-white" text="친구" />
        <Badge size="md" className="bg-amber-500 px-2 py-1 text-white" text="비트코인" />
        <Badge size="md" className="bg-cyan-500 px-2 py-1 text-white" text="인간관계" />
      </div>
    </div>
  );
}
