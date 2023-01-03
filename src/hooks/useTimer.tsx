import { useEffect, useState } from "react";
import { clearInterval, setInterval } from "worker-timers";

export const useTimer = (
  refreshInterval: number
): { time: number; setTime: (newTime: number) => void } => {
  const [time, setTime] = useState(0);
  const [referenceTime, setReferenceTime] = useState(Date.now());

  useEffect(() => {
    const countUp = () => {
      setTime((prevTime) => {
        const now = Date.now();
        const interval = now - referenceTime;
        setReferenceTime(now);
        return prevTime + interval;
      });
    };

    const intervalId = setInterval(countUp, refreshInterval);
    return () => clearInterval(intervalId);
  }, [time]);

  return { time, setTime };
};
