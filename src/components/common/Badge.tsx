import { cva } from "class-variance-authority";

type BadgeSize = "xs" | "sm" | "md" | "lg" | "xl";

interface BadgeProps {
  size: BadgeSize;
  bgColor: string;
  textColor: string;
  text: string;
}

const BadgeVariants = cva("w-max rounded-sm", {
  variants: {
    size: {
      xs: "text-[8px] px-1.5 py-[3.5px]",
      sm: "text-xs px-1.5 py-[3.5px] ",
      md: "text-sm px-2 py-[4.5px] ",
      lg: "text-base px-[14.5px] py-[9px] ",
      xl: "text-base px-[17px] py-[9px] ",
    },
    defaultVariants: {
      size: "md",
    },
  },
});

export default function Badge({ size, bgColor, textColor, text }: BadgeProps) {
  return (
    <>
      <div style={{ backgroundColor: bgColor, color: textColor }} className={BadgeVariants({ size })}>
        {text}
      </div>
    </>
  );
}
