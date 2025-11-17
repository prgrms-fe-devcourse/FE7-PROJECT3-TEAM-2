import ChartMenu from "@/components/chart/ChartMenu";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import { getUser } from "@/services/profile/user";

export default async function ChartLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  return (
    <div className="flex h-fit w-full flex-col px-6 py-5">
      <ResponsiveContainer className="mb-3 w-full border-0 sm:h-fit sm:border">
        <ChartMenu user={user} />
      </ResponsiveContainer>
      {children}
    </div>
  );
}
