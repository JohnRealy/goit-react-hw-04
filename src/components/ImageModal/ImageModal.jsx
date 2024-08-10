import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export default function ImageModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false}>
      <button
        onClick={() => {
          onClose();
        }}
      >
        <AiOutlineClose />
      </button>
    </Modal>
  );
}
