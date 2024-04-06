import { useMemo } from "react";

export const useRandomNumber = (min: number, max: number) => {
  return useMemo(() => Math.floor(Math.random() * max) + min, [min, max]);
};

export const shortenText = (text: string) => {
  if (text.length <= 200) return text;
  return text.substring(0, 200) + "...";
};
