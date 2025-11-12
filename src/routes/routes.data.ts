import homeIcon from "@/assets/images/navbar/board.png";
import chartIcon from "@/assets/images/navbar/chart.png";
import userIcon from "@/assets/images/navbar/profile.png";
import searchIcon from "@/assets/images/navbar/search.png";
import type { NavDataType } from "@/routes/routes.type";

export const navData: NavDataType[] = [
  {
    label: "게시판",
    pathname: "/posts",
    icon: homeIcon,
  },
  {
    label: "검색",
    pathname: "/search",
    icon: searchIcon,
    children: [
      {
        label: "게시물 검색",
        pathname: "post",
      },
      {
        label: "사용자 검색",
        pathname: "user",
      },
    ],
  },
  {
    label: "마이페이지",
    pathname: "/user",
    icon: userIcon,
    children: [
      {
        label: "프로필",
        pathname: "profile",
      },
      {
        label: "아카이브",
        pathname: "archive",
      },
      {
        label: "뱃지",
        pathname: "badge",
      },
    ],
  },
  {
    label: "차트",
    pathname: "/chart",
    icon: chartIcon,
    children: [
      {
        label: "전체 랭킹",
        pathname: "all-rank",
      },
      {
        label: "분야별 랭킹",
        pathname: "category-rank",
      },
    ],
  },
];
