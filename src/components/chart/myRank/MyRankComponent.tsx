import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { User } from "@supabase/supabase-js";
import ChartCardTtile from "../ChartCardTtile";
import ChartPie from "../ChartPie";
import PieChartKey from "../PieChartKey";

export default function MyRankComponent({ user }: { user: User }) {
  const stats = [
    { name: "게임", value: 30 },
    { name: "생활", value: 70 },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
      <ResponsiveContainer className="min-h-0 w-full px-5 py-6">
        <ChartCardTtile title="내 유형" subTitle="내가 무엇을 했더라...?" />
        <div className="max-h-100px gap mx-auto flex w-[90%] gap-15">
          <div className="flex h-full w-[40%] flex-col gap-10 pt-5">
            <ChartPie stats={stats} innerRadius={78} height={200} />
            <PieChartKey stats={stats} />
          </div>
          <ResponsiveContainer className="min-w-[200px] bg-gray-100 p-5">
            <div className="flex flex-col gap-2">
              <span className="text-text-title text-sm font-semibold">당신의 유형은?</span>
              <span className="text-text-light text-xs font-semibold">{`"게임/생활"`} 입니다</span>
            </div>
          </ResponsiveContainer>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
