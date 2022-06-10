import { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const initialState = {
  activityUuidSelected: [],
  cart: [],
  refreshCartBadge: false,
  openModal: false,
};

const UserContext = createContext(initialState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setSelectedActivityByUuid = (ActivityUuiD) => {
    dispatch({
      type: "SET_USER_SELECTION",
      payload: ActivityUuiD,
    });
  };

  const addToCart = (element) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        title: element.title,
        price: element.price,
        imgUrl: element.img,
      },
    });
  };

  const setRefreshCartBadge = () => {
    dispatch({
      type: "REFRESH_CART_BADGE",
    });
  };

  const storeItemsOnLocal = (title, price, imgUrl) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push({ title: title, price: price, imgUrl: imgUrl });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const userStore = {
    userStore: state,
    setSelectedActivityByUuid,
    setRefreshCartBadge,
    addToCart,
    storeItemsOnLocal,
  };

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
};
