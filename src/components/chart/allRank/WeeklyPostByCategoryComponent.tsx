import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import ChartPie from "../ChartPie";

export default function WeeklyPostByCategoryComponent({
  stats,
}: {
  stats: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <ResponsiveContainer className="min-h-0 w-full px-6 py-7">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">북마크</span>
          <span className="text-text-light text-xs font-semibold">카테고리별</span>
        </div>
      </div>
      <ChartPie stats={stats} />
    </ResponsiveContainer>
  );
}
