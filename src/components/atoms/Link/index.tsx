import { classMerge } from "../../../utils/helper";
import { LinkProps } from "./index.types";

function Link({children, className, ...rest}: LinkProps){
  const baseClass = "text-white";

  return <a className={classMerge(baseClass, className)} {...rest}>{children}</a>
}

export default Link;
