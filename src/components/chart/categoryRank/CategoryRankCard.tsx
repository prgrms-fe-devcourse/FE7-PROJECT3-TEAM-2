import testImg from "@/assets/images/navbar/profile.png";
import Badge from "@/components/common/Badge";
import CircleProfileImage from "@/components/common/image/CircleProfileImage";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { CategoryType } from "@/types";
import { categoryColor } from "@/utils/category";
import AdoptRatioChart from "./AdoptRatioChart";
import ChartFillPie from "../ChartFillPie";

export default function CategoryRankCard({
  data,
  stats,
}: {
  data: {
    name: string;
    value: number;
  }[];
  stats: CategoryType;
}) {
  const color = categoryColor[stats.name];

  return (
    <ResponsiveContainer className="col-span-1 flex min-h-[360px] flex-col gap-8 p-6 whitespace-nowrap md:gap-12">
      <div className="flex flex-col gap-2">
        <span className="text-text-light text-sm font-semibold">카테고리</span>
        <span className="font-semibol text-lg" style={{ color }}>
          {stats.name}
        </span>
      </div>
      <div className="flex w-full flex-wrap gap-12">
        <div className="flex w-full max-w-[200px] flex-col gap-2">
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <div className="text-text-title mb-2 text-sm font-semibold">총 Exp</div>
              <div className="text-text-sub text-lg">100,000P</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-text-title mb-2 text-sm font-semibold">평균 훈수</div>
              <div className="text-text-sub text-lg">65 개</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-text-title mb-1 text-sm font-semibold">키워드 TOP3</div>
          <div className="flex gap-5">
            <Badge size="md" className="px-2 py-1 text-white" text="사랑" style={{ backgroundColor: color }} />
            <Badge size="md" className="px-2 py-1 text-white" text="사랑" style={{ backgroundColor: color }} />
            <Badge size="md" className="px-2 py-1 text-white" text="사랑" style={{ backgroundColor: color }} />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="text-text-title mb-2 text-sm font-semibold">랭킹 TOP3</div>
        <div className="grid max-w-[360px] cursor-pointer grid-cols-3 gap-8">
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#F9E79F] p-3 px-4">
            <CircleProfileImage src={testImg} size="md" className="border-none" />
            <span className="text-text-content font-semibol text-xs">내이름훈수왕</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#D6DBDF] p-3 px-4">
            <CircleProfileImage src={testImg} size="md" className="border-none" />
            <span className="text-text-content text-xs font-semibold">꼰대</span>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#F5CBA7] p-3 px-4">
            <CircleProfileImage src={testImg} size="md" className="border-none" />
            <span className="text-text-content text-xs font-semibold">훈장님</span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-10">
        <div className="flex w-full max-w-[250px] flex-col gap-2">
          <div className="text-text-title mb-2 text-sm font-semibold">지표</div>
          <div className="flex gap-7">
            <AdoptRatioChart label="채택률" percentage={60} color={color} />
            <AdoptRatioChart label="사용자별 뱃지" percentage={3} color={color} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-text-title text-sm font-semibold">업적별 뱃지</div>
          <div className="h-[130px]">
            <ChartFillPie stats={data} />
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
