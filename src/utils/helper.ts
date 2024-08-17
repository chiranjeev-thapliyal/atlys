import { ClassType } from "./types";

export const classMerge = (...inputs: ClassType[]) => {
  return inputs.flat().filter(Boolean).join(" ").trim();
};
