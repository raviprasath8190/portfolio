"use client";
import React, { useEffect, useState } from "react";
import MouseRandomCont from "./mouse-randrom-cont";

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [grid, setGrid] = useState<number[][]>();
  useEffect(() => {
    document.addEventListener("mousemove", (e): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      removeEventListener("mousemove", (e) => console.log("removed"));
    };
  }, []);

  return mousePosition.x ? (
    <MouseRandomCont x={mousePosition.x} y={mousePosition.y} />
  ) : null;
}
