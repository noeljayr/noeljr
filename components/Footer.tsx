"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("--:--:-- Local");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());

    const updateClock = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setTime(
        `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} Local`,
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="wrap foot mono">
        <span>
          © <span id="year">{year}</span> Noel Jr. Luhanga
        </span>
        <span id="clock">{time}</span>
        <a href="#top" data-hover="">
          Top <i className="ti ti-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
}
