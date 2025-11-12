"use client";

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { PostWithProfile, Profile, SearchResultProps } from "@/types/search";
// import Image from "next/image";
import Badge from "../common/Badge";

const cardVariants = cva("flex w-full cursor-pointer justify-between gap-3 rounded-3xl border border-gray-200");

export default function SearchResultClient({ searchType, data }: SearchResultProps) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl md:border md:border-gray-200 md:p-6">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-content text-xs">검색 결과&nbsp;</p>
          <p className="text-main text-xs">3</p> {/* 임시 */}
          <p className="text-content text-xs">건</p>
        </div>
        <div className="text-content flex cursor-pointer gap-0.5 text-xs">
          <p>날짜 순</p>
          <button className="cursor-pointer">
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {searchType === "post" &&
        (data as PostWithProfile[]).map(post => (
          <div key={post.id} className={cardVariants()}>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex gap-2 text-xs">
                <p>{post.profiles?.name}</p>
                <p className="text-text-light">{post.created_at}</p>
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                <p className="font-bold">{post.title}</p>
                <p className="text-text-light">{post.content}</p>
              </div>
              <Badge size="sm" className="bg-pink-600 px-2 py-1 text-white" text="HOT" />
            </div>
            <div>
              {/* <Image
                  src={post.post_img}
                  alt={`${post.id}의 썸네일`}
                  width={199}
                  height={177}
                  className="rounded-sm"
                /> */}
              {/* 임시 */}
              {/* <img src={post.post_image} className="rounded-sm" /> */}
            </div>
          </div>
        ))}

      {searchType === "user" &&
        (data as Profile[]).map(user => (
          <div key={user.id} className={cardVariants()}>
            <div className="flex flex-col gap-6 p-6">
              <p>{user.name}</p>
              <Badge className="bg-amber-400 px-2 py-1" size="sm" text={`LV.${user.level}`} />
              <Badge size="sm" className="bg-pink-600 px-2 py-1 text-white" text="HOT" />
            </div>
            <div>
              {/* 임시 */}
              {/* <img src={user.avatar_img} className="rounded-sm" /> */}
            </div>
          </div>
        ))}
    </div>
  );
}
