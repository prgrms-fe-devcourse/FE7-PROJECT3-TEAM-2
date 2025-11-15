import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import ChartCardTtile from "../ChartCardTtile";
import ChartPie from "../ChartPie";
import PieChartKey from "../PieChartKey";

export default function BookmarkStatsComponent({
  stats,
}: {
  stats: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <ResponsiveContainer className="min-h-0 w-full px-5 py-6">
      <ChartCardTtile title="북마크" subTitle="카테고리별" />
      <div className="flex h-full flex-col gap-10 pt-5">
        <ChartPie stats={stats} />
        <PieChartKey stats={stats} />
      </div>
    </ResponsiveContainer>
  );
}
