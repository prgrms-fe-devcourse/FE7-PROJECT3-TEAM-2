import AdoptStatsComponent from "@/components/chart/allRank/AdoptStatsComponent";
import AllRankComponent from "@/components/chart/allRank/AllRankComponent";
import WeeklyHotPostComponent from "@/components/chart/allRank/WeeklyHotPostComponent";
import WeeklyPostByCategoryComponent from "@/components/chart/allRank/WeeklyPostByCategoryComponent";

export default function page() {
  const postStats = {
    total: 120,
    categories: [
      { id: 1, name: "연애", count: 12, image: "" },
      { id: 2, name: "기술/IT", count: 6, image: "" },
      { id: 3, name: "음식/요리", count: 24, image: "" },
      { id: 4, name: "음식/요리", count: 24, image: "" },
      { id: 5, name: "음식/요리", count: 24, image: "" },
      { id: 6, name: "음식/요리", count: 24, image: "" },
      { id: 7, name: "음식/요리", count: 24, image: "" },
      { id: 8, name: "음식/요리", count: 24, image: "" },
      { id: 9, name: "음식/요리", count: 24, image: "" },
      { id: 10, name: "음식/요리", count: 24, image: "" },
    ],
  };
  const commentStats = {
    total: 150,
    categories: [
      { id: 1, name: "연애", count: 12, image: "" },
      { id: 2, name: "기술/IT", count: 6, image: "" },
      { id: 3, name: "음식/요리", count: 24, image: "" },
      { id: 4, name: "음식/요리", count: 24, image: "" },
      { id: 5, name: "음식/요리", count: 24, image: "" },
      { id: 6, name: "음식/요리", count: 24, image: "" },
      { id: 7, name: "음식/요리", count: 24, image: "" },
      { id: 8, name: "음식/요리", count: 24, image: "" },
      { id: 9, name: "음식/요리", count: 24, image: "" },
      { id: 10, name: "음식/요리", count: 24, image: "" },
    ],
  };

  const adoptStats = [
    { name: "연애", 훈수: 100, 채택: 50 },
    { name: "IT", 훈수: 100, 채택: 40 },
    { name: "A", 훈수: 100, 채택: 30 },
    { name: "B", 훈수: 100, 채택: 35 },
    { name: "C", 훈수: 100, 채택: 45 },
    { name: "D", 훈수: 100, 채택: 40 },
    { name: "E", 훈수: 100, 채택: 38 },
    { name: "F", 훈수: 100, 채택: 37 },
    { name: "F", 훈수: 100, 채택: 37 },
    { name: "F", 훈수: 100, 채택: 37 },
    { name: "F", 훈수: 100, 채택: 37 },
    { name: "F", 훈수: 100, 채택: 37 },
  ];

  const categoryData = [
    { name: "연애", value: 20, color: "#FF6B6B" },
    { name: "기술/IT", value: 18, color: "#4ECDC4" },
    { name: "음식/요리", value: 10, color: "#FFD93D" },
    { name: "자기계발", value: 9, color: "#6C63FF" },
    { name: "예술/취미", value: 8, color: "#F4A261" },
    { name: "일상", value: 7, color: "#007F5F" },
    { name: "사회", value: 6, color: "#2A9D8F" },
    { name: "경제", value: 5, color: "#264653" },
    { name: "정치", value: 4, color: "#E76F51" },
    { name: "게임", value: 8, color: "#00B4D8" },
    { name: "패션", value: 5, color: "#9B5DE5" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <WeeklyPostByCategoryComponent data={categoryData} />
        <WeeklyHotPostComponent />
      </div>
      <AllRankComponent title="게시글" stats={postStats} />
      <AllRankComponent title="훈수" stats={commentStats} />
      <AdoptStatsComponent stats={adoptStats} />
    </div>
  );
}
