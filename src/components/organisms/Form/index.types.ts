import { ReactNode } from "react";

export interface FormProps {
  children: ReactNode,
  className?: string,
  onSubmit?: () => void,
}
