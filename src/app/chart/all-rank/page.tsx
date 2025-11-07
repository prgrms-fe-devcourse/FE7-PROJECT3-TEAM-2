import AdoptStatsComponent from "@/components/chart/allRank/AdoptStatsComponent";
import AllRankComponent from "@/components/chart/allRank/AllRankComponent";
import WeeklyHotPostComponent from "@/components/chart/allRank/WeeklyHotPostComponent";
import WeeklyPostByCategoryComponent from "@/components/chart/allRank/WeeklyPostByCategoryComponent";

export default function page() {
  const postStats = [
    { id: 1, name: "연애", count: 12, image: "" },
    { id: 2, name: "기술/IT", count: 6, image: "" },
    { id: 3, name: "제테크/소비", count: 24, image: "" },
    { id: 4, name: "음식/요리", count: 24, image: "" },
    { id: 5, name: "생활", count: 24, image: "" },
    { id: 6, name: "게임", count: 44, image: "" },
    { id: 7, name: "일상/고민", count: 54, image: "" },
    { id: 8, name: "패션", count: 24, image: "" },
    { id: 9, name: "운동", count: 24, image: "" },
    { id: 10, name: "공부/자기계발", count: 24, image: "" },
    { id: 11, name: "여행", count: 24, image: "" },
  ];

  const commentStats = [
    { id: 1, name: "연애", count: 12, image: "" },
    { id: 2, name: "기술/IT", count: 6, image: "" },
    { id: 3, name: "제테크/소비", count: 24, image: "" },
    { id: 4, name: "음식/요리", count: 24, image: "" },
    { id: 5, name: "생활", count: 24, image: "" },
    { id: 6, name: "게임", count: 44, image: "" },
    { id: 7, name: "일상/고민", count: 54, image: "" },
    { id: 8, name: "패션", count: 24, image: "" },
    { id: 9, name: "운동", count: 24, image: "" },
    { id: 10, name: "공부/자기계발", count: 24, image: "" },
    { id: 11, name: "여행", count: 24, image: "" },
  ];

  const adoptStats = [
    { name: "연애", 훈수: 100, 채택: 50 },
    { name: "기술/IT", 훈수: 100, 채택: 40 },
    { name: "제테크/소비", 훈수: 100, 채택: 30 },
    { name: "음식/요리", 훈수: 100, 채택: 35 },
    { name: "생활", 훈수: 100, 채택: 45 },
    { name: "게임", 훈수: 100, 채택: 38 },
    { name: "일상/고민", 훈수: 100, 채택: 37 },
    { name: "패션", 훈수: 100, 채택: 37 },
    { name: "운동", 훈수: 100, 채택: 37 },
    { name: "공부/자기계발", 훈수: 100, 채택: 37 },
    { name: "여행", 훈수: 100, 채택: 37 },
  ];

  const categoryData = [
    { name: "연애", value: 25 },
    { name: "기술/IT", value: 18 },
    { name: "제테크/소비", value: 10 },
    { name: "음식/요리", value: 9 },
    { name: "생활", value: 8 },
    { name: "게임", value: 7 },
    { name: "일상/고민", value: 6 },
    { name: "패션", value: 5 },
    { name: "운동", value: 4 },
    { name: "공부/자기계발", value: 8 },
    { name: "여행", value: 5 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <WeeklyPostByCategoryComponent stats={categoryData} />
        <WeeklyHotPostComponent />
      </div>
      <AllRankComponent title="게시글" stats={postStats} />
      <AllRankComponent title="훈수" stats={commentStats} />
      <AdoptStatsComponent stats={adoptStats} />
    </div>
  );
}
