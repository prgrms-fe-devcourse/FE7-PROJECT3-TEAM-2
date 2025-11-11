"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BadgeDetail from "./BadgeDetail";
import CategoryRanking from "./CategoryRanking";
import Badge from "../common/Badge";
import ResponsiveContainer from "../common/ResponsiveContainer";
import { Toggle } from "../common/Toggle";

//유저 아이디를 통한 데이터 패치 필요 (현재 구현 X)

export default function ProfileSlide({ userId }: { userId: string }) {
  const router = useRouter();
  const search = useSearchParams();
  const currentPath = usePathname();
  const isOpen = search.get("user");
  return (
    <>
      {isOpen && (
        <ResponsiveContainer className="min-w-[334px] px-6 py-8.5">
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                router.replace(currentPath);
              }}
              className="cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <div className="flex flex-col gap-2">
              <Badge size="sm" text="LV.1" className="bg-main text-white" />
              <p className="font-medium">김철수</p>
            </div>
          </div>
          <Toggle size="lg" isToggle={true} className="my-8 min-w-full py-3">
            팔로우
          </Toggle>
          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2">
                <p className="text-xs">팔로우</p>
                <p>120</p>
              </div>
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2">
                <p className="text-xs">팔로잉</p>
                <p>120</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2">
                <p className="text-xs">게시물</p>
                <p>120</p>
              </div>
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2">
                <p className="text-xs">채택 수</p>
                <p>24</p>
              </div>
            </div>
          </div>
          <div className="my-6 grid grid-cols-2 gap-6">
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <CategoryRanking Field="버거 분야" current={50} total={100} />
          </div>
        </ResponsiveContainer>
      )}
    </>
  );
}
