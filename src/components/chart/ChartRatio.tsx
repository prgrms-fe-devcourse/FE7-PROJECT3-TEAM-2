"use client";

import { RadialBar, RadialBarChart } from "recharts";

interface RatioProps {
  percentage1: number; // 0~100
  percentage2: number; // 0~100
  color1?: string;
  color2?: string;
}

export default function ChartRatio({ percentage1, percentage2, color1 = "#FF6F61", color2 = "#5A46FF" }: RatioProps) {
  // 전체가 100 기준
  const data = [
    { name: "A", value: percentage1, fill: color1 },
    { name: "B", value: percentage2, fill: color2 },
  ];

  return (
    <div className="flex items-center justify-center">
      <RadialBarChart
        width={140}
        height={140}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="100%"
        startAngle={90}
        endAngle={-270}
        data={data}
      >
        <RadialBar dataKey="value" cornerRadius={50} />
      </RadialBarChart>
    </div>
  );
}
