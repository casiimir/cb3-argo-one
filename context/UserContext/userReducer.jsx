import {
  SET_USER_SELECTION,
  ADD_TO_CART,
  REFRESH_CART_BADGE,
} from "./costants";

const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER_SELECTION:
      return {
        ...state,
        activityUuidSelected: action.payload,
      };

    case REFRESH_CART_BADGE:
      return {
        ...state,
        refreshCartBadge: !state.refreshCartBadge,
      };

    case ADD_TO_CART:
      return {
        ...state,

        cart: [
          ...state.cart,
          { title: action.payload.title, price: action.payload.price },
        ],
      };

    default:
      throw new Error("nessun risultato");
  }
};

export default userReducer;
