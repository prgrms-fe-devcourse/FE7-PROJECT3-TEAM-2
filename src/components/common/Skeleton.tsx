import { twMerge } from "tailwind-merge";

interface SkeletonProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export default function Skeleton({ className, ...rest }: SkeletonProps) {
  return <div className={twMerge("animate-pulse rounded-full bg-gray-100", className)} {...rest}></div>;
}
