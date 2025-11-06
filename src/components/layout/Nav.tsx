"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-bg-sub flex border border-gray-200 sm:w-[223px] sm:flex-col sm:justify-between">
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="/">게시판</Link>
        </li>
        <li className="flex flex-col">
          <Link href="/search">검색</Link>
          <Link
            href={{
              pathname: "/search",
              query: { type: "post" },
            }}
          >
            게시물 검색
          </Link>
          <Link
            href={{
              pathname: "search",
              query: { type: "user" },
            }}
          >
            사용자 검색
          </Link>
        </li>
        <li className="flex flex-col">
          <Link href="/user">마이페이지</Link>
          <Link href={{ pathname: "/user", query: { type: "profile" } }}>프로필</Link>
          <Link href={{ pathname: "/user", query: { type: "archive" } }}>아카이브</Link>
          <Link href={{ pathname: "/user", query: { type: "badge" } }}>뱃지</Link>
        </li>
        <li className="flex flex-col">
          <Link href="/chart">차트</Link>
          <Link href={{ pathname: "/chart", query: { type: "all" } }}>전체 랭킹</Link>
          <Link href={{ pathname: "/chart", query: { type: "category" } }}>분야별 랭킹</Link>
        </li>
      </ul>

      <ul>
        <li>설정</li>
        <li>로그인</li>
      </ul>
    </nav>
  );
}
