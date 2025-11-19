import ScrollContainer from "react-indiana-drag-scroll";

export default function HorizontalScrollContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="from-bg-main pointer-events-none absolute top-0 left-0 z-10 h-full w-8 bg-linear-to-r to-transparent" />
      <ScrollContainer className={className}>{children}</ScrollContainer>
      <div className="from-bg-main pointer-events-none absolute top-0 right-0 z-10 h-full w-8 bg-linear-to-l to-transparent" />
    </div>
  );
}
