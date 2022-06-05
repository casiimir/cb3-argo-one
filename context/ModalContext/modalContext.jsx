import { createContext, useContext, useReducer } from "react";
import modalReducer from "./modalReducer";

const initialState = {
  modalData: [],
  openModal: false,
};

const ModalContext = createContext(initialState);

export const useModalContext = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const setOpenModal = (data, value) => {
    dispatch({
      type: "SET_OPEN_MODAL",
      payload: {
        actvData: data,
        openValue: value,
      },
    });
  };

  const modalStore = {
    modalStore: state,
    setOpenModal,
  };

  return (
    <ModalContext.Provider value={modalStore}>{children}</ModalContext.Provider>
  );
};
