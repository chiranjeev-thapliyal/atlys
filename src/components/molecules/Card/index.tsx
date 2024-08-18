import { classMerge } from "../../../utils/helper";
import { CardProps } from "./index.types";

function Card({ children, className, ...rest }: CardProps) {
  const baseClass = "w-full rounded-lg";

  return (
    <div className={classMerge(baseClass, className)} {...rest}>
      {children}
    </div>
  );
}

export default Card;
