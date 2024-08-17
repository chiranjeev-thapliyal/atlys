import { classMerge } from "../../../utils/helper";
import { TextProps } from "./index.types";

function Text({ as, className, children, ...rest }: TextProps) {
  const Component = as;

  return (
    <Component className={classMerge(className)} {...rest}>
      {children}
    </Component>
  );
}

export default Text;
