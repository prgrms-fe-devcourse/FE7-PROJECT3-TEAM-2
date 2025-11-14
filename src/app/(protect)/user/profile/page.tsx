import { ActivityIcon, ArrowRightToLineIcon, Award, ChartLine, UserRound } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Divider } from "@/components/common/Divider";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import BadgeDetail from "@/components/user/BadgeDetail";
import CategoryRanking from "@/components/user/CategoryRanking";
import UserInfo from "@/components/user/UserInfo";
import { updateProfile } from "@/services/profile/updateProfile";
import { FormState } from "@/types";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  const { count: followsCount } = await supabase
    .from("follow")
    .select("*", { count: "exact", head: true })
    .eq("follower_id", user.id);

  const { count: followersCount } = await supabase
    .from("follow")
    .select("*", { count: "exact", head: true })
    .eq("following_id", user.id);

  const { count: postsCount } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  // const { data: adoptedComments } = await supabase
  //   .from("comments")
  //   .select("posts!inner(adopted_comment_id)")
  //   .eq("user_id", user.id);
  // console.log(adoptedComments);

  async function updateProfileAction(prevState: FormState, formData: FormData): Promise<FormState> {
    "use server";

    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      return {
        success: false,
        error: "로그인이 필요합니다.",
      };
    }

    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phoneNumber = formData.get("phoneNumber")?.toString().replaceAll(" ", "").replaceAll(/[\D]/gi, "") ?? "";
    const bio = formData.get("bio")?.toString() ?? "";

    if (!name || !email) {
      return {
        success: false,
        error: "필수 항목을 채워주세요",
      };
    }

    if (phoneNumber.length !== 11 && phoneNumber.length !== 0) {
      return {
        success: false,
        error: "올바른 전화번호를 입력해주세요.",
      };
    }

    return updateProfile(user.id, name, email, phoneNumber, bio);
  }

  return (
    <div className="mt-6.5 w-full pb-5 text-xs">
      <UserInfo profile={profile} action={updateProfileAction} />
      <Divider />
      <div className="my-6 flex flex-wrap justify-center gap-3 text-xs">
        <ResponsiveContainer className="flex flex-col gap-12 p-6 max-sm:gap-14 max-sm:rounded-3xl">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <UserRound size={12} />
              <p>연결 관리</p>
            </div>
            <div className="flex gap-6">
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>팔로우</p>
                <p className="text-base">{followsCount}</p>
              </div>
              <div className="flex min-w-32.5 flex-col gap-2 rounded-xl border border-gray-200 px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>팔로잉</p>
                <p className="text-base">{followersCount}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <ActivityIcon size={12} />
              <p>내 활동</p>
            </div>
            <div className="flex gap-6">
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>게시물</p>
                <p className="text-base">{postsCount}</p>
              </div>
              <div className="bg-bg-sub flex min-w-32.5 flex-col gap-2 rounded-xl px-3.5 pt-3 pb-2 max-sm:min-w-25">
                <p>채택 수</p>
                <p className="text-base"></p>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer className="flex-1 p-6 max-lg:min-w-63 max-sm:min-w-0 max-sm:rounded-3xl max-sm:pb-3">
          <div className="flex flex-col gap-6 max-sm:gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Award size={12} />
                <p>마이 뱃지</p>
              </div>
              <p className="text-text-light">대표로 설정한 4개의 뱃지만 표시</p>
            </div>

            <div className="flex flex-wrap justify-center gap-16 max-sm:grid max-sm:grid-cols-2 max-sm:gap-1">
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0" />
              <BadgeDetail badgeTitle="basic_welcome" className="shrink-0" />
            </div>
            <Link href="badge" className="text-main flex items-center justify-end gap-2 px-3 py-1.5 text-xs">
              <ArrowRightToLineIcon size={10} />
              전체 뱃지 보기
            </Link>
          </div>
        </ResponsiveContainer>
      </div>
      <ResponsiveContainer className="flex-1 p-6 max-sm:rounded-3xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <ChartLine size={12} />
            <p>내 통계</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col">
            <CategoryRanking Field="버거 분야" current={50} total={100} />
            <CategoryRanking Field="버거 분야" current={50} total={100} />
            <CategoryRanking Field="버거 분야" current={50} total={100} />
          </div>
          <Link href="/chart" className="text-main flex items-center justify-end gap-2 px-3 py-1.5 text-xs">
            <ArrowRightToLineIcon size={10} />
            모든 랭킹 보기
          </Link>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
