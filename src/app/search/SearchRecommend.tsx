import Badge from "@/components/common/Badge";

export default function SearchRecommend() {
  return (
    <div className="flex flex-col gap-3 px-6">
      <p className="text-main text-[14px]">추천 검색어</p>
      <div className="flex gap-3">
        {/* 더미 */}
        <Badge size="md" bgColor="#ec4899" textColor="white" text="연애" />
        <Badge size="md" bgColor="#4858ec" textColor="white" text="친구" />
        <Badge size="md" bgColor="#45d5b6" textColor="white" text="비트코인" />
        <Badge size="md" bgColor="#f9b446" textColor="white" text="인간관계" />
      </div>
    </div>
  );
}
