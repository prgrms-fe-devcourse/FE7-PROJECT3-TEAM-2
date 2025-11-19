import PostDetail from "@/components/post/PostDetail";
import { createComment, getComments } from "@/services/comment/comment.server";
import { getDetailPost } from "@/services/post/post.server";
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
    <PostDetail
      user={user}
      commentData={commentData ?? []}
      postData={postData}
      postId={postId}
      writeComment={writeComment}
    />
  );
}
