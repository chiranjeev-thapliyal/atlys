import { FormEventHandler, FormHTMLAttributes, ReactNode } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
