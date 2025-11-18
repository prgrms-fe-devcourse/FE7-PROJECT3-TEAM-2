"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/types";

export default function CategoryDropdown({
  categorys,
  selectCategoryId,
}: {
  categorys: CategoryType[];
  selectCategoryId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(selectCategoryId ?? "");
  const [categoryValue, setCategoryValue] = useState(() => {
    if (!categorys || !selectCategoryId) return "";
    return Object.values(categorys).find(c => c.id === selectCategoryId)?.name ?? "";
  });

  return (
    <div className="relative">
      <input type="hidden" name="category_id" value={categoryId} />
      <button
        type="button"
        className={twMerge(
          "hover:bg-bg-sub border-border-main text-text-light flex w-full cursor-pointer items-center justify-between rounded-xl border px-3 py-4",
          categoryValue && "text-text-sub"
        )}
        onClick={() => setOpen(prev => !prev)}
      >
        {categoryValue ? categoryValue : "카테고리를 선택해주세요"}
        {open ? (
          <ChevronUp className="text-text-sub ml-2 h-4 w-4 shrink-0" />
        ) : (
          <ChevronDown className="text-text-sub ml-2 h-4 w-4 shrink-0" />
        )}
      </button>
      <ul
        className={twMerge(
          "text-text-sub bg-bg-main border-border-main absolute mt-2.5 flex max-h-[300px] w-full flex-col overflow-y-scroll rounded-xl border p-2",
          !open && "hidden"
        )}
      >
        {categorys.map(category => (
          <li
            key={category.id}
            onClick={() => {
              setCategoryValue(categoryValue === category.name ? "" : category.name);
              setCategoryId(category.id);
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
