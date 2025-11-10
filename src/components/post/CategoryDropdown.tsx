"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CategoryType } from "@/types";

export default function CategoryDropdown({ categorys }: { categorys: CategoryType[] }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={twMerge(
            "hover:bg-bg-sub flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 px-3 py-4 text-gray-200",
            type && "text-text-sub"
          )}
        >
          {type ? categorys.find(category => category.type === type)?.name : "카테고리를 선택해주세요"}
          {open ? (
            <ChevronUp className="text-text-sub ml-2 h-4 w-4 shrink-0" />
          ) : (
            <ChevronDown className="text-text-sub ml-2 h-4 w-4 shrink-0" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="bg-bg-main w-(--radix-popover-trigger-width) border-gray-200 p-0">
        <Command>
          <CommandInput placeholder="카테고리명을 검색하세요" />
          <CommandList>
            <CommandEmpty>해당하는 카테고리가 없습니다.</CommandEmpty>
            <CommandGroup>
              {categorys.map(category => (
                <CommandItem
                  key={category.id}
                  value={category.name}
                  onSelect={() => {
                    setType(category.type ? category.type : "");
                    setOpen(false);
                  }}
                  className="text-text-sub hover:bg-bg-sub cursor-pointer"
                >
                  {category.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
