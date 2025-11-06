import { Button } from "@/components/common/Button";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ChartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col px-6 py-5">
      <ResponsiveContainer className="w-full">
        <div className="w-full p-6">
          <Button size="small">전체</Button>
          <Button size="small">카테고리</Button>
        </div>
      </ResponsiveContainer>
      {children}
    </div>
  );
}
