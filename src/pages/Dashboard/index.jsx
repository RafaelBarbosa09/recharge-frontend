import { Header } from "../../components/Header";
import Modal from 'react-modal';

import { NewRechargeModal } from "../../components/NewRechargeModal";
import { RechargesProvider } from "../../hooks/RechargesContext";
import { RechargesTable } from "../../components/RechargesTable";
import { useState } from "react";

Modal.setAppElement('#root');

export default function Dashboard() {
  const [isNewRechargeModalOpen, setIsNewRechargeModalOpen] = useState(false);

  function handleOpenNewRechargeModal() {
    setIsNewRechargeModalOpen(true);
  }

  function handleCloseNewRechargeModal() {
    setIsNewRechargeModalOpen(false);
  }

  return (
    <RechargesProvider>
      <Header onOpenNewRechargeModal={handleOpenNewRechargeModal} />

      <NewRechargeModal
        isOpen={isNewRechargeModalOpen}
        onRequestClose={handleCloseNewRechargeModal}
      />

      <RechargesTable />
    </RechargesProvider>
  );
}