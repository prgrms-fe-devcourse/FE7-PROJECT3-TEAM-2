import { Award, Book } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";
import { BadgeType, CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();

  let badgeCategory: CategoryType[] | null = [];
  let userId: string = "";
  let categoryBadgeList: Record<string, BadgeType[] | null>;
  let basicBadgeList: BadgeType[] | null = [];
  let haveBadge:
    | {
        badge_id: string;
      }[]
    | null = [];

  const getBadgeCategory = async () => {
    const { data, error } = await supabase.from("category").select("*");
    if (error) {
      console.error(error);
    }
    badgeCategory = data;
  };

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      userId = user.id;
    }
  };

  const getBasicBadgeList = async () => {
    const { data } = await supabase.from("badge").select("*").is("category_id", null).order("desc");
    basicBadgeList = data;
  };

  const getCategoryBadgeList = async () => {
    const badge: Record<string, BadgeType[] | null> = {};

    await Promise.all(
      (badgeCategory ?? []).map(async (c: { id: string; name: string | null }) => {
        const { data } = await supabase.from("badge").select("*").eq("category_id", c.id).order("desc");
        badge[c.id] = data;
      })
    );
    categoryBadgeList = badge;
  };
  const getHaveBadge = async () => {
    const { data } = await supabase.from("user_badge").select("badge_id").eq("user_id", userId);
    haveBadge = data;
  };

  await Promise.all([getBadgeCategory(), getUser(), getBasicBadgeList()]);
  await Promise.all([getCategoryBadgeList(), getHaveBadge()]);

  const flatHaveBadge = (haveBadge ?? []).reduce<string[]>((arr, b) => [...arr, b.badge_id], []);

  return (
    <div className="mt-6.5 flex w-full flex-col gap-3.5 text-xs">
      <ResponsiveContainer className="flex-1 p-6 max-sm:border-none max-sm:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Award size={12} />
            <p>대표 뱃지</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-52 max-[800px]:max-w-[337px] max-xl:gap-25 max-lg:gap-16 max-sm:max-w-full max-sm:gap-6">
              {/* <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" />
              <BadgeDetail badgeTitle="basic_welcome" /> */}
            </div>
          </div>
        </div>
      </ResponsiveContainer>
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
