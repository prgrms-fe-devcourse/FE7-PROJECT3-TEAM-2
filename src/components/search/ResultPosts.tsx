"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PostWithProfile } from "@/types/search";
import { cardVariants } from "./SearchResultClient";
import Badge from "../common/Badge";

export default function ResultPosts({ data }: { data: PostWithProfile[] }) {
  const router = useRouter();
  const handleClick = (id: string, category?: string) => {
    router.push(`/posts/${category}/post/${id}`);
  };
  if (data.length < 1) {
    return null;
  }
  return data.map(post => (
    <div key={post.id} className={cardVariants()} onClick={() => handleClick(post.id, post.category?.type)}>
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
        {post.post_image && (
          <Image src={post.post_image} alt={`${post.title}의 썸네일`} width={177} height={155} className="rounded-sm" />
        )}
      </div>
    </div>
  ));
}
