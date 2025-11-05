"use client";

import { cva } from "class-variance-authority";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PostCardBookMark from "./PostCardBookMark";
import Badge from "../Badge";

type PostCardButtonDevice = "pc" | "mobile";

interface PostCardButtonProps {
  device: PostCardButtonDevice;
  userName: string;
  title: string;
  date: string;
}

const containerVariants = cva(
  "post-card-btn bg-bg-main hover:bg-main-50 text-text-title px-6 py-3 flex justify-between items-center cursor-pointer rounded-xl transition-all duration-300",
  {
    variants: {
      device: {
        pc: "w-[244px]",
        mobile: "w-[190px]",
      },
    },
  }
);

const userTextVariants = cva("post-card-btn_user", {
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

export default function PostCardButton({ device, userName, title, date }: PostCardButtonProps) {
  const [isClicked, SetIsClicked] = useState(false);

  return (
    <>
      <div
        className={twMerge(containerVariants({ device }), isClicked && "bg-main-50")}
        onClick={() => SetIsClicked(prev => !prev)}
      >
        <div className="post-card-btn_info space-y-2.5">
          <PostCardBookMark />
          <div className={userTextVariants({ device })}>
            <span className="mr-2">{userName}</span>
            <span className="text-text-light">{date}</span>
          </div>
          <p className={titleVariants({ device })}>{title}</p>
          <Badge size="xs" bgColor="#ED7371" textColor="#FFFFFF" text="카테고리" />
        </div>
        <button className="post-card-btn_detail-btn text-text-sub my-auto w-4.5">
          <ChevronRight size={18} />
        </button>
      </div>
    </>
  );
}
