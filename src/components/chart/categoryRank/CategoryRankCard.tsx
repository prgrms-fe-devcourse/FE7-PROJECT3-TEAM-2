import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import AdoptRatioChart from "./AdoptRatioChart";

export default function CategoryRankCard() {
  return (
    <ResponsiveContainer className="col-span-1 flex min-h-[360px] flex-col gap-10 p-6">
      <div className="flex flex-col gap-2">
        <span className="text-text-light text-sm font-semibold">카테고리</span>
        <span className="text-lg font-semibold text-pink-500">연애</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-text-title mb-2 text-lg font-semibold">콘텐츠 수</div>
        <div className="flex gap-18">
          <div className="mb-2 flex flex-col gap-1">
            <div className="text-text-title mb-2 text-sm font-semibold">게시글</div>
            <div className="text-text-sub text-2xl">12</div>
            <div className="text-text-title text-xs">전체의 10%</div>
          </div>
          <div className="mb-2 flex flex-col gap-1">
            <div className="text-text-title mb-2 text-sm font-semibold">훈수</div>
            <div className="text-text-sub text-2xl">65</div>
            <div className="text-text-title text-xs">전체의 25%</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-text-title mb-2 text-lg font-semibold">통계</div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <AdoptRatioChart label="평균 훈수" percentage={60} color="#cfd4da" />
          <AdoptRatioChart label="채택률" percentage={60} color="#f6339a" />
          <AdoptRatioChart label="평균 뱃지" percentage={3} color="#f6339a" />
          <AdoptRatioChart label="훈수별 채택 수" percentage={60} color="#f6339a" />
        </div>
      </div>
    </ResponsiveContainer>
  );
}
