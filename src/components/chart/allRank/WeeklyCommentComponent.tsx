import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import WeekCommentCard from "./WeekCommentCard";
import ChartCardTtile from "../ChartCardTtile";

export default function WeeklyCommentComponent({ stats }: { stats: weekCommentDataType[] }) {
  return (
    <ResponsiveContainer className="w-full px-5 py-6">
      <div className="flex flex-col">
        <ChartCardTtile title="이 주의 불타는 훈수" subTitle="뜨겁다..." />
        <div className="mt-5 flex flex-col gap-5">
          {stats.map(comment => (
            <WeekCommentCard key={comment.comment_id} comment={comment} />
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
