import PostSideBar from "@/components/post/PostSideBar";
import ProfileSlide from "@/components/user/ProfileSlide";
import { PostCardType } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const { category } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let postData: PostCardType[] = [];

  if (category) {
    if (category === "all") {
      const { data, error } = await supabase.from("post_card").select("*");

      if (!error) {
        postData = data;
      } else return null;
    } else {
      const { data, error } = await supabase.from("post_card").select("*").eq("category->>type", category);

      if (!error) {
        postData = data;
      } else return null;
    }
  }

  return (
    <div className="posts-area flex h-full w-full gap-6">
      <PostSideBar isLogin={!!user} postData={postData ?? []} />
      {children}
      <ProfileSlide userId="123" />
    </div>
  );
}
