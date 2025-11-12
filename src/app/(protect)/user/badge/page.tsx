import { Award, Book } from "lucide-react";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";

export default function page() {
  return (
    <div className="mt-6.5 flex w-full flex-col gap-3.5 text-xs">
      <ResponsiveContainer className="flex-1 p-6 max-sm:border-none max-sm:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Award size={12} />
            <p>대표 뱃지</p>
          </div>

          <div className="flex flex-wrap justify-center gap-52 max-xl:gap-25 max-lg:gap-16 max-sm:gap-6">
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
            <BadgeDetail badgeTitle="basic_welcome" />
          </div>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer className="flex-1 p-6 max-sm:border-none max-sm:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Book size={12} />
            <p>뱃지 도감</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-medium">카테고리 A</p>
            <div className="flex snap-x snap-mandatory justify-start gap-16 overflow-x-auto scroll-smooth max-sm:py-3">
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
            </div>
          </div>
          <Divider className="max-sm:hidden" />
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-medium">카테고리 A</p>
            <div className="flex snap-x snap-mandatory justify-start gap-16 overflow-x-auto max-sm:py-3">
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start opacity-50" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0 snap-start opacity-50" />
            </div>
          </div>
          <Divider className="max-sm:hidden" />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
