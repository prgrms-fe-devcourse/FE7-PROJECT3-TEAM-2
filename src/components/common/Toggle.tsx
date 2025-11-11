"use client";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const toggle = cva("inline-flex items-center justify-center rounded-lg cursor-pointer", {
  variants: {
    size: {
      xl: "min-w-[343px] text-base py-4.5 gap-4",
      lg: "min-w-[311px] text-base py-4.5 gap-3",
      md: "min-w-[151px] text-sm py-[17px] gap-2",
      sm: "min-w-[79px] text-xs py-3 h-fit gap-0",
    },
    active: {
      t: "bg-[var(--color-main)] text-white",
      f: "border border-[var(--color-bg-sub)] bg-[var(--color-bg-main)] text-[var(--color-text-content)]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ToggleProps extends React.ComponentPropsWithoutRef<"button">, VariantProps<typeof toggle> {
  isToggle: boolean;
}

export function Toggle({ size, children, isToggle, className, ...props }: ToggleProps) {
  const active = isToggle ? "t" : "f";
  return (
    <>
      <button className={twMerge(toggle({ size, active }), className)} {...props}>
        {children}
      </button>
    </>
  );
}
