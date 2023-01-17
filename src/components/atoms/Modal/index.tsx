import clsx from "clsx";
import { ReactNode } from "react";
import { Modal as ModalLayout } from "react-responsive-modal";
import styles from "./Modal.module.scss";
interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: IModal) => {
  return (
    <ModalLayout
      classNames={{
        modal: clsx(styles.customModal),
      }}
      open={isOpen}
      onClose={onClose}
    >
      {children}
    </ModalLayout>
  );
};
