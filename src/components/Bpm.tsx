import type { FC } from 'react';

interface BPMProps {}

export const BPM: FC<BPMProps> = ({}) => {
  return (
    <div>
      <div>
        <span>140</span>
        <span>BPM</span>
      </div>
      <div>
        <span>Super Fast</span>
      </div>
    </div>
  );
};
