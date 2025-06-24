import React from "react";

interface PSubheading {
  label: string;
}
export default function SubHeading({ label }: PSubheading) {
  return <h2 className="text-xl text-green-400 font-semibold">{label}</h2>;
}
