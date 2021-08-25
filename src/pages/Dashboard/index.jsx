import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Modal from 'react-modal';

import api from "../../services/api";
import { NewRechargeModal } from "../../components/NewRechargeModal";

Modal.setAppElement('#root');

export default function Dashboard() {
  const [recharges, setRecharges] = useState([]);
  const [isNewRechargeModalOpen, setIsNewRechargeModalOpen] = useState(false);

  useEffect(() => {
    api.get('rechargs').then(response => {
      setRecharges(response.data);
    })
  }, []);

  function handleOpenNewRechargeModal() {
    setIsNewRechargeModalOpen(true);
  }

  function handleCloseNewRechargeModal() {
    setIsNewRechargeModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewRechargeModal={handleOpenNewRechargeModal} />

      <NewRechargeModal
        isOpen={isNewRechargeModalOpen}
        onRequestClose={handleCloseNewRechargeModal}
      />

      {recharges.map(recharge => (
        <div key={recharge.id}>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(recharge.amount)}
          </p>
          <span>{recharge.phone.number}</span>
        </div>
      ))}
    </>
  );
}