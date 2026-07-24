"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProductImage } from "@/types/product";

type ProductMediaGalleryProps = {
  images: ProductImage[];
  priority?: boolean;
  showThumbnails?: boolean;
  variant?: "default" | "hero";
};

export function ProductMediaGallery({ images, priority = false, showThumbnails = true, variant = "default" }: ProductMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const activeImage = images[activeIndex];
  const isVideo = activeImage ? /\.(mp4|webm|mov)$/i.test(activeImage.src) : false;
  const isHero = variant === "hero";

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  useEffect(() => {
    if (!isZoomOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, isZoomOpen]);

  if (!activeImage) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-monauro border border-black/10 bg-[#f3f3ef] text-sm text-neutral-500">
        Product media
      </div>
    );
  }

  return (
    <div className={isHero ? "grid" : "grid gap-4"}>
      <button
        aria-label={`Open enlarged view of ${activeImage.alt}`}
        className={`relative overflow-hidden text-left ${
          isHero ? "min-h-[calc(100dvh-96px)] rounded-none border-0 bg-black" : "min-h-[360px] rounded-monauro border border-black/10 bg-[#f3f3ef] lg:min-h-[560px]"
        }`}
        onClick={() => setIsZoomOpen(true)}
        type="button"
      >
        {isVideo ? (
          <video
            aria-label={activeImage.alt}
            autoPlay
            className={isHero ? "h-[calc(100dvh-96px)] min-h-[640px] w-full object-cover" : "h-full min-h-[360px] w-full object-contain p-4 lg:min-h-[560px]"}
            loop
            muted
            playsInline
            src={activeImage.src}
          />
        ) : (
          <Image
            className={isHero ? "object-contain bg-[#f3f5f2]" : "object-contain p-4"}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={priority}
            sizes={isHero ? "100vw" : "(min-width: 1024px) 48vw, 100vw"}
          />
        )}
        {images.length > 1 ? (
          <>
            <span
              aria-hidden="true"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-monauro-ink shadow-sm"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
            >
              &lt;
            </span>
            <span
              aria-hidden="true"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-monauro-ink shadow-sm"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
            >
              &gt;
            </span>
          </>
        ) : null}
        {!isHero ? (
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-monauro-ink shadow-sm">
            Click to enlarge
          </span>
        ) : null}
      </button>

      {showThumbnails ? (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              aria-label={`Show image ${index + 1}`}
              className={`relative shrink-0 overflow-hidden rounded-monauro border bg-[#f7f7f4] transition ${isHero ? "h-20 w-20" : "h-24 w-24"} ${
                index === activeIndex ? "border-monauro-orange ring-2 ring-monauro-orange/30" : "border-black/10 hover:border-black/30"
              }`}
              key={image.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              {/\.(mp4|webm|mov)$/i.test(image.src) ? (
                <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-neutral-600">Video</span>
              ) : (
                <Image className="object-contain p-2" src={image.src} alt={image.alt} fill sizes="96px" />
              )}
            </button>
          ))}
        </div>
      ) : null}

      {isZoomOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Product image enlarged view">
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-semibold text-monauro-ink"
            onClick={() => setIsZoomOpen(false)}
            type="button"
          >
            Close
          </button>
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white px-4 py-3 text-lg font-semibold text-monauro-ink md:block"
            onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
            type="button"
          >
            Prev
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white px-4 py-3 text-lg font-semibold text-monauro-ink md:block"
            onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
            type="button"
          >
            Next
          </button>
          <div className="relative mx-auto h-full max-w-6xl">
            {isVideo ? (
              <video aria-label={activeImage.alt} autoPlay className="h-full w-full object-contain" controls loop muted playsInline src={activeImage.src} />
            ) : (
              <Image className="object-contain" src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
