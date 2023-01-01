import type { FC } from "react";
import { RoundButton } from "./RoundButton";

interface MeasureProps {
  measure: number;
  setMeasure: (measure: number) => void;
}

export const Measure: FC<MeasureProps> = ({ measure, setMeasure }) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 py-4">
        <RoundButton
          decrease
          small
          onClickFn={() => measure > 1 && setMeasure(measure - 1)}
        />
        <span className="text-2xl">{measure}</span>
        <RoundButton
          small
          onClickFn={() => measure < 12 && setMeasure(measure + 1)}
        />
      </div>
      <p className="py-4 text-xs uppercase">Beats per Measure</p>
    </>
  );
};
