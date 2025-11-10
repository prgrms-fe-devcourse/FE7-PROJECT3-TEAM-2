import { cva } from "class-variance-authority";
import { Stamp, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { CommentType } from "@/types";
import formatDate from "@/utils/formatDate";
import CommentReactionBtn from "./CommentReactionBtn";
import Badge from "../common/Badge";

const BubbleVariants = cva("flex items-end gap-2 w-full", {
  variants: {
    isMine: {
      true: "justify-end",
      false: "justify-start",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

const TextVariants = cva("max-w-[40%] px-5 py-3 rounded-2xl text-sm", {
  variants: {
    isMine: {
      true: "bg-main text-white",
      false: "bg-white text-gray-900 border-2 border-gray-100",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

export default function MessageBubble({ data }: { data: CommentType }) {
  const currentUserId = "123";
  const { content, created_at, id, post_id, user_id } = data;
  const isMine = currentUserId !== user_id;

  return (
    <div className={BubbleVariants({ isMine })}>
      {isMine ? (
        <>
          <div className="flex flex-col items-end">
            <button className="text-text-sub text-[8px]">수정 삭제</button>
            <span className="text-text-sub text-[8px]">{formatDate(created_at)}</span>
          </div>
          <div className={TextVariants({ isMine })}>
            <p>{content}</p>
          </div>
        </>
      ) : (
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-start gap-2">
            <Image
              src="/profile_sample.svg"
              alt="comment user profile image"
              width={32}
              height={32}
              className="rounded-sm"
            />
            {/* <CircleProfileImage src="/profile_sample.svg" alt="comment user profile image" size="md" rounded="lg" /> */}
            <span className="text-sm">{user_id}</span>
            <div className="flex flex-col">
              <Badge text="LV.31" size="xs" className="mb-1 bg-amber-400 px-1" />
              <Badge text="연애프로 패널급" size="xs" className="bg-pink-600 px-1 text-white" />
            </div>
          </div>
          <div className="flex items-end">
            <div className={TextVariants({ isMine })}>
              <p>{content}</p>
            </div>
            <span className="text-text-sub text-[8px]">{formatDate(created_at)}</span>
          </div>
          <div className="comment-btns flex gap-2">
            <CommentReactionBtn buttonType="like" text="1">
              <ThumbsUp size={8} />
            </CommentReactionBtn>
            <CommentReactionBtn buttonType="disLike" text="1">
              <ThumbsDown size={8} />
            </CommentReactionBtn>
            <CommentReactionBtn buttonType="adopt" text="1">
              <Stamp size={8} />
            </CommentReactionBtn>
          </div>
        </div>
      )}
    </div>
  );
}
