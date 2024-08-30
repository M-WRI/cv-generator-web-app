import { useState } from "react";
import { MODAL_ID } from "../constants";
import { ConfirmModal } from "../components/molecules";

export const useModal = () => {
  const [modalId, setModalId] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setModalId(modalName);
  };

  const closeModal = () => {
    setModalId(null);
  };

  const isModalOpen = (modalName: string | null) =>
    modalId && modalId === modalName;

  return {
    openModal,
    closeModal,
    ConfirmModal,
    isModalOpen,
    modalId,
    MODAL_ID,
  };
};
