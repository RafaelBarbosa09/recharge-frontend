import { useState } from 'react';
import Modal from 'react-modal';
import Cards from 'react-credit-cards';
import InputMask from "react-input-mask";

import closeImg from "../../assets/close.svg";
import { useCards } from '../../hooks/CardsContext';
import { Container, Row } from './styles';

export function NewCardModal(props) {
  const { createCard } = useCards();

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  async function handleCreateNewCard(event) {
    event.preventDefault();

    await createCard({
      number,
      name,
      code: cvc,
      date: expiry
    });

    cleanInputs();
    props.onRequestClose();
  }

  function cleanInputs() {
    setNumber('');
    setName('');
    setExpiry('');
    setCvc('');
  }

  function handleChangeFocus(e) {
    setFocus(e.target.name);
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

      <Container onSubmit={handleCreateNewCard}>
        <h2>Cadastrar Cartão</h2>

        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />

        {/* <InputMask
          className="first-input"
          mask="9999_9999_9999_9999"
          placeholder="Número"
          name="number"
          value={number}
          onFocus={handleChangeFocus}
          onChange={e => setNumber(e.target.value)} /> */}

        <input className="first-input"
          placeholder="Número"
          name="number"
          maxLength="16"
          value={number}
          onFocus={handleChangeFocus}
          onChange={e => setNumber(e.target.value)} />

        <input
          placeholder="Nome"
          name="name"
          value={name}
          onFocus={handleChangeFocus}
          onChange={e => setName(e.target.value)} />

        <Row>
          {/* <input
            placeholder="Validade"
            name="expiry"
            value={expiry}
            onFocus={handleChangeFocus}
            onChange={e => setExpiry(e.target.value)} /> */}

          <InputMask
            mask="99/99"
            placeholder="Validade"
            name="expiry"
            value={expiry}
            onFocus={handleChangeFocus}
            onChange={e => setExpiry(e.target.value)} />

          <input
            placeholder="CVC"
            name="cvc"
            value={cvc}
            onFocus={handleChangeFocus}
            onChange={e => setCvc(e.target.value)} />
        </Row>
        <button type="submit">Confirmar</button>
      </Container>
    </Modal>
  );
}