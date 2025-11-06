import { cva, VariantProps } from "class-variance-authority";

const BadgeVariants = cva("w-max h-max rounded-sm", {
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

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  bgColor: string;
  textColor: string;
  text: string;
}

export default function Badge({ size, bgColor, textColor, text }: BadgeProps) {
  return (
    <>
      <div style={{ backgroundColor: bgColor, color: textColor }} className={BadgeVariants({ size })}>
        {text}
      </div>
    </>
  );
}
