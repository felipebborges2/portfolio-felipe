"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface AnimatedCardProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  showDownloadIcon?: boolean;
  label?: string;
  /**
   * Alignment of the inner content stack. Defaults to "center" (the look
   * used by highlight tiles, skill groups, language cards, CV buttons).
   * Use "start" for left-aligned body copy (project/journey cards) — the
   * inner wrapper used to hardcode center alignment regardless of what
   * the caller passed, which silently defeated any `text-left` a parent
   * tried to set.
   */
  align?: "center" | "start";
}

export default function AnimatedCard({
  children,
  className = "",
  href,
  download = false,
  showDownloadIcon = false,
  label,
  align = "center",
}: AnimatedCardProps) {
  const baseClasses =
    "relative bg-[#151515] border border-[#1f1f1f] rounded-xl overflow-hidden group transition";
  const combinedClasses = `${baseClasses} ${href ? "cursor-pointer" : ""} ${className}`;
  const innerAlignClasses =
    align === "start" ? "items-start text-left" : "items-center justify-center text-center";

  const content = (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 20px rgba(155, 34, 66, 0.25)",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={combinedClasses}
    >
      {/* brilho radial suave */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 ease-out z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(155,34,66,0.15) 0%, transparent 75%)",
        }}
      />

      {/* conteúdo acima do brilho */}
      <div className={`relative z-10 flex w-full flex-col gap-2 ${innerAlignClasses}`}>
        {showDownloadIcon && (
          <Download className="w-5 h-5 text-white transition duration-300" />
        )}
        {label && (
          <p className="text-white font-medium text-sm transition duration-300">
            {label}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={download ? "_self" : "_blank"}
        rel="noopener noreferrer"
        download={download}
      >
        {content}
      </a>
    );
  }

  return content;
}
