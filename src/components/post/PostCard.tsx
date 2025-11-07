import { cva, VariantProps } from "class-variance-authority";
import { BookMarked, Heart, MessageSquareMore, Share2 } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Badge from "../common/Badge";

const containerVariants = cva("post-card flex flex-col rounded-3xl border border-gray-200 px-6 py-5", {
  variants: {
    device: {
      pc: "min-w-[518px]",
      mobile: "min-w-[320px]",
    },
  },
  defaultVariants: {
    device: "pc",
  },
});

const thumbnailVariants = cva(
  "post-card_post-thumbnail relative overflow-hidden object-cover rounded-xl border border-gray-200",
  {
    variants: {
      device: {
        pc: "min-w-[470px] h-[196px]",
        mobile: "min-w-[272px] h-[113px]",
      },
    },
    defaultVariants: {
      device: "pc",
    },
  }
);

interface PostCardProps extends VariantProps<typeof containerVariants> {
  userName: string;
  title: string;
  content: string;
  className?: string;
}

export default function PostCard({ device, userName, title, content, className }: PostCardProps) {
  return (
    <>
      <div className={twMerge(containerVariants({ device }), className)}>
        <div className="post-card_user mb-7.5 flex items-center justify-between">
          <div className="post-card_user-info text-text-title flex items-center">
            <Image
              src="/profile_sample.svg"
              alt="user profile image"
              width={32}
              height={32}
              className="rounded-sm border border-gray-200"
            />
            <span className="mr-2 ml-5 text-xs">{userName}</span>
            <Badge size="sm" text="칭호칭호" className="bg-gray-200 text-black" />
          </div>
          <button className="hover:bg-main-50 flex h-max cursor-pointer items-center justify-center rounded-lg p-2">
            <span className="text-main text-[8px]">팔로우</span>
          </button>
        </div>
        <div className="post-card_detail flex flex-col gap-3">
          <p className="post-card_post-title text-text-title text-base font-bold">{title}</p>
          <p className="post-card_post-content text-text-sub text-sm">{content}</p>
          <div className={thumbnailVariants({ device })}>
            <Image src="/post_thumbnail_sample.jpg" alt="post thumbnail image" fill className="object-cover" />
          </div>
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
