import React from 'react';
import Modal from 'react-modal';

interface ModalConfirmProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm }: ModalConfirmProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Confirmar Remoção"
      >
        <h2>Tem certeza que deseja remover este card?</h2>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onRequestClose}>Cancelar</button>
      </Modal>
    );
  };
  
  export default ConfirmModal;


