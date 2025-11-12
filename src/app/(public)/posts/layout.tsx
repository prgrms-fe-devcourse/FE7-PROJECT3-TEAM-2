import Category from "@/components/post/Category";
import PostSideBar from "@/components/post/PostSideBar";
import ProfileSlide from "@/components/user/ProfileSlide";
import { createClient } from "@/utils/supabase/server";

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.from("category").select("*");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (data) {
    return (
      <div className="flex w-full flex-col p-6 max-sm:p-0">
        <Category categorys={data} />
        <div className="posts-area flex h-full w-full gap-6">
          <PostSideBar isLogin={!!user} />
          {children}
          <ProfileSlide userId="123" />
        </div>
      </div>
    );
  } else return null;
}
