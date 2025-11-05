import { twMerge } from "tailwind-merge";

interface ResponsiveContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function ResponsiveContainer({ className, children }: ResponsiveContainerProps) {
  return (
    <div
      className={twMerge(
        "bg-bg-main rounded-md border border-gray-200 sm:rounded-lg md:rounded-xl lg:rounded-[18px] xl:rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
