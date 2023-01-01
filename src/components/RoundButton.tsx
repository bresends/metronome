import type { FC } from "react";
import { clsx } from "clsx";

interface TempoButtonProps {
  decrease?: true;
  small?: true;
  onClickFn: () => void;
}

export const RoundButton: FC<TempoButtonProps> = ({
  decrease,
  small,
  onClickFn,
}) => {
  return (
    <button
      onClick={() => onClickFn()}
      className={clsx(
        "flex items-center justify-center rounded-full border text-5xl transition duration-200 hover:border-white hover:bg-baseRed hover:text-white",
        small ? "h-12 w-12" : "h-14 w-14"
      )}
    >
      <span
        className={clsx(
          decrease && small && "mb-1",
          decrease && !small && "mb-2"
        )}
      >
        {decrease ? "-" : "+"}
      </span>
    </button>
  );
};
