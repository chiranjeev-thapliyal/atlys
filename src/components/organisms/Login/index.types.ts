export interface LoginProps {
  username: string;
  password: string;
  submitAllowed?: boolean;
  onClose?: () => void;
  onSignupClick?: () => void;
  onSubmit?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
