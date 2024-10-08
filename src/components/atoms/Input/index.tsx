import { classMerge } from "../../../utils/helper";
import { InputProps } from "./index.types";

function Input({ className, type, ...rest }: InputProps) {
  const baseClass =
    "text-base bg-transparent font-normal outline-none border-2 p-3 border-black-normal rounded";

  return (
    <input type={type} className={classMerge(baseClass, className)} {...rest} />
  );
}

export default Input;
