import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import MessageBubble from "@/components/MessageBubble";
import PostCard from "@/components/post/PostCard";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  return (
    <>
      <ResponsiveContainer className="bg-bg-sub w-full">
        <PostCard
          userName="나"
          title="이거 썸 맞나요?"
          content="이거 썸 맞나요?"
          className="bg-bg-main border-t-0 border-r-0 border-l-0"
        />
        <MessageBubble time="오전 10:30" text="안녕하세요 반가워요" />
      </ResponsiveContainer>
    </>
  );
}
