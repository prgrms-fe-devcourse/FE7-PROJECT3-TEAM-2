"use client";

import { StaticImageData } from "next/image";
import BaseImage from "./BaseImage";

type ImageSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ProfileImageProps {
  src: string | StaticImageData;
  alt?: string;
  size?: ImageSize;
  className?: string;
  onClick?: () => void;
  rounded?: boolean;
}

const sizeMap = {
  xs: 24,
  sm: 36,
  md: 48,
  lg: 60,
  xl: 72,
};

export default function CircleProfileImage({
  src,
  alt = "image",
  size = "md",
  className = "",
  onClick,
  rounded = false,
}: ProfileImageProps) {
  const w = sizeMap[size];
  return (
    <BaseImage
      src={src}
      alt={alt}
      size={w}
      rounded={rounded}
      className={`border border-[#D4D4D4D8] cursor-pointer ${className}`}
      onClick={onClick}
    />
  );
}
