import { twMerge } from "tailwind-merge";
import MessageBubble from "@/components/comment/MessageBubble";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCard from "@/components/post/PostCard";
import { getDetailPost } from "@/services/post";
import { createClient } from "@/utils/supabase/server";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const supabase = await createClient();
  const { postId } = await params;
  const postData = await getDetailPost(postId);
  const commentDataSample = [
    {
      id: "1",
      user_id: "123",
      post_id: "1234",
      content: "안녕하세요 반가워요",
      created_at: "2025-11-07 07:31:52.812184+00",
    },
    {
      id: "2",
      user_id: "223",
      post_id: "1234",
      content: "안녕하세요 반가워요",
      created_at: "2025-11-07 07:41:52.812184+00",
    },
  ];
  // const commentDataSample = null;
  return (
    <>
      <ResponsiveContainer className="bg-bg-sub flex w-full flex-col overflow-hidden max-sm:border-none">
        <PostCard postData={postData} className="bg-bg-main rounded-t-none border-t-0 border-r-0 border-l-0" />
        <div className="flex h-full flex-col justify-between px-6 py-5">
          <div className={twMerge("comments flex h-full flex-col", !commentDataSample && "justify-center")}>
            {" "}
            {commentDataSample ? (
              commentDataSample.map(comment => <MessageBubble key={comment.id} data={comment} />)
            ) : (
              <p className="text-text-sub text-center text-sm">등록된 댓글이 없습니다.</p>
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
