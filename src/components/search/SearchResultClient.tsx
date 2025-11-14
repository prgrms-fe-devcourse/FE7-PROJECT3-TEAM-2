"use client";

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PostWithProfile, Profile, SearchResultProps } from "@/types/search";
import ResultPosts from "./ResultPosts";
import Badge from "../common/Badge";

export const cardVariants = cva("flex w-full cursor-pointer justify-between gap-3 rounded-3xl border border-gray-200");

export default function SearchResultClient({ searchType, data, queryParam }: SearchResultProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [arrangeType, setArrangeType] = useState("date");
  const [arrangedData, setArrangedData] = useState(data);

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

  const arrangeHandler = (type: string) => {
    setArrangeType(type);
    setIsOpen(!isOpen);

    if (searchType === "post") {
      const newDataPost = [...arrangedData] as PostWithProfile[];
      if (type === "date") {
        newDataPost.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      } else if (type === "name") {
        newDataPost.sort((a, b) => a.title.localeCompare(b.title ?? ""));
      }
      setArrangedData(newDataPost);
    } else if (searchType === "user") {
      const newDataUser = [...arrangedData] as Profile[];
      if (type === "date") {
        newDataUser.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      } else if (type === "name") {
        newDataUser.sort((a, b) => a.name.localeCompare(b.name ?? ""));
      }
      setArrangedData(newDataUser);
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-3xl md:border md:border-gray-200 md:p-6">
      <div className="relative flex justify-between">
        <div className="flex text-xs">
          <p className="text-content">검색 결과&nbsp;</p>
          <p className="text-main">{data.length}</p>
          <p className="text-content">건</p>
        </div>
        <button
          className="text-content flex cursor-pointer gap-0.5 text-xs"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>{arrangeType === "date" ? "날짜순" : "이름순"}</p>
          <div className="cursor-pointer">
            <ChevronDown size={12} />
          </div>
        </button>

        {/* 정렬 드롭 다운 */}
        {isOpen && (
          <div className="text-content bg-bg-main absolute top-full right-0 mt-1 w-17 border border-gray-200 p-3 text-xs">
            <button onClick={() => arrangeHandler("date")} className="mb-3 block w-full cursor-pointer text-center">
              날짜 순
            </button>
            <button onClick={() => arrangeHandler("name")} className="block w-full cursor-pointer text-center">
              이름 순
            </button>
          </div>
        )}
      </div>
      {data.length === 0 && (
        <div className="flex h-100 w-full items-center justify-center">
          <p className="text-content">검색 결과가 존재하지 않습니다.</p>
        </div>
      )}

      {searchType === "post" && <ResultPosts data={arrangedData as PostWithProfile[]} textHighlight={textHighlight} />}

      {searchType === "user" &&
        (arrangedData as Profile[]).map(user => (
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
                className="m-1.5 h-48 min-h-48 w-48 min-w-48 rounded-sm md:h-45 md:w-45"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
