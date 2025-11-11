import CategoryRankComponent from "@/components/chart/categoryRank/CategoryRankComponent";

export default function page() {
  const badgeData = [
    { name: "연애", value: 25 },
    { name: "기술/IT", value: 18 },
    { name: "제테크/소비", value: 10 },
    { name: "음식/요리", value: 9 },
    { name: "생활", value: 8 },
    { name: "게임", value: 7 },
  ];

  return <CategoryRankComponent stats={badgeData} />;
}
