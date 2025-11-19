import { Divider } from "@/components/common/Divider";
import Skeleton from "@/components/common/Skeleton";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-10 sm:w-[494px]">
        <div className="flex flex-col items-center gap-1">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-10 w-22" />
          <Skeleton className="h-6 w-60" />
        </div>
        <div className="flex flex-row justify-center gap-3 sm:flex-col">
          <Skeleton className="h-12 w-12 sm:w-125" />
          <Skeleton className="h-12 w-12 sm:w-125" />
          <Skeleton className="h-12 w-12 sm:w-125" />
          <Skeleton className="h-12 w-12 sm:w-125" />
        </div>
        <Divider />
        <div className="flex w-[311px] flex-col gap-4 sm:w-125">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-14 w-full" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-4 w-62" />
        </div>
      </div>
    </div>
  );
}
