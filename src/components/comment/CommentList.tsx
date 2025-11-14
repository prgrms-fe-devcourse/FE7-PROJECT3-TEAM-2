"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CommentDetailType } from "@/types";
import { createClient } from "@/utils/supabase/client";
import MessageBubble from "./MessageBubble";

export default function CommentList({
  userId,
  commentData,
  adoptedCommentId,
}: {
  userId: string;
  commentData: CommentDetailType[];
  adoptedCommentId: string;
}) {
  const supabase = createClient();
  const [comments, setComments] = useState<CommentDetailType[]>(commentData);

  useEffect(() => {
    const channel = supabase
      .channel("comments-room")
      .on("postgres_changes", { event: "*", schema: "public", table: "comments" }, payload => {
        console.log("New change:", payload);

        if (payload.eventType === "INSERT") {
          const getComment = async (commentId: string) => {
            const { data, error } = await supabase
              .rpc("get_detail_comment", {
                p_comment_id: commentId,
              })
              .select();
            if (!error) {
              setComments(prev => [...prev, data[0]]);
            }
          };
          getComment(payload.new.id);
        } else if (payload.eventType === "DELETE") {
          //   setComments(prev => prev.filter(c => c.id !== payload.old.id));
        } else if (payload.eventType === "UPDATE") {
          //   setComments(prev => prev.map(c => (c.id === payload.new.id ? payload.new : c)));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("comment-list");
    if (el) el.scrollTop = el.scrollHeight;
  }, [comments]);

  return (
    <div
      id="comment-list"
      className={twMerge(
        "comments scrollbar-hide flex h-full flex-col gap-4 overflow-scroll",
        comments?.length === 0 && "justify-center"
      )}
    >
      {comments?.length !== 0 && comments ? (
        comments.map(comment => (
          <MessageBubble
            key={comment.id}
            data={comment}
            currentUserId={userId ?? ""}
            adoptedId={adoptedCommentId ?? ""}
          />
        ))
      ) : (
        <p className="text-text-light text-center text-sm">등록된 댓글이 없습니다.</p>
      )}
    </div>
  );
}
