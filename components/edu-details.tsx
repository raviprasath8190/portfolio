import React from "react";
import HoverColorChange from "./hover-color-change";

export interface EducationDetailsProps {
  start?: number;
  end?: number;
  college: string;
  course: string;
  percentage: string;
  location: string;
  url?: string;
}
export default function EduDetails({
  college,
  location,
  course,
  percentage,
  end,
  start,
  url,
}: EducationDetailsProps) {
  return (
    <div className="text-xl flex justify-start mt-8 w-full flex flex-col md:flex-row  ">
      <div className="mr-12 w-[400px] ">
        {start} - {end}
      </div>
      <div className="w-[400px]">
        <p>{course}</p>
        <p>percentage-{percentage}</p>
        <HoverColorChange label={college} url={url} />
        <p>{location}</p>
      </div>
    </div>
  );
}
