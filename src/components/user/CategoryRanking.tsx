"use client";

import { RadialBar, RadialBarChart } from "recharts";
import ResponsiveContainer from "../common/ResponsiveContainer";

type CategoryRankingProps = {
  Field: string;
  total: number;
  current: number;
};
export default function CategoryRanking({ Field, total, current }: CategoryRankingProps) {
  const ratio = (current / total) * 100;
  const totalData = [{ name: "total", value: 100 }]; // user의 데이터
  const currentData = [{ name: "current", value: ratio }]; // total 데이터

  return (
    <ResponsiveContainer className="flex items-center justify-center gap-13 px-6 py-7">
      {/* 그래프 */}
      <div className="relative h-20 w-20">
        {/* total 데이터 bar */}
        <div className="absolute inset-0">
          <RadialBarChart
            width={80}
            height={80}
            innerRadius="60%"
            outerRadius="100%"
            startAngle={450}
            endAngle={90}
            barSize={6}
            data={totalData}
          >
            <RadialBar dataKey="value" fill="#f0f2f5" cornerRadius={5} />
          </RadialBarChart>
        </div>
        {/* user의 데이터 bar */}
        <div className="absolute inset-0">
          <RadialBarChart
            width={80}
            height={80}
            innerRadius="60%"
            outerRadius="100%"
            startAngle={450}
            endAngle={450 - (ratio / 100) * 360}
            barSize={6}
            data={currentData}
          >
            <RadialBar dataKey="value" fill="#2b7fff" cornerRadius={5} />
          </RadialBarChart>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-main text-xs font-semibold">{ratio.toFixed(1)}%</p>
        </div>
      </div>
      {/* 오른쪽 정보 */}
      <div className="flex flex-col items-end gap-1 text-sm">
        <p className="text-text-light text-[8px]">순위</p>
        <p className="text-sm font-medium">{Field}</p>
        <p className="font-medium">
          <span className="text-2xl">{current}</span> / <span className="text-lg text-gray-500">{total}</span> 등
        </p>
      </div>
    </ResponsiveContainer>
  );
}
