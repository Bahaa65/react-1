import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;