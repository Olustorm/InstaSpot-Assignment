import React, { createContext, useContext, useState, ReactNode } from 'react';
import ModalContainer from '../components/ModalContainer';

type ModalType = 'editProfile' | 'newPost' | 'imagePreview' | null;

interface ModalContextProps {
  modalType: ModalType;
  selectedPost: any;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setSelectedPost: (post: any) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedPost(null);
  };

  const value = {
    modalType,
    selectedPost,
    openModal,
    closeModal,
    setSelectedPost
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};