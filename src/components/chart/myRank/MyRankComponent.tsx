import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { User } from "@supabase/supabase-js";

export default function MyRankComponent({ user }: { user: User }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
      <ResponsiveContainer className="min-h-0 w-full px-6 py-7">
        <div className="flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">내 유형</span>
          <span className="text-text-light text-xs font-semibold">내가 무엇을 했더라...?</span>
        </div>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <div className="mb-4 flex flex-col gap-2">
          <span className="text-text-title text-lg font-semibold">내 유형</span>
          <span className="text-text-light text-xs font-semibold">내가 무엇을 했더라...?</span>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
