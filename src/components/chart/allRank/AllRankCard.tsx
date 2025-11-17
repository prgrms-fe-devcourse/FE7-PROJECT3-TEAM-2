import { categoryColor } from "@/utils/category";
import CircleProfileImage from "../../common/image/CircleProfileImage";
import ResponsiveContainer from "../../common/ResponsiveContainer";

export default function AllRankCard({ category, title }: { category: AllStatsCardType; title: string }) {
  const fillColor = categoryColor[category.name] ?? "#CCCCCC";
  return (
    <ResponsiveContainer className="col-span-1 p-6">
      <div className="mb-2 flex flex-col gap-1">
        <div className="text-text-light text-xs">
          <span style={{ color: fillColor }} className="font-semibold">
            {category.name}
          </span>{" "}
          {title}
        </div>
        <div className="text-2xl text-black">{category.count}</div>
        <div className="text-text-title text-xs">{category.percent}%</div>
      </div>
      <div className="flex w-full justify-end">
        <CircleProfileImage
          src={category.image || ""}
          alt="category_img"
          rounded="full"
          size="lg"
          className="cursor-auto"
        />
      </div>
    </ResponsiveContainer>
  );
}
