"use client";

import { AArrowDown, SquareUserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../common/Button";

export default function ChartMenu() {
  const pathname = usePathname().split("/")[2];
  const route = useRouter();

  return (
    <div className="w-full p-0 sm:p-6">
      <Button
        size="sm"
        className="mr-3"
        variant={pathname === "all-rank" ? "primary" : "tertiary"}
        onClick={() => route.push("/chart/all-rank")}
      >
        <SquareUserRound className="mr-2 h-3.5 w-3.5" />
        전체
      </Button>
      <Button
        size="sm"
        variant={pathname === "category-rank" ? "primary" : "tertiary"}
        className="w-24"
        onClick={() => route.push("/chart/category-rank")}
      >
        <AArrowDown className="mr-2 h-3.5 w-3.5" />
        카테고리
      </Button>
    </div>
  );
}
