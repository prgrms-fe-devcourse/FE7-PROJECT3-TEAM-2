import { cva } from "class-variance-authority";
import { Stamp, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { CommentDetailType } from "@/types";
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

const TextVariants = cva("max-w-[45%] px-3 py-2 rounded-2xl text-sm", {
  variants: {
    isMine: {
      true: "bg-main text-white rounded-tr-none",
      false: "bg-white text-gray-900 border-2 border-gray-100 rounded-tl-none",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

export default function MessageBubble({
  data,
  currentUserId,
  adoptedId,
}: {
  data: CommentDetailType;
  currentUserId: string;
  adoptedId: string;
}) {
  const { content, created_at, id, reactions, user_id, profiles } = data;
  const isAdopted = id === adoptedId;
  const isMine = currentUserId === user_id;

  return (
    <div className={BubbleVariants({ isMine })}>
      {isMine ? (
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end">
              <button className="text-text-sub text-[8px]">수정 삭제</button>{" "}
              <span className="text-text-sub text-[8px]">{formatDate(created_at)}</span>
            </div>

            <div className={TextVariants({ isMine })}>
              <p className="whitespace-pre-wrap">{content}</p>
            </div>
          </div>
          <div className="comment-btns flex justify-end gap-2">
            <CommentReactionBtn buttonType="like" reactions={reactions.like}>
              <ThumbsUp size={8} />
            </CommentReactionBtn>
            <CommentReactionBtn buttonType="disLike" reactions={reactions.disLike}>
              <ThumbsDown size={8} />
            </CommentReactionBtn>
            {isAdopted && (
              <CommentReactionBtn buttonType="adopt">
                <Stamp size={8} />
              </CommentReactionBtn>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={profiles.avatar_image ?? "/profile_sample.svg"}
              alt="comment user profile image"
              width={32}
              height={32}
              className="rounded-sm"
            />{" "}
            <div className="flex flex-col justify-center gap-0.5">
              <span className="text-sm">{profiles.name}</span>
              <div className="flex gap-1">
                <Badge text="LV.31" size="xs" className="bg-amber-400 px-1 py-0.5" />
                <Badge text="연애프로 패널급" size="xs" className="bg-pink-600 px-1 py-0.5 text-white" />
              </div>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <div className={TextVariants({ isMine })}>
              <p className="whitespace-pre-wrap">{content}</p>
            </div>
            <span className="text-text-sub text-[8px]">{formatDate(created_at)}</span>
          </div>
          <div className="comment-btns flex gap-2">
            <CommentReactionBtn buttonType="like" reactions={reactions.like}>
              <ThumbsUp size={8} />
            </CommentReactionBtn>

            <CommentReactionBtn buttonType="disLike" reactions={reactions.disLike}>
              <ThumbsDown size={8} />
            </CommentReactionBtn>
            {isAdopted && (
              <CommentReactionBtn buttonType="adopt">
                <Stamp size={8} />
              </CommentReactionBtn>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
