import type { FC } from "react";

interface PlayButtonProps {}

export const PlayButton: FC<PlayButtonProps> = ({}) => {
  return (
    <>
      <button className="my-4 flex h-20 w-20 items-center justify-center rounded-full bg-baseRed text-center text-sm text-white transition duration-200 hover:scale-110 hover:bg-red-400">
        START
      </button>
    </>
  );
};
