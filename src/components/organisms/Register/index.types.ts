import { ChangeEventHandler } from "react";

export interface RegisterProps {
  username: string;
  email: string;
  password: string;
  disabled?: boolean;
  onClose?: () => void;
  onLoginClick?: () => void;
  onSubmit?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
