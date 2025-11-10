"use client";

import { Cell, Pie, PieChart, ResponsiveContainer as RsponsiveContain, Tooltip } from "recharts";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { categoryColor } from "@/utils/category";

export default function WeeklyPostByCategoryComponent({
  stats,
}: {
  stats: {
    name: string;
    value: number;
  }[];
}) {
  const totalPosts = stats.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <ResponsiveContainer className="min-h-0 w-full px-6 py-7">
      <div className="flex flex-col">
        <div className="mb-6 flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">이 주의 게시글</span>
          <span className="text-text-light text-xs font-semibold">카테고리별</span>
        </div>
      </div>
      <div className="mx-auto h-fit w-11/12">
        <div className="relative h-[350px] min-h-[300px] w-full min-w-0">
          <RsponsiveContain width="100%" height={300}>
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
                outerRadius="90%"
                paddingAngle={2}
                stroke="#fff"
              >
                {stats.map((data, index) => {
                  const fillColor = categoryColor[data.name as Category] ?? "#CCCCCC";
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
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-xs text-gray-500">총 게시글</p>
            <p className="text-lg font-bold">{totalPosts}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 px-3 py-1 text-xs">
          {stats.map((data, i) => (
            <div key={i} className="flex items-center gap-1">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: categoryColor[data.name as Category] }}
              ></span>
              <span className="text-text-light">{data.name}</span>
            </div>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
