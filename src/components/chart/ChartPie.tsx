"use client";

import { Cell, Pie, PieChart, ResponsiveContainer as RsponsiveContain, Tooltip } from "recharts";
import { categoryColor } from "@/utils/category";

export default function ChartPie({
  stats,
  height = 250,
}: {
  stats: {
    name: string;
    value: number;
  }[];
  height?: number;
}) {
  const totalPosts = stats.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="h-fit">
      <div className="relative h-full min-h-[100px] w-full min-w-0">
        <RsponsiveContain width="100%" height={height}>
          <PieChart>
            <Pie
              data={stats}
              dataKey="value"
              nameKey="name"
              width={100}
              height={100}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={2}
              stroke="#fff"
            >
              {stats.map((data, index) => {
                const fillColor = categoryColor[data.name as Category];
                return <Cell key={`cell-${index}`} fill={fillColor} />;
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
              }}
              formatter={(value, name) => [`${value}개`, name]}
            />
          </PieChart>
        </RsponsiveContain>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xs text-gray-500">총</p>
          <p className="text-lg font-bold">{totalPosts}개</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 px-3 py-1 text-xs">
        {stats.map((data, index) => {
          const fillColor = categoryColor[data.name as Category];
          return (
            <div key={index} className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: fillColor }}></span>
              <span className="text-text-light">{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
