import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
  percent: number;
  count: number;
  color: string;
  className?: string;
}

export default function ProgressBar({ percent, count, color, className }: ProgressBarProps) {
  return (
    <div
      className={twMerge(
        "flex h-4 w-11/12 overflow-hidden rounded-full bg-gray-200",
        className,
        !count && "bg-gray-300"
      )}
      role="progressbar"
      aria-valuenow={25}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {!!count ? (
        <div
          className="flex flex-col justify-center overflow-hidden rounded-full text-center text-xs whitespace-nowrap text-white transition duration-500"
          style={{ width: `${percent}%`, backgroundColor: color }}
        >
          {count}개
        </div>
      ) : (
        <div
          className="flex flex-col justify-center overflow-hidden rounded-full text-center text-xs whitespace-nowrap text-white transition duration-500"
          style={{ width: "100%" }}
        >
          지표가 부족합니다
        </div>
      )}
    </div>
  );
}
