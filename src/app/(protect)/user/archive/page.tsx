import { AArrowDown } from "lucide-react";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function page() {
  return (
    <div className="mt-6.5 w-full text-xs">
      <ResponsiveContainer className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-4">
          <p className="border-main border-b py-1">내 게시물</p>
          <p className="text-text-light">북마크</p>
        </div>
        <div className="relative flex">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2">
            <AArrowDown size={12} />
            <select className="outline-none">
              <option>카테고리</option>
              <option>작성일</option>
            </select>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
