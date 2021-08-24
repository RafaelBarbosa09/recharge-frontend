import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Modal from 'react-modal';

import api from "../../services/api";

Modal.setAppElement('#root');

export default function Dashboard() {
  const [recharges, setRecharges] = useState([]);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  useEffect(() => {
    api.get('rechargs').then(response => {
      setRecharges(response.data);
    })
  }, []);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      {/* {recharges.map(recharge => (
        <div key={recharge.id}>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(recharge.amount)}
          </p>
          <span>{recharge.phone.number}</span>
        </div>
      ))} */}
    </>
  );
}