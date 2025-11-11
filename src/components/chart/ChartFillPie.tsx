"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DEFAULT_COLORS = ["#FAF3C0", "#E8E9EB", "#E5C1A3", "#C3D3E1", "#F8D8B3"];

interface ChartPieProps {
  stats: {
    name: string;
    value: number;
  }[];
}

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
    <text x={x} y={y} fill="#333" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={700}>
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ChartFillPie({ stats }: ChartPieProps) {
  return (
    <div className="relative h-[130px] w-[130px] min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={130} height={130}>
          <Pie
            data={stats}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            labelLine={false}
            label={renderLabel}
            paddingAngle={2}
            stroke="#fff"
            isAnimationActive
          >
            {stats.map((_, index) => {
              const fillColor = DEFAULT_COLORS[index % DEFAULT_COLORS.length];
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
      </ResponsiveContainer>
    </div>
  );
}
