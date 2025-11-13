import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import ArchiveNavBar from "@/components/user/ArchiveNavBar";

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-6.5 w-full pb-5 text-xs">
        <ResponsiveContainer className="flex flex-col gap-3 p-6 max-sm:justify-between max-sm:border-none max-sm:p-0">
          <ArchiveNavBar />
          {children}
        </ResponsiveContainer>
      </div>
    </>
  );
}
