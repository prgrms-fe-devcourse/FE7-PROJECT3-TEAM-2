import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";
import MyActivityComponent from "./MyActivityComponent";
import MyTypeComponent from "./MyTypeComponent";

export default async function MyRankComponent({ user }: { user: User }) {
  const supabase = await createClient();

  const [{ data: myActivityData, error: myActivityError }, { data: myBadgePoint, error: myBadgePointError }] =
    await Promise.all([
      supabase.rpc("get_user_activity_category", {
        p_user_id: user.id,
      }),
      supabase.rpc("get_user_badge_points", {
        p_user_id: user.id,
      }),
    ]);

  if (myActivityError) throw myActivityError;
  if (myBadgePointError) throw myBadgePointError;

  const totalStats = myActivityData.map(item => {
    const { category_name, posts_count, comments_count } = item;
    const categoryBadge = myBadgePoint.find(c => c.category_name, item.category_name);
    const total_point =
      posts_count * 10 + comments_count * 10 + (categoryBadge?.badge_points ? categoryBadge?.badge_points * 0.01 : 0);

    return { total_point, category_name, posts_count, comments_count, badge_point: categoryBadge?.badge_points };
  });

  const ranking = totalStats.sort((a, b) => b.total_point - a.total_point);

  return (
    <div className="flex flex-col gap-3">
      <MyTypeComponent stats={ranking} />
      <MyActivityComponent stats={myActivityData} />
    </div>
  );
}
