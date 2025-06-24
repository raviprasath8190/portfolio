import AvailableWork from "@/components/about-work";
import ColoredBtn from "@/components/colored-btn";
import SubHeading from "@/components/sub-heading";
import React from "react";
import { CONNECTION } from "../page";
import CategoryTab from "@/components/category-tab";

export default function GetInTouch() {
  return (
    <main className="py-12 ">
      <h1 className="text-green-400 text-4xl font-bold">GET IN TOUCH</h1>
      <p className="text-xl mt-5">
        Looking to collaborate or have questions? Let&apos;s connect! Reach me
        to explore opportunities.
      </p>
      <AvailableWork />
      <SubHeading label="LET'S HAVE A CHAT" />
      <div className="flex mt-8">
        <ColoredBtn
          href="mailto:raviprasath8190@gmail.com"
          variant="colored"
          label="EMAIL ME"
        />
        <div className="w-8" />
        <ColoredBtn
          href="tel:+919360349274"
          variant="normal"
          label="MAKE A CALL"
        />
      </div>
      <p className="text-lg mt-5">
        <span className="text-gray-300"> Response Time : </span>Within 12 hours
        of the initial point of contact.
      </p>
      <div className="h-8" />
      <SubHeading label="CONNECT" />
      <div className="flex flex-wrap my-8">
        {CONNECTION.map((e) => {
          return <CategoryTab {...e} key={e.url} />;
        })}
      </div>
    </main>
  );
}
