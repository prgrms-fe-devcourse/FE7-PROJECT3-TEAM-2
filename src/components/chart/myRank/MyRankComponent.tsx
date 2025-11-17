import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { User } from "@supabase/supabase-js";
import ChartCardTtile from "../ChartCardTtile";
import ChartPie from "../ChartPie";
import PieChartKey from "../PieChartKey";

export default function MyRankComponent({ user }: { user: User }) {
  const stats = [
    { name: "게임", value: 12951 },
    { name: "생활", value: 14120 },
  ];

  return (
    <div className="flex flex-col gap-3">
      <ResponsiveContainer className="min-h-0 w-full px-5 py-6">
        <ChartCardTtile title="유형" subTitle="총 합산 ( 게시글, 훈수, 뱃지 포인트 )" />
        <div className="max-h-100px gap mx-auto flex w-[95%] gap-15">
          <div className="flex h-full w-[40%] flex-col gap-10 pt-5">
            <ChartPie stats={stats} innerRadius={78} height={200} />
            <PieChartKey stats={stats} />
          </div>
          <ResponsiveContainer className="w-[45%] bg-gray-50 p-5">
            <div className="mb-6 flex flex-col gap-1">
              <span className="text-text-sub text-sm font-semibold">당신의 유형은?</span>
              <span className="text-text-light text-sm font-semibold">
                <span className="text-[16px] text-black">게임/생활</span> 입니다.
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-text-title text-sm font-semibold">6,000P</span>
                <span className="text-text-light text-xs font-semibold">게임</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-text-title text-sm font-semibold">3,000P</span>
                <span className="text-text-light text-xs font-semibold">생활</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-text-title text-sm font-semibold">5,000P</span>
                <span className="text-text-light text-xs font-semibold">나머지</span>
              </div>
            </div>
          </ResponsiveContainer>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer className="min-h-0 w-full px-5 py-6">
        <ChartCardTtile title="활동" subTitle="게시글 수 / 훈수" />
        <div className="mt-4 flex max-h-[400px] w-full flex-col gap-5 overflow-y-auto">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index}>
              <div className="mb-2.5 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">게임</h3>
              </div>
              <div
                className="flex h-4 w-full overflow-hidden rounded-full bg-none"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="flex flex-col justify-center overflow-hidden rounded-full bg-blue-600 text-center text-xs whitespace-nowrap text-white transition duration-500"
                  style={{ width: "45%" }}
                >
                  25개
                </div>
              </div>
              <div
                className="mt-1 flex h-4 w-full overflow-hidden rounded-full bg-none"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="flex flex-col justify-center overflow-hidden rounded-full bg-blue-600 text-center text-xs whitespace-nowrap text-white transition duration-500"
                  style={{ width: "25%" }}
                >
                  48개
                </div>
              </div>
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
