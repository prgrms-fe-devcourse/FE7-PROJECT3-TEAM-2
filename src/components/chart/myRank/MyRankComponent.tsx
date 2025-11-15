import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function MyRankComponent() {
  return (
    <ResponsiveContainer className="w-full px-6 py-7">
      <div className="mb-6 flex flex-col gap-2">
        <span className="text-text-title text-lg font-semibold">내 통계</span>
        <span className="text-text-light text-xs font-semibold">내가 무엇을 했더라...?</span>
      </div>
    </ResponsiveContainer>
  );
}
