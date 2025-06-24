const DUMMY = "¯_._(◉‿◉)_._/¯".split("");
const DUMMY1 = "ver 2.0.9".split("");

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="self-start text-lg">
      <div className="my-6">
        {DUMMY.map((e, i) => (
          <span
            className="hover:text-green-400 transition-all cursor-default"
            key={i + e}
          >
            {e}
          </span>
        ))}
      </div>
      &copy; {date} developed by Raviprasath
      <div className="my-0">
        {" "}
        {DUMMY1.map((f, j) => (
          <span
            className="text-gray-400 hover:text-white transition-all cursor-default"
            key={f + j}
          >
            {f}
          </span>
        ))}
      </div>
    </footer>
  );
}
