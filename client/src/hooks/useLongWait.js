import { useEffect, useState } from "react";

export default function useLongWait(loading, timeoutMs = 30000) {
  const [longWait, setLongWait] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLongWait(true);
      }, timeoutMs);
    } else {
      setLongWait(false);
    }

    return () => clearTimeout(timer);
  }, [loading, timeoutMs]);

  return longWait;
}
