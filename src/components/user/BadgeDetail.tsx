import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { createClient } from "@/utils/supabase/client";

type BadgeDetailProps = {
  badgeTitle: string;
  className?: string;
};

export default async function BadgeDetail({ badgeTitle, className }: BadgeDetailProps) {
  const supabase = await createClient();
  const { data: badgeImgData } = supabase.storage.from("badge_images").getPublicUrl(`${badgeTitle}.png`);
  return (
    <>
      <div className={twMerge(className, "flex max-w-sm flex-col items-center gap-1")}>
        <Image
          src={badgeImgData.publicUrl}
          alt="badge"
          width={70}
          height={70}
          className="border-bg-sub rounded-full border"
          unoptimized
        />
        <p className="text-center font-medium break-keep">훈수톡 입장</p>
        <p className="text-text-light text-center text-[8px] break-keep">첫 가입</p>
      </div>
    </>
  );
}
