import { Book } from "lucide-react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";
import DisplayedBadge from "@/components/user/DisplayedBadge";
import { updateDisplayedBadge } from "@/services/profile/updateDisplayedBadge";
import { BadgeType, CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();

  const [{ data: userData }, { data: badgeCategoryData }, { data: basicBadgeListData }] = await Promise.all([
    supabase.auth.getUser(),
    supabase.from("category").select("*"),
    supabase.from("badge").select("*").is("category_id", null).order("desc"),
  ]);

  const userId = userData.user ? userData.user.id : null;
  const badgeCategory: CategoryType[] | null = badgeCategoryData ?? null;
  const basicBadgeList = basicBadgeListData ?? null;

  const getCategoryBadgeList = async (): Promise<Record<string, BadgeType[] | null>> => {
    const badge: Record<string, BadgeType[] | null> = {};

    await Promise.all(
      (badgeCategory ?? []).map(async (c: { id: string; name: string | null }) => {
        const { data } = await supabase
          .from("badge")
          .select("*")
          .eq("category_id", c.id)
          .order("desc", { ascending: true });
        badge[c.id] = data;
      })
    );
    return badge;
  };

  const [categoryBadgeListData, { data: haveBadgeData }] = await Promise.all([
    getCategoryBadgeList(),
    userId
      ? supabase.from("user_badge").select("badge_id").eq("user_id", userId)
      : Promise.resolve({ data: [] as { badge_id: string }[] }),
  ]);

  const categoryBadgeList = categoryBadgeListData ?? {};
  const flatHaveBadge = (haveBadgeData ?? []).reduce<string[]>((arr, b) => [...arr, b.badge_id], []);

  async function updateDisplayBadgeAction(displayedBadgeList: string) {
    "use server";

    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      console.error(userError);
      return;
    }
    const res = await updateDisplayedBadge(user.id, displayedBadgeList);
    if (res.success) {
      alert(res.message);
    } else {
      console.error(res.message);
      alert("대표 뱃지 업데이트를 실패했습니다");
    }
    redirect("/user/badge");
  }

  return (
    <div className="mt-6.5 flex w-full flex-col gap-3.5 text-xs">
      <DisplayedBadge userId={userId} action={updateDisplayBadgeAction} />
      <ResponsiveContainer className="flex-1 p-6 max-sm:border-none max-sm:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Book size={12} />
            <p>뱃지 도감</p>
          </div>
          {/* basic 뱃지 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-[15px] font-medium">기본</p>
              <div className="flex snap-x snap-mandatory justify-start gap-16 overflow-x-auto scroll-smooth pb-1 max-sm:py-3">
                {basicBadgeList?.map(b => (
                  <BadgeDetail
                    key={b.id}
                    badgeData={b}
                    className={twMerge("shrink-0 snap-start", !flatHaveBadge.includes(b.id) && "opacity-50")}
                  />
                ))}
              </div>
              <Divider className="mt-3 max-sm:hidden" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {badgeCategory?.map(c => (
              <div key={c.id} className="flex flex-col gap-2">
                <p className="text-[15px] font-medium">{c.name}</p>
                <div className="flex snap-x snap-mandatory justify-start gap-16 overflow-x-auto scroll-smooth pb-1 max-sm:py-3">
                  {categoryBadgeList[c.id]?.map(b => (
                    <BadgeDetail
                      key={b.id}
                      badgeData={b}
                      className={twMerge("shrink-0 snap-start", !flatHaveBadge.includes(b.id) && "opacity-50")}
                    />
                  ))}
                </div>
                <Divider className="mt-3 max-sm:hidden" />
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
