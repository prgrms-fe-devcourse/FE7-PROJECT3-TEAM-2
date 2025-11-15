"use client";

import { AArrowDown, SquareUserRound, User as UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Activity } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "../common/Button";

export default function ChartMenu({ user }: { user: User | null }) {
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
        className="mr-3 w-24"
        onClick={() => route.push("/chart/category-rank")}
      >
        <AArrowDown className="mr-2 h-3.5 w-3.5" />
        카테고리
      </Button>
      <Activity mode={user ? "visible" : "hidden"}>
        <Button
          size="sm"
          variant={pathname === "my-rank" ? "primary" : "tertiary"}
          onClick={() => route.push("/chart/my-rank")}
        >
          <UserIcon className="mr-2 h-3.5 w-3.5" />내 랭크
        </Button>
      </Activity>
    </div>
  );
}
