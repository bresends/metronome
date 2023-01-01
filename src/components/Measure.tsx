import type { FC } from 'react';
import { TempoButton } from './TempoButton';

interface MeasureProps {}

export const Measure: FC<MeasureProps> = ({}) => {
  return (
    <div>
      <TempoButton />
      <span>4</span>
      <TempoButton />
      <p>Beats per Measure</p>
    </div>
  );
};
