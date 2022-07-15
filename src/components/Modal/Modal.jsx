import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  Backdrop,
  ModalField,
  ModalWrapper,
  ModalTitle,
  ModalButton,
} from './Modal.style';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose, title }) {
  useEffect(() => {
    const onPessKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalField>
        <ModalWrapper>
          <ModalTitle>{title}</ModalTitle>
          <ModalButton type="button" onClick={onClose}>
            <AiOutlineClose />
          </ModalButton>
        </ModalWrapper>
        {children}
      </ModalField>
    </Backdrop>,
    modalRoot
  );
}

Modal.prototype = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
