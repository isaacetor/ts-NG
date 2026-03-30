'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import WaitlistModal from '../components/_utils/WaitlistModal';

type ContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const WaitlistModalContext = createContext<ContextType | null>(null);

export const WaitlistModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <WaitlistModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/* GLOBAL MODAL (only once in app) */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </WaitlistModalContext.Provider>
  );
};

export const useWaitlistModal = () => {
  const context = useContext(WaitlistModalContext);
  if (!context) {
    throw new Error('useWaitlistModal must be used within provider');
  }
  return context;
};
