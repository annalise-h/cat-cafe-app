import React, { useState, createContext } from "react";

export const ModalOpenContext = createContext();

export const ModalOpenProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalOpenContext.Provider value={[modalOpen, setModalOpen]}>
      {props.children}
    </ModalOpenContext.Provider>
  );
};
