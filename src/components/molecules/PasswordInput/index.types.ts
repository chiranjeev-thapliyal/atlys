import { ChangeEventHandler } from "react";

export interface PasswordInputProps {
  showPassword: boolean;
  toggleShowPassword: () => void;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
