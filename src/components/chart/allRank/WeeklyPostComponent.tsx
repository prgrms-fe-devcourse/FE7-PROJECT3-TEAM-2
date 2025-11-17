import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import WeekPostCard from "./WeekPostCard";

export default function WeeklyPostComponent({ stats }: { stats: WeekPostDataType[] }) {
  return (
    <ResponsiveContainer className="w-full px-6 py-7">
      <div className="flex flex-col">
        <div className="mb-6 flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">이 주의 불타는 게시글</span>
          <span className="text-text-light text-xs font-semibold">매우 뜨겁다...</span>
        </div>
        <div className="grid min-h-[100px] w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {stats.map(post => (
            <WeekPostCard key={post.post_id} post={post} />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
