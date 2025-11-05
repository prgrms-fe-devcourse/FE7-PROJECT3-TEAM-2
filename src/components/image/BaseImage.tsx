"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface BaseImageProps {
  src: string | StaticImageData;
  alt: string;
  size?: number;
  rounded?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function BaseImage({ src, alt, size, rounded = false, onClick, className }: BaseImageProps) {
  const [isError, setIsError] = useState(false);
  const handleError = () => setIsError(true);
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative overflow-hidden ${rounded ? "rounded-full" : "rounded-xl"} ${className}`}
      onClick={onClick}
    >
      {!isError && (
        <Image src={src} sizes="100px" alt={alt} fill loading="eager" className="object-cover" onError={handleError} />
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
