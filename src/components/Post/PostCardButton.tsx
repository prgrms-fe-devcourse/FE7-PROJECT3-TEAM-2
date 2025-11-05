"use client";

import { cva } from "class-variance-authority";
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
        <button className="post-card-btn_detail-btn my-auto w-4.5">
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            className="text-text-sub"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.78033 4.71967C6.07322 5.01256 6.07322 5.48744 5.78033 5.78033L1.28033 10.2803C0.987437 10.5732 0.512563 10.5732 0.21967 10.2803C-0.0732233 9.98744 -0.0732233 9.51256 0.21967 9.21967L4.18934 5.25L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
