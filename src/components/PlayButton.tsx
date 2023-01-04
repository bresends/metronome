import { FC } from "react";

interface PlayButtonProps {
  isRunning: boolean;
  playFn: () => void;
  stopFn: () => void;
}

export const PlayButton: FC<PlayButtonProps> = ({
  playFn,
  stopFn,
  isRunning,
}) => {
  return (
    <>
      <button
        onClick={isRunning ? () => stopFn() : () => playFn()}
        className="my-4 flex h-20 w-20 items-center justify-center rounded-full bg-baseRed text-center text-sm text-white transition duration-200 hover:scale-110 hover:bg-red-400"
      >
        {isRunning ? "Stop" : "Play"}
      </button>
    </>
  );
};
