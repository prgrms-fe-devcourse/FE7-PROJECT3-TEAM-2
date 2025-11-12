"use client";

import { Archive, Award, SquareUserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Toggle } from "@/components/common/Toggle";

export default function UserNavBar() {
  const [active, setActive] = useState("profile");
  return (
    <>
      <div className="flex w-full gap-3 rounded-3xl border border-gray-200 p-6 max-sm:border-none max-sm:p-0">
        <Link href="/user/profile">
          <Toggle
            size="sm"
            isToggle={active === "profile" ? true : false}
            onClick={() => setActive("profile")}
            className="flex items-center gap-2 py-2"
          >
            <SquareUserRound size="12" />
            프로필
          </Toggle>
        </Link>
        <Link href="/user/archive">
          <Toggle
            size="sm"
            isToggle={active === "archive" ? true : false}
            onClick={() => setActive("archive")}
            className="flex min-w-[89px] items-center gap-2 py-2"
          >
            <Archive size="12" />
            아카이브
          </Toggle>
        </Link>
        <Link href="/user/badge">
          <Toggle
            size="sm"
            isToggle={active === "badge" ? true : false}
            onClick={() => setActive("badge")}
            className="flex items-center gap-2 py-2"
          >
            <Award size="12" />
            뱃지
          </Toggle>
        </Link>
      </div>
    </>
  );
}
