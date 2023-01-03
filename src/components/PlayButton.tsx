import { FC } from "react";
import audio from "../assets/click1.mp3";

interface PlayButtonProps {}

export const PlayButton: FC<PlayButtonProps> = ({}) => {
  const player = new Audio(audio);

  return (
    <>
      <button
        onClick={() => player.play()}
        className="my-4 flex h-20 w-20 items-center justify-center rounded-full bg-baseRed text-center text-sm text-white transition duration-200 hover:scale-110 hover:bg-red-400"
      >
        START
      </button>
      <audio src={audio} className="bg-red-300" />
    </>
  );
};
