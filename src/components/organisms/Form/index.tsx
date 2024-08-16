import { classMerge } from "../../../utils/helper"
import { FormProps } from "./index.types";

function Form({children, className, onSubmit, ...rest}: FormProps){
  const baseClass = "flex flex-col gap-4"
  return <form onSubmit={onSubmit} className={classMerge(baseClass, className)} {...rest}>{children}</form>
}

export default Form;
