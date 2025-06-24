"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface IRandomLetter {
  text: string;
  className?: string;
  url?: string;
}

export default function RandomLetters({ text, className, url }: IRandomLetter) {
  const [fText, setFText] = useState<string>("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const interval = useRef<NodeJS.Timeout | undefined>();

  const randomFun = useCallback(() => {
    let iteration = 0;

    interval.current = setInterval(() => {
      let newText = text
        .split("")
        .map((_letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(interval.current);
      }

      iteration += 1 / 3;
      setFText(newText);
    }, 30);
  }, [text]);

  useEffect(() => {
    randomFun();
  }, [randomFun, text]);

  return <div onClick={() => url && window.open(url)} className={`${className}  ${url ? "hover:cursor-pointer" : "hover:cursor-default"}`} >{fText}</div>;
}
