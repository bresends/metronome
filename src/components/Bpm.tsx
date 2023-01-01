import type { FC } from "react";

interface BPMProps {}

export const BPM: FC<BPMProps> = ({}) => {
  return (
    <>
      <div className="py-8 text-baseRed">
        <span className="text-8xl font-bold">140</span>
        <span className="font-bold">BPM</span>
      </div>
      <span className="text-md pb-4 uppercase">Super Fast</span>
    </>
  );
};
