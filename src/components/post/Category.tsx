"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { CategoryType } from "@/types";
import BaseImage from "../common/image/BaseImage";

export default function Category({ categorys }: { categorys: CategoryType[] }) {
  const pathname = usePathname();
  const isPostDetail = pathname.split("/").length > 3 || pathname.split("/")[2] === "write";
  const { category: categoryId, postId } = useParams();

  return (
    <div className={twMerge("category bg-bg-main flex gap-6 p-6", isPostDetail && "max-sm:hidden")}>
      <Link href={postId ? `/posts/all/post/${postId}` : "/posts/all"} className="group relative">
        <div
          className={twMerge(
            "bg-bg-main text-main border-text-light hover:bg-bg-sub flex h-15 w-15 items-center justify-center rounded-full border text-xs transition-all"
          )}
        >
          전체
        </div>
        <div
          className={twMerge(
            "bg-main/60 group invisible absolute inset-0 rounded-full",
            categoryId === "all" && "hover:bg-main/50 visible transition-all"
          )}
        />
        <Check
          className={twMerge(
            "invisible absolute inset-5 text-white group-hover:invisible",
            categoryId === "all" && "visible"
          )}
        />
        <span
          className={twMerge(
            `invisible absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 truncate text-center text-xs`,
            categoryId === "all" && "text-white group-hover:visible"
          )}
        >
          전체
        </span>
      </Link>
      {categorys.map(category => (
        <Link
          key={category.id}
          href={postId ? `/posts/${category.type}/post/${postId}` : `/posts/${category.type}`}
          className="group relative"
        >
          <BaseImage
            rounded="full"
            src={category.image_url ?? ""}
            alt={`category ${category.name} image`}
            className={twMerge("h-15 w-15 transition-all duration-300 group-hover:opacity-30")}
          />
          <div
            className={twMerge(
              "bg-main/60 group invisible absolute inset-0 rounded-full",
              categoryId === category.type && "visible"
            )}
          />
          <Check
            className={twMerge(
              "invisible absolute inset-5 text-white group-hover:invisible",
              categoryId === category.type && "visible"
            )}
          />
          <span
            className={twMerge(
              `invisible absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 truncate text-center text-xs group-hover:visible`,
              categoryId === category.type && "text-white"
            )}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
