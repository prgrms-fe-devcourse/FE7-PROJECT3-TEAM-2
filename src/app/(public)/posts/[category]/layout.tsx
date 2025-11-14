import PostSideBar from "@/components/post/PostSideBar";
import ProfileSlide from "@/components/user/ProfileSlide";
import { getPosts } from "@/services/post";
import { createClient } from "@/utils/supabase/server";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const postData = await getPosts(category);

  return (
    <div className="posts-area flex h-full w-full gap-6 p-6 pt-0 max-sm:px-6 max-sm:pb-6">
      <PostSideBar isLogin={!!user} postData={postData ?? []} />
      {children}
      <ProfileSlide userId="123" />
    </div>
  );
}
