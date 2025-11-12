"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { PostCardType } from "@/types";
import PostSideButton from "./PostSideButton";
import PostSideList from "./PostSideList";

export interface postCardSampleDataType {
  id: string;
  createdAt: string;
  name: string;
  title: string;
  categoryName: string;
  categoryType: string;
}

export default function PostSideBar({ isLogin, postData }: { isLogin: boolean; postData: PostCardType[] }) {
  const currentPath = usePathname().split("/");
  const isPostDetail = currentPath.length > 3 || currentPath[2] === "new";

  return (
    <div
      className={twMerge(
        "category-side flex min-w-[270px] flex-col items-center gap-2 max-sm:w-full max-sm:p-5",
        isPostDetail && "max-[1100px]:hidden"
      )}
    >
      <PostSideButton isLogin={isLogin} />
      <PostSideList postData={postData} />
    </div>
  );
}
