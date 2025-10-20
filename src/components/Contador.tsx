import { useEffect, useState } from "react";

type ContadorProps = {
  to: number;
  duration?: number;
  suffix?: string;
};

export default function Contador({to, duration = 1200, suffix = ""}: ContadorProps) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / (duration / 15));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setValue(to);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 15);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{value.toLocaleString()}{suffix}</span>;
}
