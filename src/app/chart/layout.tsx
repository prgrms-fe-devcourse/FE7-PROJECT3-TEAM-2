import ChartMenu from "@/components/chart/ChartMenu";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function ChartLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col px-6 py-5">
      <ResponsiveContainer className="mb-3 w-full border-0 sm:h-fit sm:border">
        <ChartMenu />
      </ResponsiveContainer>
      {children}
    </div>
  );
}
