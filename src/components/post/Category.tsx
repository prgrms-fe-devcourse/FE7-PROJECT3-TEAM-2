"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/types";
import BaseImage from "../common/image/BaseImage";

export default function Category({ categorys }: { categorys: CategoryType[] }) {
  const pathname = usePathname();
  const currentCategory = pathname.split("/")[2];

  return (
    <div className="category mb-6 flex gap-6">
      <Link href={"/posts/all"}>
        {" "}
        <div
          className={twMerge(
            `bg-bg-main text-main border-text-light hover:bg-bg-sub flex h-15 w-15 items-center justify-center rounded-full border text-xs transition-all duration-300`,
            currentCategory === "all" && "border-main border-2"
          )}
        >
          전체
        </div>
      </Link>
      {categorys.map(category => (
        <Link key={category.id} href={`/posts/${category.type}`} className="group relative">
          <BaseImage
            rounded="full"
            src={category.image_url ?? ""}
            alt={`category ${category.name} image`}
            className={twMerge(
              `h-15 w-15 transition-all duration-300 group-hover:opacity-30`,
              currentCategory === category.type && "border-main border-2"
            )}
          />
          <span
            className={twMerge(
              `invisible absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 truncate text-center text-xs group-hover:visible`
            )}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
