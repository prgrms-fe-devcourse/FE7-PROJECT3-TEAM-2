import AdoptStatsComponent from "@/components/chart/allRank/AdoptStatsComponent";
import AllRankComponent from "@/components/chart/allRank/AllRankComponent";

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

  return (
    <div className="flex flex-col gap-2">
      <AllRankComponent title="게시글" stats={postStats} />
      <AllRankComponent title="훈수" stats={commentStats} />
      <AdoptStatsComponent />
    </div>
  );
}
