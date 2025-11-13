"use client";

import { cva, VariantProps } from "class-variance-authority";
import { BookMarked, ChevronLeft, MessageSquareMore } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { PostDetailType } from "@/types";
import Badge from "../common/Badge";
import BaseImage from "../common/image/BaseImage";

const thumbnailVariants = cva(
  "post-card_post-thumbnail relative overflow-hidden object-cover rounded-xl border border-gray-200",
  {
    variants: {
      device: {
        pc: "h-75",
        mobile: "h-[113px]",
      },
    },
    defaultVariants: {
      device: "pc",
    },
  }
);

interface PostCardProps extends VariantProps<typeof thumbnailVariants> {
  postData: PostDetailType | null;
  commentCount: number;
  className?: string;
}

export default function PostCard({ device, postData, commentCount, className }: PostCardProps) {
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  if (postData) {
    const { content, post_image, profiles, title } = postData;
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
              <div className={thumbnailVariants({ device })} onClick={() => setIsOpen(true)}>
                <BaseImage
                  src={post_image}
                  alt="post thumbnail image"
                  className="h-full w-full cursor-pointer object-fill"
                />
              </div>
            )}
            <div className="post-card_btns text-text-sub flex gap-6">
              <div className="post-card_comment flex items-center justify-center">
                <MessageSquareMore size={12} />
                <span className="ml-2 text-xs">{commentCount}</span>
              </div>
              <div className="post-card_share flex items-center justify-center">
                <BookMarked size={12} />
                <span className="ml-2 text-xs">1</span>
              </div>
            </div>
          </div>
          {isOpen && (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-bg-main relative rounded-2xl"
                    onClick={e => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      src={post_image ?? ""}
                      alt="원본 이미지"
                      className="rounded-lg shadow-xl"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        display: "block",
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </>
    );
  }
}
