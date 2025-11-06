import { cva, VariantProps } from "class-variance-authority";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import BaseImage from "./image/BaseImage";

const navButtonVariants = cva(
  "flex items-center w-full text-left px-3 py-2 text-[12px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] hover:bg-gray-100 active:bg-gray-200 rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        main: "text-text-title sm:pl-4 pl-11",
        sub: "text-text-sub pl-11",
      },
      active: {
        true: "text-blue-500",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "main",
        active: true,
        className: "bg-gray-200",
      },
    ],
    defaultVariants: {
      variant: "main",
      active: false,
    },
  }
);

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof navButtonVariants> {
  children: ReactNode;
  icon_img?: StaticImageData;
}

export const NavButton = ({ variant, active, children, className, icon_img, ...props }: NavButtonProps) => {
  return (
    <button className={twMerge(navButtonVariants({ variant, active }), className)} {...props}>
      {variant === "main" && (
        <BaseImage
          src={icon_img || ""}
          alt="nav_icon"
          className="mr-3 hidden h-4 w-4 sm:block md:h-4.5 md:w-4.5 lg:h-5.5 lg:w-5.5 xl:h-5.5 xl:w-5.5"
        />
      )}
      {children}
    </button>
  );
};
