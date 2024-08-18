import { useEffect, useRef } from "react";
import { ModalProps } from "./index.types";
import { classMerge } from "../../../utils/helper";

function Modal({children, className, isOpen, closeModal}: ModalProps){
  const dialogRef = useRef<HTMLDialogElement>(null);
  const baseClass = "fixed w-full h-full z-50 flex flex-col justify-center items-center backdrop-blur-sm bg-black bg-opacity-50";

  useEffect(() => {
    if(isOpen){
      dialogRef?.current?.showModal();
    }else {
      dialogRef?.current?.close();
    }
  }, [isOpen])

  if(!isOpen)return null;

  return <dialog ref={dialogRef} onCancel={closeModal} className={classMerge(baseClass, className)}>
    {children}
  </dialog>
}

export default Modal;
