import boardImg from "@/assets/images/sidebar/board.png";
import chartImg from "@/assets/images/sidebar/chart.png";
import profileImg from "@/assets/images/sidebar/profile.png";
import searchImg from "@/assets/images/sidebar/search.png";
import { NavButton } from "@/components/common/NavButton";

export default function Sidebar() {
  return (
    // 임시
    <aside className="bg-bg-sub flex h-full w-[223px] flex-col gap-3.5 px-5 pt-5">
      <NavButton variant="main" icon_img={boardImg}>
        게시판
      </NavButton>
      <NavButton variant="main" icon_img={searchImg} active>
        검색
      </NavButton>
      <NavButton variant="sub">게시판 검색</NavButton>
      <NavButton variant="sub" active>
        프로필 검색
      </NavButton>
      <NavButton variant="main" icon_img={profileImg}>
        마이 페이지
      </NavButton>
      <NavButton variant="sub">프로필</NavButton>
      <NavButton variant="sub">아카이브</NavButton>
      <NavButton variant="sub">뱃지</NavButton>
      <NavButton variant="main" icon_img={chartImg}>
        차트
      </NavButton>
      <NavButton variant="sub">전체 랭킹</NavButton>
      <NavButton variant="sub">분야별 랭킹</NavButton>
    </aside>
  );
}
