import { memo } from "react";

const generateRandomGrid = () => {
  const newGrid = Array.from({ length: 20 }, () =>
    Array.from({ length: 20 }, () => Math.round(Math.random()))
  );
  return newGrid;
};
function getRandomItem<T>(...items: T[]): T {
  if (items.length === 0) {
    throw new Error("No arguments provided.");
  }

  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

const NumDiv = ({ e, i }: { e: number; i: number }) => {
  return (
    <div
      className={`mix-blend-color ${getRandomItem(
        "opacity-30 ",
        "opacity-90 "
      )}`}
      key={i}
    >
      {e}
    </div>
  );
};

const Div1 = memo(() => {
  const grid = generateRandomGrid();
  return (
    <div
      className="sub-div absolute top-0 left-0 fade-animation"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${500}, 1fr)`,
        animationDelay: "2s",
      }}
    >
      {grid?.map((row, rowIndex) => (
        <div className="ml-2 text-green-700 text-2xl" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <NumDiv e={cell} i={colIndex} key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
});
Div1.displayName = "Div1";
const Div2 = memo(() => {
  const grid = generateRandomGrid();
  return (
    <div
      className="sub-div absolute top-0 left-0  fade-animation"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${500}, 1fr)`,
        animationDelay: "4s",
      }}
    >
      {grid?.map((row, rowIndex) => (
        <div className="ml-2 text-green-700 text-2xl" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <NumDiv e={cell} i={colIndex} key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
});

Div2.displayName = "Div2";
const Div3 = memo(() => {
  const grid = generateRandomGrid();
  return (
    <div
      className="sub-div absolute top-0 left-0  fade-animation"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${500}, 1fr)`,
        animationDelay: "6s",
      }}
    >
      {grid?.map((row, rowIndex) => (
        <div className="ml-2 text-green-700 text-2xl" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <NumDiv e={cell} i={colIndex} key={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
});
Div3.displayName = "Div3";

interface IMouseRandomCont {
  x: number;
  y: number;
}

export default memo(function MouseRandomCont({ x, y }: IMouseRandomCont) {
  return (
    <div
      className="fixed movement-div"
      style={{
        position: "fixed",
        left: `calc(${x}px - 250px)`,
        top: `calc(${y}px - 250px)`,
      }}
    >
      <Div1 />
      <Div2 />
      <Div3 />
    </div>
  );
});
