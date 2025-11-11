import { redirect } from "next/navigation";
import PostForm from "@/components/post/PostForm";
import { createPost, updatePost } from "@/services/post";
import { CategoryType, FormState } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function NewPostPage() {
  const supabase = await createClient();
  const { data } = await supabase.from<"category", CategoryType>("category").select("*");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("로그인이 필요한 기능입니다.");
    redirect("/login");
  }

  async function writePost(prevState: FormState, formData: FormData): Promise<FormState> {
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

    const categoryId = formData.get("category_id")?.toString() ?? "";
    const title = formData.get("title")?.toString() ?? "";
    const content = formData.get("content")?.toString() ?? "";
    const imgFile = formData.get("upload_image") as File;

    if (!categoryId || !title || !content) {
      return {
        success: false,
        error: "입력 값을 모두 채워주세요.",
      };
    }

    // supabase에 post 데이터 insert
    const [state, data] = await createPost({
      user_id: user.id,
      category_id: categoryId,
      title: title,
      content: content,
    });

    if (!state.success) return state;

    if (imgFile && imgFile.size > 0) {
      const fileExt = imgFile.name.split(".").pop();
      const fileName = `${user.id}${Date.now()}.${fileExt}`;

      const { error } = await supabase.storage.from("user_upload_image").upload(fileName, imgFile);

      if (error) {
        return {
          success: false,
          error: "이미지 업로드 실패",
        };
      } else {
        const { data: image } = supabase.storage.from("user_upload_image").getPublicUrl(fileName);

        const [updateState, updateData] = await updatePost({
          id: data?.id ? data.id : "",
          updateData: { post_image: image.publicUrl },
        });

        if (!updateState?.success) return state;

        // 뱃지, 경험치
        if (updateData) {
          const { data: newBadge, error: newBadgeError } = await supabase.rpc("grant_badges_and_update_exp", {
            p_user_id: user.id,
            p_category_id: categoryId,
          });

          if (newBadgeError) throw newBadgeError;

          if (newBadge[0]) {
            const badgeInfo = newBadge[0];
            console.log(`${badgeInfo.badge_name}, 뱃지를 얻으셨습니다!`);
            if (badgeInfo.leveled_up) console.log(`${badgeInfo.new_level}, 레벨업!`);
          }
        }

        return {
          success: true,
          error: null,
        };
      }
    }

    // 뱃지, 경험치
    if (data) {
      const { data: newBadge, error: newBadgeError } = await supabase.rpc("grant_badges_and_update_exp", {
        p_user_id: user.id,
        p_category_id: categoryId,
      });

      if (newBadgeError) throw newBadgeError;

      if (newBadge[0]) {
        const badgeInfo = newBadge[0];
        console.log(`${badgeInfo.badge_name}, 뱃지를 얻으셨습니다!`);
        if (badgeInfo.leveled_up) console.log(`${badgeInfo.new_level}, 레벨업!`);
      }
    }

    return {
      success: true,
      error: null,
    };
  }

  return <PostForm categorys={data ?? []} action={writePost} />;
}
