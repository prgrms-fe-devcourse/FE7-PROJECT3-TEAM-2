"use client";

import { Grid2x2, Plus, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";

export type PostFilterType = "all" | "following";

export default function PostSideButton({
  isLogin,
  onChangeFilter,
}: {
  isLogin: boolean;
  onChangeFilter?: (filter: PostFilterType) => void;
}) {
  const [filter, setFilter] = useState<PostFilterType>("all");

  const handleFilterChange = (type: PostFilterType) => {
    setFilter(type);
    onChangeFilter?.(type);
  };

  return (
    <>
      {isLogin && (
        <>
          <Link href="/posts/write?page=new" className="max-sm:w-full">
            <Button size="md" className="w-60 max-sm:w-full">
              <Plus size={24} />
              <span>글쓰기</span>
            </Button>
          </Link>

          <Divider width="90" />

          <div className="post-filter-btn flex gap-3 max-sm:w-full">
            <Button
              size="sm"
              className={`max-sm:w-full`}
              variant={filter === "all" ? "primary" : "tertiary"}
              onClick={() => handleFilterChange("all")}
            >
              <Grid2x2 size={12} className="mr-2" />
              <span>전체보기</span>
            </Button>

            <Button
              size="sm"
              className={`px-3 max-sm:w-full`}
              variant={filter === "following" ? "primary" : "tertiary"}
              onClick={() => handleFilterChange("following")}
            >
              <Users size={12} className="mr-2" />
              <span>내가 팔로우한 사용자</span>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
