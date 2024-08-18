import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal?: () => void
}
