import { cva, VariantProps } from "class-variance-authority";
import { Heart, MessageSquareMore, Share2 } from "lucide-react";
import Image from "next/image";
import Badge from "../common/Badge";

const containerVariants = cva("post-card flex flex-col rounded-3xl border border-gray-200 px-6 py-5", {
  variants: {
    device: {
      pc: "w-[518px]",
      mobile: "w-[320px]",
    },
    defaultVariants: {
      device: "pc",
    },
  },
});

const thumbnailVariants = cva(
  "post-card_post-thumbnail relative overflow-hidden object-cover rounded-xl border border-gray-200",
  {
    variants: {
      device: {
        pc: "w-[470px] h-[196px]",
        mobile: "w-[272px] h-[113px]",
      },
      defaultVariants: {
        device: "pc",
      },
    },
  }
);

interface PostCardProps extends VariantProps<typeof containerVariants> {
  userName: string;
  title: string;
  content: string;
}

export default function PostCard({ device, userName, title, content }: PostCardProps) {
  return (
    <>
      <div className={containerVariants({ device })}>
        <div className="post-card_user mb-7.5 flex items-center justify-between">
          <div className="post-card_user-info text-text-title flex items-center">
            <Image
              src="/profile_sample.svg"
              alt="user profile image"
              width={32}
              height={32}
              className="rounded-sm border border-gray-200"
            />
            <span className="mr-2 ml-5 text-xs">userName</span>
            <Badge size="sm" bgColor="#CAD5E2" textColor="#000000" text="칭호칭호" />
          </div>
          <button className="hover:bg-main-50 flex h-max cursor-pointer items-center justify-center rounded-lg p-2">
            <span className="text-main text-[8px]">팔로우</span>
          </button>
        </div>
        <div className="post-card_detail flex flex-col gap-3">
          <p className="post-card_post-title text-text-title text-base">제목</p>
          <p className="post-card_post-content text-text-sub text-sm">내용</p>
          <div className={thumbnailVariants({ device })}>
            <Image src="/post_thumbnail_sample.jpg" alt="post thumbnail image" fill className="object-cover" />
          </div>
          <div className="post-card_btns text-text-sub flex gap-6">
            <div className="post-card_like flex items-center justify-center">
              <Heart size={12} />
              <span className="ml-2 text-xs">1</span>
            </div>
            <div className="post-card_comment flex items-center justify-center">
              <MessageSquareMore size={12} />
              <span className="ml-2 text-xs">1</span>
            </div>
            <div className="post-card_share flex items-center justify-center">
              <Share2 size={12} />
              <span className="ml-2 text-xs">1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
