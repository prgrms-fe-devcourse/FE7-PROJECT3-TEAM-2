import Image from "next/image";
import React from "react";
import { PostWithProfile } from "@/types/search";
import { cardVariants } from "./SearchResultClient";
import Badge from "../common/Badge";

export default function ResultPosts({
  data,
  textHighlight,
}: {
  data: PostWithProfile[];
  textHighlight: (text: string) => string | React.ReactElement[];
}) {
  return data.map(post => (
    <div key={post.id} className={cardVariants()}>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex gap-2 text-xs">
          <p>{post.profiles?.name}</p>
          <p className="text-text-light">{post.created_at}</p>
        </div>
        <div className="flex flex-col gap-2.5 text-sm">
          <p className="font-bold">{textHighlight(post.title)}</p>
          <p className="text-text-light">{textHighlight(post.content ?? "")}</p>
        </div>
        <Badge size="sm" className="bg-pink-600 px-2 py-1 text-white" text="HOT" />
      </div>
      <div>
        {post.post_image && (
          <Image
            src={post.post_image}
            alt={`${post.title}의 썸네일`}
            width={192}
            height={192}
            className="m-1.5 h-48 min-h-48 w-48 min-w-48 rounded-sm"
          />
        )}
      </div>
    </div>
  ));
}
