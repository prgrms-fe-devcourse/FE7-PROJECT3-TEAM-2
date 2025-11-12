import { Grid2x2, Plus, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../common/Button";
import { Divider } from "../common/Divider";

export default function PostSideButton({ isLogin }: { isLogin: boolean }) {
  return (
    <>
      {isLogin && (
        <>
          <Link href="/posts/write" className="max-sm:w-full">
            <Button size="md" className="w-60 max-sm:w-full">
              <Plus size={24} />
              <span>글쓰기</span>
            </Button>
          </Link>
          <Divider width="90" />
          <div className="post-filter-btn flex gap-3 max-sm:w-full">
            <Button size="sm" className="max-sm:w-full">
              <Grid2x2 size={12} className="mr-2" />
              <span>전체보기</span>
            </Button>
            <Button size="sm" className="px-3 max-sm:w-full" variant="tertiary">
              <Users size={12} className="mr-2" />
              <span>내가 팔로우한 사용자</span>
            </Button>
          </div>
        </>
      )}{" "}
    </>
  );
}
