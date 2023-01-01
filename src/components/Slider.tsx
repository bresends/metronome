import type { FC } from 'react';
import { TempoButton } from './TempoButton';

interface SliderProps {}

export const Slider: FC<SliderProps> = ({}) => {
  return (
    <div>
      <TempoButton />
      <input type="range" min={20} max={280} step={1} />
      <TempoButton />
    </div>
  );
};
