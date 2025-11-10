"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/types";

export default function CategoryDropdown({ categorys }: { categorys: CategoryType[] }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <button
        className={twMerge(
          "hover:bg-bg-sub flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 px-3 py-4 text-gray-200",
          value && "text-text-sub"
        )}
        onClick={() => setOpen(prev => !prev)}
      >
        {value ? value : "카테고리를 선택해주세요"}
        {open ? (
          <ChevronUp className="text-text-sub ml-2 h-4 w-4 shrink-0" />
        ) : (
          <ChevronDown className="text-text-sub ml-2 h-4 w-4 shrink-0" />
        )}
      </button>
      <ul
        className={twMerge(
          "text-text-sub bg-bg-main absolute mt-2.5 flex max-h-[300px] w-full flex-col overflow-y-scroll rounded-xl border border-gray-200 p-2",
          !open && "hidden"
        )}
      >
        {categorys.map(category => (
          <li
            key={category.id}
            onClick={() => {
              setValue(prev => (prev === category.name ? "" : category.name));
              setOpen(false);
            }}
            className="hover:bg-bg-sub cursor-pointer rounded-xl px-3 py-3"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
