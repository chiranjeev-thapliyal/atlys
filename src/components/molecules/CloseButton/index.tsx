import { Button } from "../../atoms";
import { CloseButtonProps } from "./index.types";

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <Button
      className="bg-black-heavy rounded-full self-end outline-none"
      onClick={onClose}
    >
      <img src="/icons/close.svg" />
    </Button>
  );
}

export default CloseButton;
