import { cva } from "class-variance-authority";

type BadgeSize = "sm" | "md" | "lg" | "xl";

interface BadgeProps {
  size: BadgeSize;
  bgColor: string;
  textColor: string;
  text: string;
}

const BadgeVariants = cva("inline-flex items-center justify-center inline-block align-middle  rounded-sm", {
  variants: {
    size: {
      sm: "text-xs py-[3.5px] px-1.5",
      md: "text-sm py-[4.5px] px-2",
      lg: "text-base py-[9px] px-[14.5px]",
      xl: "text-base py-[9px] px-[17px]",
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
