import type { FC } from "react";
import { TempoButton } from "./TempoButton";

interface MeasureProps {}

export const Measure: FC<MeasureProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 py-4">
        <TempoButton decrease small />
        <span className="text-2xl">4</span>
        <TempoButton small />
      </div>
      <p className="text-xs uppercase py-4">Beats per Measure</p>
    </>
  );
};
