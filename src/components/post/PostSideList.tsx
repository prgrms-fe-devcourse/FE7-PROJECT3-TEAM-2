"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { PostCardType } from "@/types";
import { createClient } from "@/utils/supabase/client";
import PostCardButton from "./PostCardButton";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostSideList({ postData }: { postData: PostCardType[] }) {
  const [posts, setPosts] = useState<PostCardType[]>(postData);

  const [cursor, setCursor] = useState<string | null>(
    postData.length > 0 ? postData[postData.length - 1].created_at : null
  );

  const [hasMore, setHasMore] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const targetElRef = useRef<HTMLDivElement>(null);

  const params = useParams();
  const category = params.category;
  const supabase = createClient();

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const LIMIT = 10;

    let query = supabase
      .from("posts")
      .select("*,category!inner(id, name, type), profiles(id, name, avatar_image)")
      .order("created_at", { ascending: false })
      .limit(LIMIT);

    if (category !== "all") {
      query = query.eq("category.type", category as string);
    }

    if (cursor) {
      query = query.lt("created_at", cursor);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      setIsLoading(false);
      return;
    }

    if (data.length < LIMIT) {
      setHasMore(false);
    }

    if (data.length > 0) {
      setPosts(prev => [...prev, ...data]);
      setCursor(data[data.length - 1].created_at);
    }

    setIsLoading(false);
  }, [category, cursor, isLoading, hasMore, supabase]);

  useEffect(() => {
    if (!targetElRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(targetElRef.current);
    return () => observer.disconnect();
  }, [isLoading, loadMore, hasMore]);

  return (
    <ResponsiveContainer
      className={twMerge(
        "scrollbar-hide flex w-full flex-col gap-4 overflow-y-scroll px-3 py-4.5",
        postData.length === 0 && "flex h-full items-center justify-center"
      )}
    >
      {postData.length !== 0 ? (
        posts.map(post => <PostCardButton key={post.id} postData={post} className="max-sm:w-full" />)
      ) : (
        <span className="text-text-light text-sm">작성된 게시글이 없습니다.</span>
      )}

      <div ref={targetElRef} style={{ height: "1px" }}>
        {isLoading && (
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="h-5 w-5 animate-spin rounded-full border border-gray-400 border-t-transparent"></div>
          </div>
        )}
      </div>
    </ResponsiveContainer>
  );
}
