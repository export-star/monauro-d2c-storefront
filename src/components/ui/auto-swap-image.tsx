"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type AutoSwapImageProps = {
  alt: string;
  className?: string;
  images: string[];
  intervalMs?: number;
  sizes: string;
};

export function AutoSwapImage({ alt, className, images, intervalMs = 1000, sizes }: AutoSwapImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((src, index) => (
        <Image
          className={`${className ?? ""} transition-opacity duration-300 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          src={src}
          alt={index === activeIndex ? alt : ""}
          aria-hidden={index === activeIndex ? undefined : true}
          fill
          key={src}
          sizes={sizes}
        />
      ))}
    </>
  );
}
