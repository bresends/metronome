import { FC, useEffect, useState } from "react";

import { useTimer } from "../hooks/useTimer";
import { BPM } from "./Bpm";
import { Measure } from "./Measure";
import { PlayButton } from "./PlayButton";
import { Slider } from "./Slider";

interface MetronomeProps {}

export const Metronome: FC<MetronomeProps> = ({}) => {
  const [tempo, setTempo] = useState(180);
  const [measure, setMeasure] = useState(4);

  const { time } = useTimer(100);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-between">
        <BPM {...{ tempo }} />
        <Slider {...{ tempo, setTempo }} />
        <PlayButton />
        <Measure {...{ measure, setMeasure }} />
        {(time / 1000).toFixed(1)}s
      </div>
    </div>
  );
};
