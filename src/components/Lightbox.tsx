"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  onClose: () => void;
};

export default function Lightbox({ src, width, height, alt = "", onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="relative max-w-[95%] max-h-[95%]">
        <button
          aria-label="Close image"
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full p-2 shadow-lg"
        >
          ✕
        </button>
        <Image
          src={src}
          width={width}
          height={height}
          sizes="95vw"
          alt={alt}
          onClick={(e) => e.stopPropagation()}
          className="w-auto h-auto max-w-full max-h-[80vh] rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}
