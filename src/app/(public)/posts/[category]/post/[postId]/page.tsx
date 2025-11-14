import { twMerge } from "tailwind-merge";
import MessageBubble from "@/components/comment/MessageBubble";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCard from "@/components/post/PostCard";
import { getComments } from "@/services/comment";
import { getDetailPost } from "@/services/post";
import { createClient } from "@/utils/supabase/server";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { postId } = await params;
  const postData = await getDetailPost(postId);
  const commentData = await getComments(postId);
  return (
    <>
      <ResponsiveContainer className="bg-bg-sub scrollbar-hide flex w-full flex-col overflow-scroll max-sm:border-none">
        <PostCard
          commentCount={commentData?.length ?? 0}
          postData={postData}
          className="bg-bg-main rounded-t-none border-t-0 border-r-0 border-l-0"
        />
        <div className="flex h-full flex-col justify-between px-6 py-5">
          <div
            className={twMerge(
              "comments scrollbar-hide flex h-full flex-col gap-4 overflow-scroll",
              commentData?.length === 0 && "justify-center"
            )}
          >
            {commentData?.length !== 0 && commentData ? (
              commentData.map(comment => (
                <MessageBubble
                  key={comment.id}
                  data={comment}
                  currentUserId={user?.id ?? ""}
                  adoptedId={postData?.adopted_comment_id ?? ""}
                />
              ))
            ) : (
              <p className="text-text-light text-center text-sm">등록된 댓글이 없습니다.</p>
            )}
          </div>
          <div className="comment-input-container bg-bg-main mt-5 flex items-center rounded-lg px-5 py-4">
            <input type="text" name="" id="" className="bg-bg-sub mr-3 flex-3/4 rounded-sm px-2 py-1 outline-0" />
            <button className="bg-main cursor-pointer rounded-sm px-3 py-1.5 text-xs text-white">보내기</button>
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
}
