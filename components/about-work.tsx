import React from "react";
import RandomLetters from "./random-letters";

export default function Work() {
  return (
    <div className="p-3 border-[1px] border-green-400 border-opacity-[.4] my-12 flex items-center max-w-[max-content]">
      <span className="h-2 w-2 bg-yellow-200 inline-block mx-3 animate-ping rounded-full" />
      <RandomLetters
        url=""
        text="Currently looking for full time Front End Developer role "
      />
    </div>
  );
}
