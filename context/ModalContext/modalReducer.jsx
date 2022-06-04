import { SET_OPEN_MODAL } from "./costants";

const modalReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_OPEN_MODAL:
      return {
        ...state,
        modalData: action.payload.actvData,
        openModal: action.payload.openValue,
      };

    default:
      throw new Error("nessun risultato");
  }
};

export default modalReducer;
