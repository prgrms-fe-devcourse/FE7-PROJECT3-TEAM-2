"use client";

import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

interface Props {
  label: string;
  percentage: number;
  color?: string;
}

export default function AdoptRatioChart({ label, percentage, color = "#007F5F" }: Props) {
  const data = [
    {
      name: label,
      value: percentage,
      fill: color,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="mb-1 text-sm font-semibold text-gray-400">{label}</span>

      <div className="relative">
        <RadialBarChart
          width={100}
          height={100}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={8}
          startAngle={90}
          endAngle={-270}
          data={data}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background={{
              fill: "#f0f1f3",
            }}
            dataKey="value"
            cornerRadius={50}
            fill={color}
          />
        </RadialBarChart>

        <span className="absolute inset-0 flex items-center justify-center text-[15px] font-semibold text-gray-800">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
