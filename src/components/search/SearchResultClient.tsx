"use client";

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { PostWithProfile, Profile, SearchResultProps } from "@/types/search";
import ResultPosts from "./ResultPosts";
import Badge from "../common/Badge";

export const cardVariants = cva("flex w-full cursor-pointer justify-between gap-3 rounded-3xl border border-gray-200");

export default function SearchResultClient({ searchType, data, queryParam }: SearchResultProps) {
  const textHighlight = (text: string) => {
    if (!queryParam) return text;
    const parts = text.split(new RegExp(`(${queryParam})`, "gi"));
    return parts.map((part, i) => {
      return part.toLowerCase() === queryParam.toLowerCase() ? (
        <span key={i} className="text-main text-bold">
          {part}
        </span>
      ) : (
        <span>{part}</span>
      );
    });
  };

  return (
    <div className="flex flex-col gap-3 rounded-3xl md:border md:border-gray-200 md:p-6">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-content text-xs">검색 결과&nbsp;</p>
          <p className="text-main text-xs">{data.length}</p>
          <p className="text-content text-xs">건</p>
        </div>
        <div className="text-content flex cursor-pointer gap-0.5 text-xs">
          <p>날짜 순</p>
          <button className="cursor-pointer">
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {searchType === "post" && <ResultPosts data={data as PostWithProfile[]} textHighlight={textHighlight} />}

      {searchType === "user" &&
        (data as Profile[]).map(user => (
          <div key={user.id} className={cardVariants()}>
            <div className="flex flex-col gap-6 p-6">
              <p>{textHighlight(user.name)}</p>
              <Badge className="bg-amber-400 px-2 py-1" size="sm" text={`LV.${user.level}`} />
              <Badge size="sm" className="bg-pink-600 px-2 py-1 text-white" text="HOT" />
            </div>
            <div>
              <Image
                src={user.avatar_image || "/profile_sample.svg"}
                alt={`${user.name}의 프로필 사진`}
                width={192}
                height={192}
                className="m-1.5 h-48 min-h-48 w-48 min-w-48 rounded-sm"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
