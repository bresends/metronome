import { FC, useEffect, useState } from "react";
import { RoundButton } from "./RoundButton";

interface SliderProps {
  tempo: number;
  setTempo: (tempo: number) => void;
}

export const Slider: FC<SliderProps> = ({ setTempo, tempo }) => {
  const [tempoString, setTempoString] = useState("");

  useEffect(() => {
    if (tempo < 30) {
      setTempoString("Ultra Slow");
    } else if (tempo < 40) {
      setTempoString("Super Slow");
    } else if (tempo < 80) {
      setTempoString("Slow");
    } else if (tempo < 120) {
      setTempoString("Medium Slow");
    } else if (tempo < 140) {
      setTempoString("Medium");
    } else if (tempo < 160) {
      setTempoString("Medium Fast");
    } else if (tempo < 180) {
      setTempoString("Fast");
    } else if (tempo < 200) {
      setTempoString("Very Fast");
    } else if (tempo < 240) {
      setTempoString("Super Fast");
    } else if (tempo < 260) {
      setTempoString("Extremely Fast");
    } else if (tempo <= 280) {
      setTempoString("Insanely Fast");
    } else setTempoString("Ultra Slow");
  }, [tempo]);

  return (
    <>
      <span className="text-md pb-4 uppercase">{tempoString}</span>
      <div className="flex items-center space-x-4">
        <RoundButton
          decrease
          onClickFn={() => tempo > 20 && setTempo(tempo - 1)}
        />
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
          onChange={(e) => setTempo(parseInt(e.target.value))}
          className="h-2 w-56 cursor-pointer appearance-none rounded-lg"
        />
        <RoundButton onClickFn={() => tempo < 280 && setTempo(tempo + 1)} />
      </div>
    </>
  );
};
