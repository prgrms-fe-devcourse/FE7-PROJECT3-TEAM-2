import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import WeekCommentCard from "./WeekCommentCard";

export default function WeeklyCommentComponent({ stats }: { stats: weekCommentDataType[] }) {
  return (
    <ResponsiveContainer className="w-full px-6 py-7">
      <div className="flex flex-col">
        <div className="mb-6 flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">이 주의 불타는 훈수</span>
          <span className="text-text-light text-xs font-semibold">뜨겁다...</span>
        </div>
        <div className="flex flex-col gap-5">
          {stats.map(comment => (
            <WeekCommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
