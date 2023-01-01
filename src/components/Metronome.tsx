import type { FC } from "react";
import { BPM } from "./Bpm";
import { Measure } from "./Measure";
import { PlayButton } from "./PlayButton";
import { Slider } from "./Slider";

interface MetronomeProps {}

export const Metronome: FC<MetronomeProps> = ({}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col shadow-md">
        <BPM />
        <Slider />
        <PlayButton />
        <Measure />
      </div>
    </div>
  );
};
