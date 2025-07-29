import { useEffect, useRef, useState } from "react";

export default function useLongWait(loading, timeoutMs = 50000) {
  const [longWait, setLongWait] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    let timer;
    if (loading) {
      timerRef.curerent = setTimeout(() => {
        setLongWait(true);
      }, timeoutMs);
    } else {
      clearTimeout(timerRef.current);
      setLongWait(false);
    }

    return () => clearTimeout(timerRef.current);
  }, [loading, timeoutMs]);

  return longWait;
}
