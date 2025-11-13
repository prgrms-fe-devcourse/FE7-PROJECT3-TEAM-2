"use client";

import { cva, VariantProps } from "class-variance-authority";
import { BookMarked, ChevronLeft, MessageSquareMore } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { PostCardType } from "@/types";
import Badge from "../common/Badge";

const thumbnailVariants = cva(
  "post-card_post-thumbnail relative overflow-hidden object-cover rounded-xl border border-gray-200",
  {
    variants: {
      device: {
        pc: "h-[196px]",
        mobile: "h-[113px]",
      },
    },
    defaultVariants: {
      device: "pc",
    },
  }
);

interface PostCardProps extends VariantProps<typeof thumbnailVariants> {
  postData: PostCardType | null;
  className?: string;
}

export default function PostCard({ device, postData, className }: PostCardProps) {
  const router = useRouter();
  const currentPath = usePathname();
  if (postData) {
    const { adopted_comment_id, category, content, created_at, id, post_image, profiles, title } = postData;
    return (
      <>
        <div className={twMerge("post-card flex flex-col rounded-3xl border border-gray-200 px-6 py-5", className)}>
          <div className="post-card_user mb-5 flex items-center justify-between">
            <div className="post-card_user-info text-text-title flex items-center">
              <button
                onClick={() => {
                  router.back();
                }}
                className="hover:text-main mr-5 cursor-pointer min-[1100px]:hidden"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => {
                  const next = new URLSearchParams();
                  next.set("user", profiles.id);
                  router.push(`${currentPath}?${next.toString()}`);
                }}
                className="cursor-pointer"
              >
                <Image
                  src={profiles.avatar_image ?? "/profile_sample.svg"}
                  alt="user profile image"
                  width={32}
                  height={32}
                  className="rounded-sm border border-gray-200"
                />
              </button>

              <span className="mr-2 ml-5 text-xs">{profiles.name}</span>
              <Badge size="sm" text="칭호칭호" className="bg-gray-200 text-black" />
            </div>
            <button className="hover:bg-main-50 flex h-max cursor-pointer items-center justify-center rounded-lg p-2">
              <span className="text-main text-[8px]">팔로우</span>
            </button>
          </div>
          <div className="post-card_detail flex flex-col gap-3">
            <p className="post-card_post-title text-text-title text-base font-bold">{title}</p>
            <p className="post-card_post-content text-text-sub text-sm">{content}</p>
            {post_image && (
              <div className={thumbnailVariants({ device })}>
                <Image src={post_image} alt="post thumbnail image" fill className="object-cover" />
              </div>
            )}
            <div className="post-card_btns text-text-sub flex gap-6">
              <div className="post-card_comment flex items-center justify-center">
                <MessageSquareMore size={12} />
                <span className="ml-2 text-xs">1</span>
              </div>
              <div className="post-card_share flex items-center justify-center">
                <BookMarked size={12} />
                <span className="ml-2 text-xs">1</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
