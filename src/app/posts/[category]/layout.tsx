import PostSideBar from "@/components/post/PostSideBar";

export default function PostsCategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="posts-area flex w-full gap-6">
      <PostSideBar />
      {children}
    </div>
  );
}
