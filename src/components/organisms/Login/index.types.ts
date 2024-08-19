import { ChangeEventHandler } from "react";

export interface LoginProps {
  username: string;
  password: string;
  disabled?: boolean;
  onClose?: () => void;
  onSignupClick?: () => void;
  onSubmit?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
