"use client";

import { ChevronDown } from "lucide-react";
// import Image from "next/image";
import Badge from "../common/Badge";

export default function SearchResult({ searchType }: { searchType: string }) {
  // 더미
  const dummyPosts = [
    {
      id: 1,
      user_id: 1,
      created_at: "2025년 11월 8일",
      title: "이거 썸 맞나요?",
      content: "얘 나 좋아하는거 맞지.",
      post_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPelunvobTdrAM_XNl7ME6ThiVkk0yhSHyQ&s",
    },
    {
      id: 2,
      user_id: 1,
      created_at: "2025년 11월 9일",
      title: "안녕하세요",
      content: "오늘부터 훈수시작",
      post_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPelunvobTdrAM_XNl7ME6ThiVkk0yhSHyQ&s",
    },
  ];
  const dummyUsers = [
    {
      id: 1,
      name: "훈수꾼",
      avatar_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPelunvobTdrAM_XNl7ME6ThiVkk0yhSHyQ&s",
      level: 100,
    },
    {
      id: 2,
      name: "나요",
      avatar_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPelunvobTdrAM_XNl7ME6ThiVkk0yhSHyQ&s",
      level: 99,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl border border-gray-200 p-6">
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-content text-xs">검색 결과&nbsp;</p>
          <p className="text-main text-xs">3</p> {/* 임시 */}
          <p className="text-content text-xs">건</p>
        </div>
        <div className="text-content flex cursor-pointer gap-0.5 text-xs">
          <p className="">날짜 순</p>
          <button className="cursor-pointer">
            <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {searchType === "post" &&
        dummyPosts.map(post => (
          <div key={post.id} className="flex w-full justify-between gap-3 rounded-3xl border border-gray-200">
            <div className="flex flex-col gap-6 p-6">
              <div className="flex gap-2 text-xs">
                <p>{post.user_id}</p>
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
              <img src={post.post_img} className="rounded-sm" />
            </div>
          </div>
        ))}
      {searchType === "user" &&
        dummyUsers.map(user => (
          <div key={user.id} className="flex w-full justify-between gap-3 rounded-3xl border border-gray-200">
            <div className="flex flex-col gap-6 p-6">
              <p>{user.name}</p>
              <Badge className="bg-amber-400 px-2 py-1" size="sm" text={`LV.${user.level}`} />
              <Badge size="sm" className="bg-pink-600 px-2 py-1 text-white" text="HOT" />
            </div>
            <div>
              {/* 임시 */}
              <img src={user.avatar_img} className="rounded-sm" />
            </div>
          </div>
        ))}
    </div>
  );
}
