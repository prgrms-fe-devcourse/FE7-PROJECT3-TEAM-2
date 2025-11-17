import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCard from "@/components/post/PostCard";
import { createComment, getComments } from "@/services/comment";
import { getDetailPost } from "@/services/post";
import { FormState } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { postId } = await params;
  const commentData = await getComments(postId);
  const postData = await getDetailPost(postId);

  async function writeComment(prevState: FormState, formData: FormData): Promise<FormState> {
    "use server";

    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      return {
        success: false,
        error: "로그인이 필요합니다.",
      };
    }

    const content = formData.get("content")?.toString() ?? "";

    if (!content.trim()) {
      return {
        success: false,
        error: "내용을 입력해주세요.",
      };
    }

    const [state] = await createComment({
      user_id: user.id,
      content: content,
      post_id: postId,
    });

    if (!state.success) return state;

    // 뱃지, 경험치

    return {
      success: true,
      error: null,
    };
  }

  return (
    <>
      <ResponsiveContainer className="bg-bg-sub scrollbar-hide flex w-full flex-col overflow-scroll max-sm:border-none">
        <PostCard
          commentCount={commentData?.length ?? 0}
          postData={postData}
          className="bg-bg-main rounded-t-none border-t-0 border-r-0 border-l-0"
        />
        <div className="flex h-full flex-col justify-between px-6 py-5">
          <CommentList
            userId={user?.id ?? ""}
            postId={postId}
            commentData={commentData ?? []}
            adoptedCommentId={postData?.adopted_comment_id ?? ""}
          />
          <CommentForm action={writeComment} />
        </div>
      </ResponsiveContainer>
    </>
  );
}
