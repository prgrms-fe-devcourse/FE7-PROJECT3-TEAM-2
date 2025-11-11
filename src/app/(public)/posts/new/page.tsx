import PostForm from "@/components/post/PostForm";
import { CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/client";

export default async function NewPostPage() {
  const supabase = createClient();
  const { data } = await supabase.from("category").select("*");
  return <PostForm categorys={data as CategoryType[]} />;
}
