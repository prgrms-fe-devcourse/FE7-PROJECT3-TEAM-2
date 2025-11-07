"use client";

import { cva, VariantProps } from "class-variance-authority";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PostCardBookMark from "./PostCardBookMark";
import Badge from "../common/Badge";

const containerVariants = cva(
  "post-card-btn bg-bg-main hover:bg-main-50 text-text-title px-6 py-3 flex justify-between items-center cursor-pointer rounded-xl transition-all duration-300",
  {
    variants: {
      device: {
        pc: "w-[244px]",
        mobile: "w-[190px]",
      },
    },
    defaultVariants: {
      device: "pc",
    },
  }
);

const userTextVariants = cva("post-card-btn_user flex justify-start", {
  variants: {
    device: {
      pc: "text-xs",
      mobile: "text-[8px]",
    },
  },
});

const titleVariants = cva("post-card-btn_title", {
  variants: {
    device: {
      pc: "text-base",
      mobile: "text-xs",
    },
  },
});

interface PostCardButtonProps extends VariantProps<typeof containerVariants> {
  categoryId: string;
  postId: string;
  userName: string;
  title: string;
  date: string;
  className?: string;
}

export default function PostCardButton({
  device,
  categoryId,
  postId,
  userName,
  title,
  date,
  className,
}: PostCardButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Link
        href={`/posts/${categoryId}/post/${postId}`}
        className={twMerge(containerVariants({ device }), className, isClicked && "bg-main-50")}
        onClick={() => setIsClicked(prev => !prev)}
      >
        <div className="post-card-btn_info space-y-2.5">
          <PostCardBookMark />
          <div className={userTextVariants({ device })}>
            <span className="mr-2">{userName}</span>
            <span className="text-text-light">{date}</span>
          </div>
          <p className={titleVariants({ device })}>{title}</p>
          <Badge size="xs" text="카테고리" className="bg-rose-400 text-white" />
        </div>
        <div className="post-card-btn_detail-btn text-text-sub my-auto w-4.5">
          <ChevronRight size={18} />
        </div>
      </Link>
    </>
  );
}
