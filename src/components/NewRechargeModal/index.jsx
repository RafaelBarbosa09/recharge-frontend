import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

import closeImg from "../../assets/close.svg";
import api from '../../services/api';
import { Container } from './styles';


export function NewRechargeModal(props) {

  const [amount, setAmount] = useState(0);
  const [phoneAmount, setPhoneAmount] = useState(0);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    api.get('phones').then(response => {
      setPhones(response.data);
    })
  }, []);

  async function handleCreateNewRecharge(event) {
    event.preventDefault();

    await api.post('/rechargs', {
      amount,
      phone_id: phoneAmount
    })

    cleanInputs();
    props.onRequestClose();
  }

  function cleanInputs() {
    setPhoneAmount('');
    setAmount(0);
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

      <Container onSubmit={handleCreateNewRecharge}>
        <h2>Ralizar Recarga</h2>

        <select onChange={e => setPhoneAmount(e.target.value)}>
          <option> </option>
          {phones.map(phone => (
            <option value={phone.id}>{phone.number}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))} />

        <button type="submit">Confirmar</button>

      </Container>
    </Modal>
  );
}