import type { FC } from "react";
import { TempoButton } from "./TempoButton";

interface SliderProps {}

export const Slider: FC<SliderProps> = ({}) => {
  return (
    <div className="flex items-center space-x-4">
      <TempoButton decrease />
      <label htmlFor="default-range" className="sr-only">
        BPM
      </label>
      <input
        id="steps-range"
        type="range"
        min={20}
        max={280}
        step={1}
        defaultValue={180}
        className="h-2 w-56 cursor-pointer appearance-none rounded-lg"
      />
      <TempoButton />
    </div>
  );
};
