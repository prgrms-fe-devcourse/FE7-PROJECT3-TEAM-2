import { Grid2x2, Plus, Users } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import PostCardButton from "@/components/post/PostCardButton";

export default function PostSideBar() {
  return (
    <div className="category-side flex max-w-[270px] flex-col items-center justify-center gap-2">
      <Button size="md" className="w-60">
        <Plus size={24} />
        <span>글쓰기</span>
      </Button>
      <Divider width="90" />
      <div className="post-filter-btn flex gap-3">
        <Button size="sm">
          <Grid2x2 size={12} className="mr-2" />
          <span>전체보기</span>
        </Button>
        <Button size="sm" className="px-3" variant="tertiary">
          <Users size={12} className="mr-2" />
          <span>내가 팔로우한 사용자</span>
        </Button>
      </div>
      <ResponsiveContainer className="px-3 py-4.5">
        <PostCardButton categoryId="all" postId="1" userName="김철수" title="이거 썸 맞나요?" date="5일 전" />
        <PostCardButton categoryId="all" postId="1" userName="김철수" title="이거 썸 맞나요?" date="5일 전" />
      </ResponsiveContainer>
    </div>
  );
}
