import { Award, Book } from "lucide-react";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";

export default function page() {
  return (
    <div className="mt-6.5 flex w-full flex-col gap-3.5 text-xs">
      <ResponsiveContainer className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Award size={12} />
            <p>대표 뱃지</p>
          </div>

          <div className="flex flex-wrap justify-center gap-52">
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
          </div>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer className="flex-1 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Book size={12} />
            <p>뱃지 도감</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-medium">카테고리 A</p>
            <div className="flex justify-start gap-16">
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-medium">카테고리 A</p>
            <div className="flex justify-start gap-16">
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" className="opacity-50" />
              <BadgeDetail badgeTitle="basic_welcome" className="opacity-50" />
            </div>
          </div>
          <Divider />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
