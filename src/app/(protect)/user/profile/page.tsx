import { ActivityIcon, ArrowRightToLineIcon, Award, ChartLine, UserRound, UserRoundPen } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import CircleProfileImage from "@/components/common/image/CircleProfileImage";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";
import CategoryRanking from "@/components/user/CategoryRanking";

export default function page() {
  return (
    <div className="mt-6.5 w-full pb-5 text-xs">
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <CircleProfileImage src={""} size="lg" />
          <div className="flex flex-col gap-2">
            <Badge size="sm" text="LV.1" className="bg-main text-white" />
            <p className="font-medium">김철수</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-xs">
          <p className="text-text-light">개인정보</p>
          <div className="flex flex-wrap gap-56 max-sm:flex-col max-sm:gap-8">
            <div>
              <p className="text-text-sub mb-3">이메일</p>
              <p>kimch@example.com</p>
            </div>
            <div>
              <p className="text-text-sub mb-3">전화번호</p>
              <p>010-9999-9999</p>
            </div>
            <div>
              <p className="text-text-sub mb-3">한줄 소개</p>
              <p>안녕하세요</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size={"xs"} variant={"secondary"}>
              <UserRoundPen size={12} className="mr-1" />
              수정하기
            </Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="my-6 flex flex-wrap justify-center gap-3 text-xs">
        <ResponsiveContainer className="flex flex-col gap-12 p-6 max-sm:gap-14 max-sm:rounded-3xl">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <UserRound size={12} />
              <p>연결 관리</p>
            </div>
            <div className="flex gap-6">
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>팔로우</p>
                <p className="text-base">120</p>
              </div>
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>팔로잉</p>
                <p className="text-base">120</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <ActivityIcon size={12} />
              <p>내 활동</p>
            </div>
            <div className="flex gap-6">
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>게시물</p>
                <p className="text-base">120</p>
              </div>
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>채택 수</p>
                <p className="text-base">24</p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer className="flex-1 p-6 max-sm:rounded-3xl max-sm:pb-3">
          <div className="flex flex-col gap-6 max-sm:gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Award size={12} />
                <p>마이 뱃지</p>
              </div>
              <p className="text-text-light">대표로 설정한 4개의 뱃지만 표시</p>
            </div>

            <div className="flex justify-center gap-16 max-sm:grid max-sm:grid-cols-2 max-sm:gap-1">
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
            </div>
            <Link href="badge" className="text-main flex items-center justify-end gap-2 px-3 py-1.5 text-xs">
              <ArrowRightToLineIcon size={10} />
              전체 뱃지 보기
            </Link>
          </div>
        </ResponsiveContainer>
      </div>
      <ResponsiveContainer className="flex-1 p-6 max-sm:rounded-3xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <ChartLine size={12} />
            <p>내 통계</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col">
            <CategoryRanking Field="버거 분야" current={50} total={100} />
            <CategoryRanking Field="버거 분야" current={50} total={100} />
            <CategoryRanking Field="버거 분야" current={50} total={100} />
          </div>
          <Link href="/chart" className="text-main flex items-center justify-end gap-2 px-3 py-1.5 text-xs">
            <ArrowRightToLineIcon size={10} />
            모든 랭킹 보기
          </Link>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
