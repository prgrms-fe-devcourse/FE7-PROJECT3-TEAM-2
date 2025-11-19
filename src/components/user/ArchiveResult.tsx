"use client";

import { PostWithProfile } from "@/types/search";
import ResultPosts from "../search/ResultPosts";

export default function ArchiveResult({
  posts,
  type = "my",
}: {
  posts: PostWithProfile[] | null;
  type?: "my" | "bookmark";
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {!posts || posts.length === 0 ? (
          <p className="text-text-light flex justify-center py-3 text-sm">
            {type === "my" ? "첫 훈수 요청을 해보세요." : "도움이 된 훈수를 모아보세요."}
          </p>
        ) : (
          <ResultPosts searchData={posts as PostWithProfile[]} />
        )}
      </div>
    </>
  );
}
