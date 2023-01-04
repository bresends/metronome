import { FC, useCallback, useEffect, useState } from "react";
import { useTimer, useStopwatch } from "react-use-precision-timer";

import audio1 from "../assets/click1.mp3";
import audio2 from "../assets/click2.mp3";

import { BPM } from "./Bpm";
import { Measure } from "./Measure";
import { PlayButton } from "./PlayButton";
import { Slider } from "./Slider";

interface MetronomeProps {}

export const Metronome: FC<MetronomeProps> = ({}) => {
  const [tempo, setTempo] = useState(180);
  const [measure, setMeasure] = useState(4);
  const [beatCounter, setBeatCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  const metronomeCallback = useCallback(() => {
    const click1 = new Audio(audio1);
    const click2 = new Audio(audio2);

    if (beatCounter % measure === 0) {
      click2.play();
      click2.currentTime = 0;
    } else {
      click1.play();
      click1.currentTime = 0;
    }

    setBeatCounter(beatCounter + 1);
  }, [beatCounter]);

  const clickTimer = useTimer(
    { delay: 60000 / tempo, startImmediately: false, fireImmediately: true },
    metronomeCallback
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      setTime(clickTimer.getElapsedRunningTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-between">
        <BPM {...{ tempo }} />
        <Slider {...{ tempo, setTempo }} />
        <PlayButton
          playFn={() => clickTimer.start()}
          stopFn={() => clickTimer.pause()}
          isRunning={clickTimer.isRunning()}
        />
        <Measure {...{ measure, setMeasure }} />

        <p>Time Studied: {(time / 1000).toFixed(1)}s</p>
      </div>
    </div>
  );
};
