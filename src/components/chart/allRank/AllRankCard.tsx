import test from "@/assets/images/navbar/profile.png";
import { categoryColor } from "@/utils/category";
import CircleProfileImage from "../../common/image/CircleProfileImage";
import ResponsiveContainer from "../../common/ResponsiveContainer";

export default function AllRankCard({
  category,
  title,
}: {
  category: {
    percent: string;
    id: number;
    name: string;
    count: number;
    image: string;
  };
  title: string;
}) {
  const fillColor = categoryColor[category.name as Category] ?? "#CCCCCC";
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
        <CircleProfileImage src={test} alt="test" rounded="full" size="lg" className="cursor-none" />
      </div>
    </ResponsiveContainer>
  );
}
