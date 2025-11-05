"use client";

import { cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type RoundedSize = "full" | "xl" | "lg";

interface BaseImageProps {
  src: string | StaticImageData;
  alt: string;
  rounded?: RoundedSize;
  onClick?: () => void;
  className?: string;
}

const BaseImageVariants = cva("relative overflow-hidden", {
  variants: {
    rounded: {
      full: "rounded-full",
      xl: "rounded-xl",
      lg: "rounded-lg",
    },
    defaultVariants: {
      size: "lg",
    },
  },
});

// post나 카드 같은곳에 이미지 쓸 때 className으로 w, h 값 받아서 쓰기
export default function BaseImage({ src, alt, onClick, rounded = "lg", className }: BaseImageProps) {
  const [isError, setIsError] = useState(false);
  const handleError = () => setIsError(true);
  return (
    <div className={twMerge(`h-[50px] w-1/2`, BaseImageVariants({ rounded }), className)} onClick={onClick}>
      {!isError && (
        <Image src={src} sizes="1000px" alt={alt} fill loading="eager" className="object-cover" onError={handleError} />
      )}
      {isError && (
        <Image
          alt="placeholder"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          fill
          className="bg-gray-100"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAA3NCSVQICAjb4U/gAAAAg0lEQVR4nO3BMQEAAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8C1FIAAGs7t8sAAAAASUVORK5CYII="
        />
      )}
    </div>
  );
}
