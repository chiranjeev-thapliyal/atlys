import { useCallback, useState } from "react";
import useModal from "./useModal";

function useAuthModal() {
  const loginModal = useModal();
  const registerModal = useModal();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleAuthModal = useCallback(() => {
    setIsLoginMode((prevLoginMode) => {
      if (prevLoginMode) {
        loginModal.closeModal();
        registerModal.openModal();
      } else {
        loginModal.openModal();
        registerModal.closeModal();
      }

      return !prevLoginMode;
    });
  }, []);

  return { loginModal, registerModal, isLoginMode, toggleAuthModal };
}

export default useAuthModal;
