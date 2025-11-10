import MessageBubble from "@/components/comment/MessageBubble";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCard from "@/components/post/PostCard";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
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
      <ResponsiveContainer className="bg-bg-sub w-full overflow-hidden max-sm:border-none">
        <PostCard
          userName="나"
          title="이거 썸 맞나요?"
          content="이거 썸 맞나요?"
          className="bg-bg-main rounded-t-none border-t-0 border-r-0 border-l-0"
        />
        <div className="px-6 py-5">
          {commentDataSample ? (
            commentDataSample.map(comment => <MessageBubble key={comment.id} data={comment} />)
          ) : (
            <p className="text-text-sub text-center text-sm">등록된 댓글이 없습니다.</p>
          )}
        </div>
      </ResponsiveContainer>
    </>
  );
}
