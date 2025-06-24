"use client";
import React from "react";

interface rPHoverColorChange {
  label: string;
  url?: string | undefined;
}
export default function HoverColorChange({ label, url }: { label: string }) {
  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-500 cursor-pointer underline hover:decoration-green-500 w-fit"
    >
      {label}
    </a>
  ) : (
    <div className="text-white hover:text-green-500 cursor-pointer underline hover:decoration-green-500 w-fit">
      {label}
    </div>
  );
}
