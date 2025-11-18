import AdoptStatsComponent from "@/components/chart/allRank/AdoptStatsComponent";
import AllRankComponent from "@/components/chart/allRank/AllRankComponent";
import BookmarkStatsComponent from "@/components/chart/allRank/BookmarkStatsComponent";
import WeeklyCommentComponent from "@/components/chart/allRank/WeeklyCommentComponent";
import WeeklyPostComponent from "@/components/chart/allRank/WeeklyPostComponent";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const [
    { data: categoryData, error: categoryError },
    { data: weekCommentData, error: weekCommentError },
    { data: weekPostData, error: weekPostError },
    { data: bookmarkData, error: bookmarkError },
  ] = await Promise.all([
    supabase.from("category").select("*, posts(*, comments:comments_post_id_fkey(*))"),
    supabase.rpc("get_hot_comments_of_week"),
    supabase.rpc("get_hot_posts_of_week"),
    supabase.from("bookmark").select("*,posts(category_id,category(*))"),
  ]);

  const map = new Map<string, number>();

  if (categoryError) throw categoryError;
  if (weekCommentError) throw weekCommentError;
  if (weekPostError) throw weekPostError;
  if (bookmarkError) throw bookmarkError;

  const postStats = categoryData.map(item => {
    return { id: item.id, name: item.name, count: item.posts.length, image: item.image_url };
  });
  const commentStats = categoryData.map(item => {
    const count = item.posts.reduce((acc, cur) => acc + (cur.comments?.length || 0), 0);
    return { id: item.id, name: item.name, count, image: item.image_url };
  });

  for (const item of bookmarkData) {
    const name = item.posts.category.name;
    map.set(name, (map.get(name) ?? 0) + 1);
  }
  const bookmarkStats = Array.from(map, ([name, value]) => ({
    name,
    value,
  }));

  const adoptStats = categoryData.map(item => {
    const commentCount = item.posts.reduce((acc, cur) => acc + cur.comments.length, 0);
    const adoptCount = item.posts.filter(post => post.adopted_comment_id !== null).length;
    return { name: item.name, 훈수: commentCount, 채택: adoptCount };
  });

  // const adoptStats = [
  //   { name: "연애", 훈수: 100, 채택: 50 },
  //   { name: "기술/IT", 훈수: 100, 채택: 40 },
  //   { name: "제테크/소비", 훈수: 100, 채택: 30 },
  //   { name: "음식/요리", 훈수: 100, 채택: 35 },
  //   { name: "생활", 훈수: 100, 채택: 45 },
  //   { name: "게임", 훈수: 100, 채택: 38 },
  //   { name: "일상/고민", 훈수: 100, 채택: 37 },
  //   { name: "패션", 훈수: 100, 채택: 37 },
  //   { name: "운동", 훈수: 100, 채택: 37 },
  //   { name: "공부/자기계발", 훈수: 100, 채택: 37 },
  //   { name: "여행", 훈수: 100, 채택: 37 },
  // ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
        <BookmarkStatsComponent stats={bookmarkStats} />
        <WeeklyCommentComponent stats={weekCommentData} />
      </div>
      <WeeklyPostComponent stats={weekPostData} />
      <AllRankComponent title="게시글" stats={postStats} />
      <AllRankComponent title="훈수" stats={commentStats} />
      <AdoptStatsComponent stats={adoptStats} />
    </div>
  );
}
