"use client";

import { Grid2x2, Plus, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCardButton from "@/components/post/PostCardButton";
import { createClient } from "@/utils/supabase/client";

export interface postCardSampleDataType {
  id: string;
  createdAt: string;
  name: string;
  title: string;
  categoryName: string;
  categoryType: string;
}

export default function PostSideBar() {
  const currentPath = usePathname().split("/");
  const isPostDetail = currentPath.length > 3 || currentPath[2] === "new";

  const postCardSampleData = {
    id: "1",
    createdAt: "2025-11-07T07:31:52.812Z",
    name: "김철수",
    title: "이거 썸 맞나요?",
    categoryName: "연애",
    categoryType: "love",
  };

  const supabase = createClient();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLogin(!!user);
    })();
  });

  return (
    <div
      className={twMerge(
        "category-side flex min-w-[270px] flex-col items-center gap-2 max-sm:w-full max-sm:p-5",
        isPostDetail && "max-[1100px]:hidden"
      )}
    >
      {isLogin && (
        <>
          {" "}
          <Link href="/posts/write" className="max-sm:w-full">
            <Button size="md" className="w-60 max-sm:w-full">
              <Plus size={24} />
              <span>글쓰기</span>
            </Button>
          </Link>
          <Divider width="90" />
          <div className="post-filter-btn flex gap-3 max-sm:w-full">
            <Button size="sm" className="max-sm:w-full">
              <Grid2x2 size={12} className="mr-2" />
              <span>전체보기</span>
            </Button>
            <Button size="sm" className="px-3 max-sm:w-full" variant="tertiary">
              <Users size={12} className="mr-2" />
              <span>내가 팔로우한 사용자</span>
            </Button>
          </div>
        </>
      )}
      <ResponsiveContainer className="px-3 py-4.5 max-sm:w-full">
        <PostCardButton data={postCardSampleData} className="max-sm:w-full" />
        <PostCardButton data={postCardSampleData} className="max-sm:w-full" />
      </ResponsiveContainer>
    </div>
  );
}
