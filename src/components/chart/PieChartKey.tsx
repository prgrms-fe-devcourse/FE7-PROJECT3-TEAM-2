import { categoryColor } from "@/utils/category";

export default function PieChartKey({
  stats,
}: {
  stats: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-3 py-1 text-xs">
      {stats.map((data, index) => {
        const fillColor = categoryColor[data.name];
        return (
          <div key={index} className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: fillColor }}></span>
            <span className="text-text-sub">{data.name}</span>
          </div>
        );
      })}
    </div>
  );
}
