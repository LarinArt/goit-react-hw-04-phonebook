import PropTypes from 'prop-types';
import { Component } from 'react';
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

class Modal extends Component {
  static propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children, title, onClose } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
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
}

export default Modal;
