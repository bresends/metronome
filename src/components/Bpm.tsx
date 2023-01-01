import type { FC } from "react";

interface BPMProps {}

export const BPM: FC<BPMProps> = ({}) => {
  return (
    <>
      <div className="text-baseRed py-4">
        <span className="text-7xl font-bold">140</span>
        <span className="font-bold">BPM</span>
      </div>
      <div>
        <span className="text-sm uppercase">Super Fast</span>
      </div>
    </>
  );
};
