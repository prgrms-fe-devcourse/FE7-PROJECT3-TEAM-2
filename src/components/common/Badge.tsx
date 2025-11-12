import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { BADGE_MAP, BadgeType } from "@/types/badge";

const badgeColor = Object.fromEntries(
  Object.entries(BADGE_MAP).map(([key, value]) => [key, `${value.bgColor} ${value.textColor}`])
);

const BadgeVariants = cva("w-max h-max rounded-sm", {
  variants: {
    size: {
      xs: "text-[8px] px-1.5 py-[3.5px]",
      sm: "text-xs px-1.5 py-[3.5px] ",
      md: "text-sm px-2 py-[4.5px] ",
      lg: "text-base px-[14.5px] py-[9px] ",
      xl: "text-base px-[17px] py-[9px] ",
    },
    color: badgeColor,
  },
  defaultVariants: {
    size: "md",
  },
});

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  text: string;
  type: BadgeType;
  className?: string;
}

export default function Badge({ size, type, text, className }: BadgeProps) {
  return (
    <>
      <div className={twMerge(BadgeVariants({ size, color: type }), className)}>{text}</div>
    </>
  );
}
