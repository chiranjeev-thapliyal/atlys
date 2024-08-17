import { classMerge } from "../../../utils/helper";
import { LabelProps } from "./index.types";

function Label({ children, className, ...rest }: LabelProps) {
  const baseClass = "text-sm font-medium text-gray-normal";

  return (
    <label className={classMerge(baseClass, className)} {...rest}>
      {children}
    </label>
  );
}

export default Label;
