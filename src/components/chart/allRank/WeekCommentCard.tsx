"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";
import BaseImage from "@/components/common/image/BaseImage";

export default function WeekCommentCard({ comment }: { comment: weekCommentDataType }) {
  const router = useRouter();
  return (
    <div className="relative flex w-full gap-3 rounded-lg border border-gray-300 px-4 py-5">
      <div className="flex flex-col items-center justify-center gap-0.5">
        <BaseImage
          src={comment.avatar_image}
          rounded="lg"
          alt="profile_img"
          className="h-12 w-12 border border-gray-200"
        />
        <div className="text-xs">{comment.name}</div>
      </div>
      <div className="mt-1 flex flex-col gap-0.5 pt-1">
        <div className="relative max-w-[350px]">
          <div className="rounded-lg rounded-tl-none bg-blue-400 p-3 pt-2 text-sm text-white">{comment.content}</div>
        </div>
        <div className="text-text-sub flex gap-3 pl-1 text-xs font-semibold">
          <span>좋아요: {comment.like_count}</span>
          <span>싫어요: {comment.dislike_count}</span>
        </div>
      </div>
      <Button
        className="hover:bg-main absolute right-3 bottom-3 transition hover:text-white"
        size={"xs"}
        variant={"quaternary"}
        onClick={() => router.push(`/posts/${comment.category_type}/post/${comment.post_id}`)}
      >
        보러가기
      </Button>
    </div>
  );
}
