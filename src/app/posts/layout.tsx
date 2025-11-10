import Category from "@/components/post/Category";
import PostSideBar from "@/components/post/PostSideBar";
import { createClient } from "@/utils/supabase/client";

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data } = await supabase.from("category").select("*");

  if (data) {
    return (
      <div className="flex w-full flex-col p-6 max-sm:p-0">
        <div className="max-sm:hidden">
          <Category categorys={data} />
        </div>
        <div className="posts-area flex h-full w-full gap-6">
          <PostSideBar />
          {children}
        </div>
      </div>
    );
  } else return null;
}
