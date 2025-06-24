"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex self-start text-lg">
      <p>$</p>
      <Link
        className={`hover:text-green-400 mx-3 ${
          pathname === "/" && "text-green-400"
        }`}
        href={"/"}
      >
        HOME
      </Link>
      /
      {/* <Link
        className={`hover:text-green-400 mx-3 ${
          pathname === "/about" && "text-green-400"
        }`}
        href={"/about"}
      >
        ABOUT
      </Link> */}
      <Link
        className={`hover:text-green-400 mx-3 ${
          pathname === "/get-in-touch" && "text-green-400"
        }`}
        href={"/get-in-touch"}
      >
        GET IN TOUCH
      </Link>
    </header>
  );
}
