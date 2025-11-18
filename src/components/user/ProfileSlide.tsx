"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BadgeType, ProfileType } from "@/types";
import { createClient } from "@/utils/supabase/client";
import BadgeDetail from "./BadgeDetail";
import Badge from "../common/Badge";
import ResponsiveContainer from "../common/ResponsiveContainer";
import { Toggle } from "../common/Toggle";

export default function ProfileSlide({ onClick }: { onClick?: () => void }) {
  const router = useRouter();
  const search = useSearchParams();
  const currentPath = usePathname();
  const isOpen = search.get("user");

  const [userId, setUserId] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileType | null>();
  const [followCnt, setFollowCnt] = useState(0);
  const [followerCnt, setFollowerCnt] = useState(0);
  const [postCnt, setPostCnt] = useState(0);
  const [adoptedComments, setAdoptedComments] = useState(0);
  const [displayedBadge, setDisplayedBadge] = useState<(BadgeType | null)[]>();
  const [followList, setFollowList] = useState<string[] | null>();

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      if (isOpen) {
        const [
          {
            data: { user },
          },
          { data: profileData },
          { count: followCnt },
          { count: followerCnt },
          { count: postCnt },
          { data: adoptedComments },
          { data: displayedBadge },
        ] = await Promise.all([
          supabase.auth.getUser(),
          supabase.from("profiles").select("*").eq("id", isOpen).single(),
          supabase.from("follow").select("*", { count: "exact", head: true }).eq("follower_id", isOpen),
          supabase.from("follow").select("*", { count: "exact", head: true }).eq("following_id", isOpen),
          supabase.from("posts").select("*", { count: "exact", head: true }).eq("user_id", isOpen),
          supabase.from("comments").select("id, posts:post_id(adopted_comment_id)").eq("user_id", isOpen),
          supabase
            .from("displayed_badge")
            .select(
              `badge_first:badge!displayed_badge_first_fkey(*),
           badge_second:badge!displayed_badge_second_fkey(*),
           badge_third:badge!displayed_badge_third_fkey(*),
           badge_fourth:badge!displayed_badge_fourth_fkey(*)`
            )
            .eq("user_id", isOpen)
            .maybeSingle(),
        ]);
        setUserId(user?.id ?? null);
        setProfileData(profileData ?? null);
        setFollowCnt(followCnt ?? 0);
        setFollowerCnt(followerCnt ?? 0);
        setPostCnt(postCnt ?? 0);
        setAdoptedComments(adoptedComments?.length ?? 0);
        setDisplayedBadge([
          displayedBadge?.badge_first ?? null,
          displayedBadge?.badge_second ?? null,
          displayedBadge?.badge_third ?? null,
          displayedBadge?.badge_fourth ?? null,
        ]);
        if (user) {
          const { data: followList } = await supabase.from("follow").select("following_id").eq("follower_id", user.id);
          setFollowList(followList?.reduce((arr, f) => [...arr, f.following_id], []));
        }
      }
    };
    fetchData();
  }, [isOpen, followList]);

  const handleFollow = () => {};
  const close = () => {
    router.replace(currentPath);
  };
  return (
    <>
      {isOpen && (
        <ResponsiveContainer className="min-w-[334px] px-6 py-8.5">
          <div className="flex items-center gap-6">
            <button onClick={onClick ?? close} className="cursor-pointer">
              <ChevronLeft />
            </button>
            <div className="flex flex-col gap-2">
              <Badge size="sm" text={"LV." + String(profileData?.level)} className="bg-main text-white" />
              <p className="font-medium">{profileData?.name}</p>
            </div>
          </div>
          <Toggle
            size="lg"
            isToggle={(followList ?? []).includes(isOpen) ? false : true}
            className="my-8 min-w-full py-3"
            disabled={!userId || userId === isOpen}
            onClick={handleFollow}
          >
            팔로우
          </Toggle>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-6">
              <div className="border-border-main flex min-w-32.5 flex-col gap-2 rounded-xl border px-3.5 pt-3 pb-2">
                <p className="text-xs">팔로잉</p>
                <p>{followCnt}</p>
              </div>
              <div className="border-border-main flex min-w-32.5 flex-col gap-2 rounded-xl border px-3.5 pt-3 pb-2">
                <p className="text-xs">팔로워</p>
                <p>{followerCnt}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2">
                <p className="text-xs">게시물</p>
                <p>{postCnt}</p>
              </div>
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2">
                <p className="text-xs">채택 수</p>
                <p>{adoptedComments}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="my-6 grid grid-cols-2 gap-6">
              {!displayedBadge || displayedBadge.length === 0
                ? [...Array(4)].map((_, i) => (
                    <div key={i}>
                      <BadgeDetail badgeData={null} />
                    </div>
                  ))
                : displayedBadge.map((b, i) => (
                    <div key={i}>
                      <BadgeDetail badgeData={b} />
                    </div>
                  ))}
            </div>
          </div>
        </ResponsiveContainer>
      )}
    </>
  );
}
