import type { FC } from "react";
import { TempoButton } from "./TempoButton";

interface MeasureProps {}

export const Measure: FC<MeasureProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-4">
        <TempoButton decrease small />
        <span>4</span>
        <TempoButton small />
      </div>
      <p>Beats per Measure</p>
    </>
  );
};
