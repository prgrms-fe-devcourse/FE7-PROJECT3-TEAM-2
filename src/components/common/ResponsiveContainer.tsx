import { twMerge } from "tailwind-merge";

interface ResponsiveContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function ResponsiveContainer({ className, children }: ResponsiveContainerProps) {
  return (
    <div
      className={twMerge(
        "bg-bg-main border-border-main rounded-md border sm:rounded-lg md:rounded-xl lg:rounded-[18px] xl:rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
