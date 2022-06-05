import { SET_OPEN_MODAL, ADD_TO_CART } from "./costants";

const modalReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_OPEN_MODAL:
      return {
        ...state,
        modalData: action.payload.actvData,
        openModal: action.payload.openValue,
      };

    case ADD_TO_CART:
      return {
        ...state,

<<<<<<< HEAD
        cart: [
          ...state.cart,
          { title: action.payload.title, price: action.payload.price },
        ],
=======
        cart: [...state.cart, { ...action.payload }],
>>>>>>> FEAT: created context fn for cart
      };

    default:
      throw new Error("nessun risultato");
  }
};

export default modalReducer;
