"use client";

import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const button = cva("inline-flex items-center justify-center rounded-lg cursor-pointer", {
  variants: {
    size: {
      xl: "min-w-[343px] text-base py-4 gap-4",
      lg: "min-w-[311px] text-base py-4 gap-3",
      md: "min-w-[151px] text-sm py-3 gap-2",
      sm: "min-w-[79px] text-xs py-2 gap-0",
      xs: "min-w-[79px] h-fit text-xs py-1.5 gap-0",
    },
    variant: {
      primary: "bg-[var(--color-main)] text-white hover:bg-blue-400 disabled:bg-gray-300",
      secondary:
        "border border-[var(--color-bg-sub)] bg-[var(--color-main-50)] text-[var(--color-main)] hover:bg-blue-100 disabled:bg-gray-200 disabled:text-white",
      tertiary:
        "border border-[var(--color-bg-sub)] bg-[var(--color-bg-main)] text-[var(--color-text-content)] hover:border-gray-400 disabled:border-gray-300 disabled:text-gray-200 disabled:border-gray-200",
      quaternary:
        "border border-[var(--color-main)] bg-[var(--color-bg-main)] text-[var(--color-main)] disabled:text-gray-200 disabled:border-blue-100",
      quinary: "bg-[var(--color-bg-main)] text-[var(--color-main)] disabled:text-gray-200",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof button> {
  Icon?: LucideIcon;
  className?: string;
}

export function Button({ size, variant, children, Icon, className, ...props }: ButtonProps) {
  return (
    <>
      <button className={twMerge(button({ size, variant }), className)} {...props}>
        {size !== "sm" && size !== "xs" && Icon && <Icon />}
        {children}
      </button>
    </>
  );
}
