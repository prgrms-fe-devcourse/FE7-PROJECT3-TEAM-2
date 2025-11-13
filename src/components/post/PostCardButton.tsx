"use client";

import { cva, VariantProps } from "class-variance-authority";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { PostCardType } from "@/types";
import { categoryColor } from "@/utils/category";
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
  postData: PostCardType;
  className?: string;
}

export default function PostCardButton({ device, postData, className }: PostCardButtonProps) {
  const { category, created_at, id, profiles, title } = postData;
  const color = categoryColor[category.name];
  const path = usePathname().split("/")[4];

  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  return (
    <Link
      href={`/posts/${category?.type}/post/${id}`}
      className={twMerge(containerVariants({ device }), path === postData.id && "bg-main-50", className)}
    >
      <div className="post-card-btn_info space-y-2.5">
        <PostCardBookMark />
        <div className={userTextVariants({ device })}>
          <span className="mr-2">{profiles?.name}</span>
          <span className="text-text-light">{dayjs(created_at).fromNow()}</span>
        </div>
        <p className={titleVariants({ device })}>{title}</p>
        <Badge size="xs" text={category?.name} style={{ backgroundColor: color, color: "#fff" }} />
      </div>
      <div className="post-card-btn_detail-btn text-text-sub my-auto w-4.5">
        <ChevronRight size={18} />
      </div>
    </Link>
  );
}
