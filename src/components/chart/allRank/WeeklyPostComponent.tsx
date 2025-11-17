import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import WeekPostCard from "./WeekPostCard";
import ChartCardTtile from "../ChartCardTtile";

export default function WeeklyPostComponent({ stats }: { stats: WeekPostDataType[] }) {
  return (
    <ResponsiveContainer className="w-full px-5 py-6">
      <div className="flex flex-col">
        <ChartCardTtile title="이 주의 불타는 게시글" subTitle="매우 뜨겁다..." />
        <div className="mt-5 grid min-h-[100px] w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {stats.map(post => (
            <WeekPostCard key={post.post_id} post={post} />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
