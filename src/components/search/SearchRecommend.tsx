import Badge from "@/components/common/Badge";

export default function SearchRecommend() {
  return (
    <div className="flex flex-col gap-3 px-6">
      <p className="text-main text-[14px]">추천 검색어</p>
      <div className="flex gap-3">
        {/* 더미 */}
        <Badge size="md" className="bg-pink-500 px-2 py-1 text-white" text="연애" />
        <Badge size="md" className="bg-emerald-500 px-2 py-1 text-white" text="친구" />
        <Badge size="md" className="bg-amber-500 px-2 py-1 text-white" text="비트코인" />
        <Badge size="md" className="bg-cyan-500 px-2 py-1 text-white" text="인간관계" />
      </div>
    </div>
  );
}
