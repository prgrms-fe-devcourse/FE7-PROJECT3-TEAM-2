"use client";

import { cva, VariantProps } from "class-variance-authority";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { PostType } from "@/types";
import PostCardBookMark from "./PostCardBookMark";
import { postCardSampleDataType } from "./PostSideBar";
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

const userTextVariants = cva("post-card-btn_user flex justify-start items-center", {
  variants: {
    device: {
      pc: "text-xs",
      mobile: "text-[8px]",
    },
  },
  defaultVariants: {
    device: "pc",
  },
});

const titleVariants = cva("post-card-btn_title font-bold", {
  variants: {
    device: {
      pc: "text-base",
      mobile: "text-xs",
    },
  },
  defaultVariants: {
    device: "pc",
  },
});

interface PostCardButtonProps extends VariantProps<typeof containerVariants> {
  data: postCardSampleDataType;
  className?: string;
}

export default function PostCardButton({ device, data, className }: PostCardButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { id, createdAt, name, title, categoryName, categoryType } = data;
  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  return (
    <Link
      href={`/posts/${categoryType}/post/${id}`}
      className={twMerge(containerVariants({ device }), className, isClicked && "bg-main-50")}
      onClick={() => setIsClicked(prev => !prev)}
    >
      <div className="post-card-btn_info space-y-2.5">
        <PostCardBookMark />
        <div className={userTextVariants({ device })}>
          <span className="mr-2">{name}</span>
          <span className="text-text-light">{dayjs(createdAt).fromNow()}</span>
        </div>
        <p className={titleVariants({ device })}>{title}</p>
        <Badge size="xs" text={categoryName} className="bg-rose-400 text-white" />
      </div>
      <div className="post-card-btn_detail-btn text-text-sub my-auto w-4.5">
        <ChevronRight size={18} />
      </div>
    </Link>
  );
}
