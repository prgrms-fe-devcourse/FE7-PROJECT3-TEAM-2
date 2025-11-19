import PostSideBar from "@/components/post/PostSideBar";
import { getPosts } from "@/services/post/post.server";
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
    <div className="posts-area mt-1 flex w-full flex-1 gap-6 p-6 pt-0 max-sm:p-0">
      <PostSideBar userId={user?.id} postData={postData ?? []} />
      {children}
    </div>
  );
}
