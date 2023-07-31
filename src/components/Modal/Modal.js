import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { BackDrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onContentClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return createPortal(
    <BackDrop onClick={onContentClick}>
      <ModalContent>{children}</ModalContent>
    </BackDrop>,
    modalRoot
  );
};

export default Modal;
