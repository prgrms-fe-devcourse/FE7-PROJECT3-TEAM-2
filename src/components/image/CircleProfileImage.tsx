"use client";

import { cva } from "class-variance-authority";
import { StaticImageData } from "next/image";
import BaseImage, { RoundedSize } from "./BaseImage";

type ImageSize = "xs" | "sm" | "md" | "lg" | "xl";

interface CircleProfileImageProps {
  src: string | StaticImageData;
  alt?: string;
  size?: ImageSize;
  className?: string;
  onClick?: () => void;
  rounded?: RoundedSize;
}

const CircleProfileImageVariants = cva("border border-gray-100 cursor-pointer", {
  variants: {
    size: {
      xs: "w-[24px] h-[24px]",
      sm: "w-[36px] h-[36px]",
      md: "w-[48px] h-[48px]",
      lg: "w-[60px] h-[60px]",
      xl: "w-[72px] h-[72px]",
    },
    defaultVariants: {
      size: "md",
    },
  },
});

export default function CircleProfileImage({
  src,
  alt = "image",
  size = "md",
  rounded = "lg",
  onClick,
}: CircleProfileImageProps) {
  return (
    <BaseImage
      src={src}
      alt={alt}
      rounded={rounded}
      className={CircleProfileImageVariants({ size })}
      onClick={onClick}
    />
  );
}
