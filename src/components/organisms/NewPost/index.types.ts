import { ChangeEventHandler } from "react";

export interface NewPostProps {
  content: string;
  onChange: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean;
  onClick?: () => void;
}
