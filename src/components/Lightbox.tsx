"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  closeLabel: string;
  onClose: () => void;
};

export default function Lightbox({ src, width, height, alt = "", closeLabel, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Move focus into the dialog, and back to where it was on close.
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <div className="relative max-w-[95%] max-h-[95%]">
        <button
          ref={closeRef}
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-gray-800 text-white rounded-full p-2 shadow-lg"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <Image
          src={src}
          width={width}
          height={height}
          sizes="95vw"
          alt={alt}
          className="w-auto h-auto max-w-full max-h-[80vh] rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}
