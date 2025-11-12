import PostSideBar from "@/components/post/PostSideBar";
import ProfileSlide from "@/components/user/ProfileSlide";
import { getPosts } from "@/services/post";
import { BadgeType } from "@/types/badge";
import { createClient } from "@/utils/supabase/server";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: BadgeType };
}) {
  const { category } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const postData = await getPosts(category);

  return (
    <div className="posts-area flex h-full w-full gap-6">
      <PostSideBar isLogin={!!user} postData={postData ?? []} />
      {children}
      <ProfileSlide userId="123" />
    </div>
  );
}
