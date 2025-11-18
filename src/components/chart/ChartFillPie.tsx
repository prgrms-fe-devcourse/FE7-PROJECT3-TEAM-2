"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DEFAULT_COLORS = [
  "#E3F2FD", // 부드러운 베이비 블루
  "#E8F5E9", // 소프트 민트 그린
  "#FFF3E0", // 연살구 오렌지
  "#FCE4EC", // 부드러운 핑크
  "#EDE7F6", // 소프트 라벤더
  "#F3E5F5", // 부드러운 바이올렛 로즈
];

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
}: {
  cx?: number | string;
  cy?: number | string;
  midAngle?: number;
  outerRadius?: number | string;
  percent?: number;
}) => {
  if (cx == null || cy == null || outerRadius == null || midAngle == null) return null;

  const cxNum = typeof cx === "number" ? cx : Number(cx);
  const cyNum = typeof cy === "number" ? cy : Number(cy);
  const outerNum = typeof outerRadius === "number" ? outerRadius : Number(outerRadius);

  const radius = outerNum * 0.65;
  const x = cxNum + radius * Math.cos(-midAngle * RADIAN);
  const y = cyNum + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#333" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700}>
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ChartFillPie({ stats }: { stats: BagdeCountType[] }) {
  return (
    <div className="relative h-full min-h-[120px] w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={120} height={120}>
          <Pie
            data={stats}
            dataKey="achieved_count"
            nameKey="badge_name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            labelLine={false}
            label={renderLabel}
            paddingAngle={2}
            stroke="none"
            isAnimationActive
          >
            {stats.map((_, index) => {
              const fillColor = DEFAULT_COLORS[index % DEFAULT_COLORS.length];
              return <Cell key={`cell-${index}`} fill={fillColor} style={{ outline: "none" }} className="opacity-85" />;
            })}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
            }}
            formatter={(value, name) => [`${value}개`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
