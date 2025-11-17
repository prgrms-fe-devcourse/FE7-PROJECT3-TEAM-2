"use client";

import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { addReaction, deleteReaction, selectReaction } from "@/services/comment.client";
import { createClient } from "@/utils/supabase/client";

const buttonVariants = cva(
  `flex items-center justify-center rounded-xs bg-gray-300 p-0.5 text-gray-500 cursor-pointer`,
  {
    variants: {
      buttonType: {
        like: "bg-main text-white ",
        disLike: "bg-rose-600 text-white ",
        adopt: "bg-emerald-600 text-white ",
      },
    },
  }
);

const hasReactionVariants = cva(
  `flex items-center justify-center rounded-xs bg-gray-300 p-0.5 text-gray-500 cursor-pointer transition-all`,
  {
    variants: {
      buttonType: {
        like: "hover:bg-main/40 hover:text-white",
        disLike: "hover:bg-rose-600/40 hover:text-white",
        adopt: "hover:bg-emerald-600/40 hover:text-white",
      },
    },
  }
);

const textVariants = cva(`text-text-main`, {
  variants: {
    buttonType: {
      like: "text-main",
      disLike: "text-rose-600",
      adopt: "text-emerald-600",
    },
  },
});

interface CommentReactionBtnProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  isLogin: boolean;
  isMine: boolean;
  currentUserId: string;
  commentId: string;
  reactions?: { count: number };
  className?: string;
}

export default function CommentReactionBtn({
  isLogin,
  isMine,
  currentUserId,
  commentId,
  children,
  buttonType,
  reactions,
  className,
  ...props
}: CommentReactionBtnProps) {
  const [count, setCount] = useState(reactions?.count ?? 0);
  const [isActive, setIsActive] = useState(!!reactions);
  // const [isActive, setIsActive] = useState(() => count > 0);

  useEffect(() => {
    setIsActive(count > 0);
  }, [count]);

  const handleReaction = async (type: string) => {
    if (!isLogin) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }
    if (isMine) {
      alert("자신의 댓글에는 반응을 남길 수 없습니다.");
      return;
    }

    const { data, error } = await selectReaction(currentUserId, commentId);

    if (error) {
      console.error(`댓글 ${type} 조회 에러: ` + error.message);
      return;
    }

    // 반응 없을 경우 추가
    if (data?.length === 0) {
      setCount(prev => prev + 1);

      const { error } = await addReaction(type, currentUserId, commentId);

      if (error) {
        console.error(`댓글 ${type} 추가 에러: ` + error.message);
        setCount(prev => prev - 1);
        return;
      }
    } else {
      // 반응 있을 경우
      if (data[0].type !== type) {
        alert("좋아요 또는 싫어요 중 하나의 반응만 추가할 수 있습니다.");
        return;
      }
      setCount(prev => prev - 1);

      const { error } = await deleteReaction(currentUserId, commentId);

      if (error) {
        console.error(`댓글 ${type} 제거 에러: ` + error.message);
        setCount(prev => prev - 1);
        return;
      } else {
      }
    }
  };
  return (
    <div className="flex">
      <button
        onClick={() => {
          if (buttonType === "like" || buttonType === "disLike") handleReaction(buttonType);
        }}
        className={twMerge(
          hasReactionVariants({ buttonType }),
          isActive || buttonType === "adopt" ? buttonVariants({ buttonType }) : "",
          className
        )}
        {...props}
      >
        {children}
      </button>
      <span
        className={twMerge(
          "ml-1 text-[8px]",
          textVariants(),
          isActive || buttonType === "adopt" ? textVariants({ buttonType }) : ""
        )}
      >
        {buttonType === "adopt" ? "채택" : isActive && `${count}`}
      </span>
    </div>
  );
}
