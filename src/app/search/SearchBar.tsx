"use client";

import { PanelsLeftBottomIcon, Search, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/common/Button";

export default function SearchBar() {
  const [searchType, setSearchType] = useState<"post" | "user">("post");

  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl border border-gray-200 p-6">
      <div className="flex items-start gap-3">
        <Button
          variant={searchType === "post" ? "primary" : "secondary"}
          className="min-h-[30px] min-w-[98px] px-3 py-2 text-xs"
        >
          <PanelsLeftBottomIcon size={12} />
          게시물 검색
        </Button>
        <Button
          variant={searchType === "user" ? "primary" : "secondary"}
          className="min-h-[30px] min-w-[98px] px-3 py-2 text-xs"
        >
          <User size={12} />
          사용자 검색
        </Button>
      </div>
      <div className="flex h-14 w-full rounded-lg border border-gray-200">
        <input placeholder="검색어를 입력해주세요..." className="ml-3 grow outline-none" />
        <Button variant="primary" className="min-h-10 min-w-10 shrink-0 px-3 py-2 text-xs">
          <Search size={16} color="white" />
        </Button>
      </div>
    </div>
  );
}

// 검색 버튼 크기 망가짐 해결 필요
