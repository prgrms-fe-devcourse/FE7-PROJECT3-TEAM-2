import PostSideBar from "@/components/post/PostSideBar";

export default function PostsCategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="posts-area flex h-full w-full gap-6">
      <PostSideBar />
      {children}
    </div>
  );
}
