"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

type BadgeDetailProps = {
  badgeData: {
    badge_image: string | null;
    category_id: string;
    desc: string;
    id: string;
    name: string;
    point: number | null;
  };
  className?: string;
};

export default function BadgeDetail({ badgeData, className }: BadgeDetailProps) {
  return (
    <>
      <div className={twMerge(className, "flex w-20 flex-col items-center gap-1")}>
        {badgeData.badge_image && (
          <Image
            src={badgeData.badge_image}
            alt={badgeData.name}
            width={70}
            height={70}
            className="border-bg-sub rounded-full border"
            loading="eager"
            quality={100}
          />
        )}
        <p className="text-center font-medium break-keep">{badgeData.name}</p>
        <p className="text-text-light text-center text-[8px] break-keep">{badgeData.desc}</p>
      </div>
    </>
  );
}
