import { Divider } from "@/components/common/Divider";
import Skeleton from "@/components/common/Skeleton";

export default function loading() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-10 md:w-[494px]">
        <div className="flex flex-col items-center gap-1">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-10 w-22" />
          <Skeleton className="h-6 w-60" />
        </div>
        <Divider />
        <div className="flex flex-col gap-2 sm:w-125">
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-full" />
        </div>
      </div>
    </div>
  );
}
