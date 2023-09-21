import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { iconSize } from '../constans';
import { BackDrop, ModalContent, CloseButton } from './Modal.styled';

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
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <RiCloseFill size={iconSize.sm} />
        </CloseButton>
        {children}
      </ModalContent>
    </BackDrop>,
    modalRoot
  );
};

export default Modal;
