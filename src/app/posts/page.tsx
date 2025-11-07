// app/posts/page.tsx
import { redirect } from "next/navigation";

export default function PostsPage() {
  // 카테고리 기본값 = 전체 보기 (all)
  // .../posts 경로로 접근시 리다이렉트
  redirect("/posts/all");
}
