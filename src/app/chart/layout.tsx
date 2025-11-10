import { AArrowDown, SquareUserRound } from "lucide-react";
import { Button } from "@/components/common/Button";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ChartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col px-6 py-5">
      <ResponsiveContainer className="mb-3 w-full border-0 sm:h-fit sm:border">
        <div className="w-full p-0 sm:p-6">
          <Button size="sm" className="mr-3">
            <SquareUserRound className="mr-2 h-3.5 w-3.5" />
            전체
          </Button>
          <Button size="sm" variant="tertiary" className="w-24">
            <AArrowDown className="mr-2 h-3.5 w-3.5" />
            카테고리
          </Button>
        </div>
      </ResponsiveContainer>
      {children}
    </div>
  );
}
