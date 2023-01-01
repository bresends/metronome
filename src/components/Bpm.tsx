import { FC, useState } from "react";

interface BPMProps {
  tempo: number;
}

export const BPM: FC<BPMProps> = ({ tempo }) => {
  return (
    <div className="py-8 text-baseRed">
      <span className="text-8xl font-bold">{tempo}</span>
      <span className="font-bold">BPM</span>
    </div>
  );
};
