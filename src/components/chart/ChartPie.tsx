"use client";

import { Cell, Pie, PieChart, ResponsiveContainer as RsponsiveContain, Tooltip } from "recharts";
import { categoryColor } from "@/utils/category";

export default function ChartPie({
  stats,
  height = 250,
  innerRadius = 73,
  labelEndText = "개",
  total_point,
}: {
  stats: {
    name: string;
    value: number;
  }[];
  height?: number;
  innerRadius?: number;
  labelEndText?: string;
  total_point?: number;
}) {
  const totalPosts = stats.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="h-fit min-w-[180px]">
      <div className="relative h-full min-h-[100px] w-full min-w-0">
        <RsponsiveContain width="100%" height={height} className="pointer-events-none">
          <PieChart>
            <Pie
              data={stats}
              dataKey="value"
              nameKey="name"
              width={100}
              height={100}
              cx="50%"
              cy="50%"
              innerRadius={`${innerRadius}%`}
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
            >
              {stats.map((data, index) => {
                const fillColor = categoryColor[data.name];
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={fillColor}
                    style={{ outline: "none" }}
                    className="pointer-events-auto"
                  />
                );
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
              }}
              formatter={(value, name) => [`${value}${labelEndText}`, name]}
            />
          </PieChart>
        </RsponsiveContain>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-text-title text-xs">총</p>
          <p className="text-text-sub text-lg font-bold">
            {total_point ? total_point : totalPosts}
            {labelEndText}
          </p>
        </div>
      </div>
    </div>
  );
}
