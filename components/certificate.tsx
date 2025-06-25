import React from "react";
import HoverColorChange from "./hover-color-change";

export interface certifyProp {
  cerHeading: string;
  cerTypes: { Cname: string; url?: string | undefined }[];
}

export default function Certificate({ cerHeading, cerTypes }: certifyProp) {
  return (
    <div className="text-xl flex justify-start mt-8 w-full flex flex-col md:flex-row">
      <div className="mr-12 w-[400px]">{cerHeading}</div>
      <div className="w-[400px] flex flex-col space-y-1">
        {cerTypes.map((cerType, index) => (
          <HoverColorChange
            key={index}
            label={cerType.Cname}
            url={cerType.url}
          />
        ))}
      </div>
    </div>
  );
}
