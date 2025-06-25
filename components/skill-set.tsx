import React from "react";
import HoverColorChange from "./hover-color-change";

export interface SkillSetProps {
  heading: string;
  skills: { Sname: string; url?: string | undefined }[];
}

export default function SkillSet({ heading, skills }: SkillSetProps) {
  return (
    <div className="text-xl flex justify-start mt-8 w-full flex flex-col md:flex-row">
      <div className="mr-12 w-[400px] ">{heading}</div>
      <div className="w-[400px] flex flex-col space-y-1">
        {skills.map((skill, index) => (
          <HoverColorChange key={index} label={skill.Sname} url={skill.url} />
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="max-w-[400px]"></div> */
}
