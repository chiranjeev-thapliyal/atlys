import { classMerge } from "../../../utils/helper";
import { CardProps } from "./index.types";

function Card({children, className, ...rest}: CardProps): JSX.Element{
  const baseClass = "p-6 bg-black-light font-medium min-w-max max-w-116 w-full rounded-lg";

  return <div className={classMerge(baseClass, className)} {...rest}>
    {children}
  </div>
}

export default Card;
