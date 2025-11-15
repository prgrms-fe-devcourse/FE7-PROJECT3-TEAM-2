export default function ChartCardTtile({ title, subTitle }: { title: string; subTitle?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-text-title text-lg font-semibold">{title}</span>
      {subTitle && <span className="text-text-light text-xs font-semibold">{subTitle}</span>}
    </div>
  );
}
