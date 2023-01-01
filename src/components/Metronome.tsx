import type { FC } from "react";
import { BPM } from "./Bpm";
import { Measure } from "./Measure";
import { PlayButton } from "./PlayButton";
import { Slider } from "./Slider";

interface MetronomeProps {}

export const Metronome: FC<MetronomeProps> = ({}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-96 flex-col items-center justify-between">
        <BPM />
        <Slider />
        <PlayButton />
        <Measure />
      </div>
    </div>
  );
};
