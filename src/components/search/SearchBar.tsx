"use client";

import { PanelsLeftBottomIcon, Search, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";

export default function SearchBar({ searchType }: { searchType: string }) {
  const route = useRouter();

  return (
    <div className="flex w-full flex-col gap-3 rounded-3xl md:border md:border-gray-200 md:p-6">
      <div className="flex items-start gap-3">
        <Button
          variant={searchType === "post" ? "primary" : "secondary"}
          className="min-h-[30px] min-w-[98px] px-3 py-2 text-xs"
          onClick={() => route.push("/search/post")}
        >
          <PanelsLeftBottomIcon size={12} />
          게시물 검색
        </Button>
        <Button
          variant={searchType === "user" ? "primary" : "secondary"}
          className="min-h-[30px] min-w-[98px] px-3 py-2 text-xs"
          onClick={() => route.push("/search/user")}
        >
          <User size={12} />
          사용자 검색
        </Button>
      </div>
      <div className="flex h-14 w-full rounded-lg border border-gray-200">
        <input placeholder="검색어를 입력해주세요..." className="ml-3 w-full outline-none" />
        <Button variant="primary" className="m-2 mr-3 min-h-10 min-w-10 px-3 py-2 text-xs">
          <Search size={16} color="white" />
        </Button>
      </div>
    </div>
  );
}
