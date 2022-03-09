import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>count = {count}</div>;
}
