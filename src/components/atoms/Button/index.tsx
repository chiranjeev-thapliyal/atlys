import { classMerge } from "../../../utils/helper";
import { ButtonProps } from "./index.types";

function Button({ children, className, onClick, ...rest }: ButtonProps) {
  const baseClass = "bg-blue-normal p-3 text-white rounded";
  return (
    <button
      onClick={onClick}
      className={classMerge(baseClass, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
