import { useState } from 'react';
import Modal from 'react-modal';
import InputMask from "react-input-mask";

import closeImg from "../../assets/close.svg";
import { usePhones } from '../../hooks/PhonesContext';
import { Container } from './styles';

export function NewPhoneModal(props) {
  const { createPhone } = usePhones();

  const [number, setNumber] = useState('');


  async function handleCreateNewPhone(event) {
    event.preventDefault();

    await createPhone({
      number
    });

    cleanInputs();
    props.onRequestClose();
  }

  function cleanInputs() {
    setNumber('');
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">

      <button type="button" onClick={props.onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container onSubmit={handleCreateNewPhone}>
        <h2>Cadastrar Telefone</h2>

        <InputMask
          mask="(99)99999-9999"
          placeholder="Número"
          value={number}
          onChange={e => setNumber(e.target.value)} />

        <button type="submit">Confirmar</button>
      </Container>
    </Modal>
  );
}