"use client";

import { Bar, BarChart, Cell, ResponsiveContainer as RsponsiveContain, Tooltip, XAxis } from "recharts";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { categoryColor } from "@/utils/category";
import ChartCardTtile from "../ChartCardTtile";

export default function AdoptStatsComponent({
  stats,
}: {
  stats: {
    name: string;
    훈수: number;
    채택: number;
  }[];
}) {
  return (
    <ResponsiveContainer className="w-full px-5 py-6">
      <div className="flex flex-col">
        <ChartCardTtile title="채택" subTitle="훈수별 채택" />
        <div className="mx-auto flex w-full items-center justify-center overflow-x-auto">
          <div className="mx-auto h-[400px] min-w-[1000px]">
            <RsponsiveContain width={1000} height={400}>
              <BarChart
                data={stats}
                width={1000}
                height={400}
                barCategoryGap="25%"
                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
              >
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 15 }}
                  className="text-text-title"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Bar dataKey="채택" fill="#6a7282" className="bg-gray-500" radius={[8, 8, 2, 2]} activeBar={false} />
                <Bar dataKey="훈수" radius={[8, 8, 2, 2]} activeBar={false}>
                  {stats.map((data, i) => {
                    const fillColor = categoryColor[data.name] ?? "#CCCCCC";
                    return <Cell key={`cell-${i}`} fill={fillColor} />;
                  })}
                </Bar>
              </BarChart>
            </RsponsiveContain>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
