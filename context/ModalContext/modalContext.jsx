import { createContext, useContext, useReducer } from "react";
import modalReducer from "./modalReducer";

const initialState = {
  modalData: [],
  cart: [],
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

  const addToCart = (element) => {
    console.log(element);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        title: element.title,
        price: element.price,
        imgUrl: element.img,
      },
    });
  };

  const storeItemsOnLocal = (title, price, imgUrl) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push({ title: title, price: price, imgUrl: imgUrl });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const modalStore = {
    modalStore: state,
    setOpenModal,
    addToCart,
    storeItemsOnLocal,
  };

  return (
    <ModalContext.Provider value={modalStore}>{children}</ModalContext.Provider>
  );
};
