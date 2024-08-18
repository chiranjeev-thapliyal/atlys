import { ChangeEvent } from "react";

export interface NewPostProps {
  content: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onClick?: () => void;
}
