"use client";

import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const button = cva("inline-flex items-center justify-center rounded-lg", {
  variants: {
    size: {
      XLarge: "w-[343px] text-base py-4 gap-4",
      Large: "w-[311px] text-base py-4 gap-3",
      Medium: "w-[151px] text-sm py-3 gap-2",
      Small: "w-[79px] text-xs py-2 gap-0",
      XSmall: "w-[79px] h-fit text-xs py-1.5 gap-0 leading-none",
    },
    variant: {
      "1": "bg-[var(--color-main)] text-white",
      "2": "border border-[var(--color-bg-sub)] bg-[var(--color-main-50)] text-[var(--color-main)] ",
      "3": "border border-[var(--color-bg-sub)] bg-[var(--color-bg-main)] text-[var(--color-text-content)]",
      "4": "border border-[var(--color-main)] bg-[var(--color-bg-main)] text-[var(--color-main)]",
      "5": "bg-[var(--color-bg-main)] text-[var(--color-main)]",
    },
  },

  defaultVariants: {
    size: "Medium",
    variant: "1",
  },
});

type ButtonProps = { Icon?: LucideIcon } & VariantProps<typeof button> & React.ComponentPropsWithoutRef<"button">;

export function Button({ size, variant, children, Icon, ...props }: ButtonProps) {
  return (
    <>
      <button className={twMerge(button({ size, variant }))} {...props}>
        {size !== "Small" && size !== "XSmall" && Icon && <Icon />}
        {children}
      </button>
    </>
  );
}
