import Link from "next/link";
import { AnchorHTMLAttributes, MouseEvent } from "react";

type VariantTypes = {
  [key: string]: {
    btn: string;
  };
};
const variant_types = {
  normal: {
    btn: "bg-[#003d1e] text-lg px-8 py-4 hover:bg-green-400 transition-all w-full text-green-400 hover:text-black",
  },
  colored: {
    btn: "bg-green-400 text-lg px-8 py-4 hover:bg-green-600 transition-all w-full text-black hover:text-green-200",
  },
  yellow: {
    btn: "bg-yellow",
  },
};

interface IColorBtn extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: keyof typeof variant_types;
  label: string;
  link?: boolean;
}

export default function ColoredBtn({ variant, label, ...props }: IColorBtn) {
  return (
    <a
      {...props}
      className={variant_types[variant].btn + " uppercase text-center"}
    >
      {label}
    </a>
  );
}
