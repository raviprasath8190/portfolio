import React from "react";

export interface PCategory {
  url: string;
  label: string;
  isEmail?: boolean;
}
export default function CategoryTab({ label, url, isEmail }: PCategory) {
  return (
    <a
      href={url}
      target={isEmail ? undefined : "_blank"}
      key={label}
      className="text-green-400 text-xl  mr-5 bg-[#003d1e] p-3 hover:bg-green-800 transition-all cursor-pointer"
    >
      {label}
    </a>
  );
}
