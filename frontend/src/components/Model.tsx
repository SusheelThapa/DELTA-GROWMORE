import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
