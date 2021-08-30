import { Header } from "../../components/Header";
import Modal from 'react-modal';

import { NewRechargeModal } from "../../components/NewRechargeModal";
import { RechargesProvider } from "../../hooks/RechargesContext";
import { RechargesTable } from "../../components/RechargesTable";
import { useState } from "react";
import { PhonesProvider } from "../../hooks/PhonesContext";
import { CardsArea } from "../../components/CardsArea";
import { NewCardModal } from "../../components/NewCardModal";
import { CardsProvider } from "../../hooks/CardsContext";
import { NewPhoneModal } from "../../components/NewPhoneModal";

Modal.setAppElement('#root');

export default function Dashboard() {
  const [isNewRechargeModalOpen, setIsNewRechargeModalOpen] = useState(false);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [isNewPhoneModalOpen, setIsNewPhoneModalOpen] = useState(false);

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false);
  }

  function handleOpenNewRechargeModal() {
    setIsNewRechargeModalOpen(true);
  }

  function handleCloseNewRechargeModal() {
    setIsNewRechargeModalOpen(false);
  }

  function handleOpenNewPhoneModal() {
    setIsNewPhoneModalOpen(true);
  }

  function handleCloseNewPhoneModal() {
    setIsNewPhoneModalOpen(false);
  }

  return (
    <RechargesProvider>
      <PhonesProvider>
        <CardsProvider>
          <Header onOpenNewRechargeModal={handleOpenNewRechargeModal} />

          <NewRechargeModal
            isOpen={isNewRechargeModalOpen}
            onRequestClose={handleCloseNewRechargeModal}
          />

          <NewCardModal
            isOpen={isNewCardModalOpen}
            onRequestClose={handleCloseNewCardModal}
          />

          <NewPhoneModal
            isOpen={isNewPhoneModalOpen}
            onRequestClose={handleCloseNewPhoneModal}
          />

          <CardsArea onOpenNewCardModal={handleOpenNewCardModal} onOpenNewPhoneModal={handleOpenNewPhoneModal} />

          <RechargesTable />
        </CardsProvider>
      </PhonesProvider>
    </RechargesProvider>
  );
}