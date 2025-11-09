"use client";

import { useSearchParams } from "next/navigation";
import SearchBar from "./SearchBar";
import SearchRecommend from "./SearchRecommend";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const searchType = searchParams.get("type") === "user" ? "user" : "post";

  return (
    <div className="flex max-h-[314px] w-full max-w-[697px] flex-col gap-4">
      <div className="flex justify-center font-bold">
        <p className="text-[24px]">찾고 싶은&nbsp;</p>
        <p className="text-main text-[24px]"> 훈수</p>
        <p className="text-[24px]">가 있나요?</p>
      </div>
      <p className="text-text-light flex justify-center text-[16px]">
        찾고자 하는 키워드를 검색하면 관련 훈수 모음들을 찾아드릴게요
      </p>

      <SearchBar searchType={searchType} />

      {searchType === "post" && <SearchRecommend />}
    </div>
  );
}
