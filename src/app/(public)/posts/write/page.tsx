import { redirect } from "next/navigation";
import PostForm from "@/components/post/PostForm";
import { CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function NewPostPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("category").select("*");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("로그인이 필요한 기능입니다.");
    redirect("/login");
  }

  return <PostForm categorys={data as CategoryType[]} userId={user.id} />;
}
