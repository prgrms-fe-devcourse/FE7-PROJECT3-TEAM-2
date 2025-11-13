"use client";

import { Bar, BarChart, Cell, ResponsiveContainer as RsponsiveContain, Tooltip, XAxis } from "recharts";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { categoryColor } from "@/utils/category";

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
    <ResponsiveContainer className="w-full px-6 py-7">
      {
        <div className="flex flex-col">
          <div className="mb-6 flex flex-col gap-2">
            <span className="text-text-title text-lg font-semibold">채택 통계</span>
            <span className="text-text-light text-xs font-semibold">훈수별 채택</span>
          </div>
          <div className="mx-auto h-[400px] w-11/12">
            <RsponsiveContain width="100%" height={400}>
              <BarChart
                data={stats}
                width={100}
                height={100}
                barCategoryGap="25%"
                margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
              >
                <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 14 }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
                <Bar dataKey="채택" stackId="a" radius={[0, 0, 8, 8]} activeBar={false}>
                  {stats.map((data, i) => {
                    const fillColor = categoryColor[data.name] ?? "#CCCCCC";
                    return <Cell key={`cell-${i}`} fill={fillColor} />;
                  })}
                </Bar>
                <Bar dataKey="훈수" stackId="a" fill="#E2E2E2" radius={[8, 8, 0, 0]} activeBar={false} />
              </BarChart>
            </RsponsiveContain>
          </div>
        </div>
      }
    </ResponsiveContainer>
  );
}
