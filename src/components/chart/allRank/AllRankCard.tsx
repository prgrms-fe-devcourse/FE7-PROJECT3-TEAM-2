import { cva } from "class-variance-authority";
import test from "@/assets/images/navbar/profile.png";
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
  const categoryNameVariants = cva("text-xs", {
    variants: {
      name: {
        기본: "text-white",
        연애: "text-pink-500",
        "기술/IT": "text-[#DAE3FF]",
        "음식/요리": "text-[#FFCBC0]",
      },
    },
    defaultVariants: {
      name: "기본",
    },
  });

  return (
    <ResponsiveContainer className="col-span-1 p-6">
      <div className="mb-2 flex flex-col gap-1">
        <div className="text-text-light text-xs">
          <span
            className={categoryNameVariants({
              name: category.name as "기본" | "연애" | "기술/IT" | "음식/요리" | null | undefined,
            })}
          >
            {category.name}
          </span>{" "}
          {title}
        </div>
        <div className="text-2xl text-black">{category.count}</div>
        <div className="text-text-title text-xs">{category.percent}%</div>
      </div>
      <div className="flex w-full justify-end">
        {/* 이미지 */}
        <CircleProfileImage src={test} alt="test" rounded="full" size="lg" className="cursor-none" />
      </div>
    </ResponsiveContainer>
  );
}
