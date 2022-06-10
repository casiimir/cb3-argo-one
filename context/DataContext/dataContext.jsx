import { createContext, useContext, useReducer } from "react";
import {
  GetAvailableActivity,
  GetActivitiesByUuid,
  GetCategories,
  GetCityById,
} from "../../utils/utils";

import dataReducer from "./dataReducer";

const initialState = {
  activities: null,
  experiences: { cities: [], city1: [], city2: [], city3: [] },
  categories: [],
  cityData: null,
  latLon: {
    lat: 37.3111,
    lng: 13.6333,
  },
  selectedCategory: "",
  date_to: "",
  date_from: "",
  loading: false,
  language: 'en-US',
  setControl: false,
};

const DataContext = createContext(initialState);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  //AGGIORNA I DATI CATEGORIES NEL CONTEXT CON UNA FETCH
  const updateCategoriesData = async (value, lang) => {
    //dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const Categoriesdata = await GetCategories(value, lang);
      dispatch({
        type: "CATEGORIES_FETCH_SUCCESS",
        payload: Categoriesdata,
      });
 
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: "",
      });
    }
  };
  //AGGIORNA I DATI CITYDATA NEL CONTEXT CON UNA FETCH
  const updateCityData = async (value) => {
    //dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const CityData = await GetCityById(value);
      dispatch({
        type: "CITIES_FETCH_SUCCESS",
        payload: CityData,
      });
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: "",
      });
    }
  };
  //AGGIORNA I DATI ACTIVITIES NEL CONTEXT CON UNA FETCH
  const updateActivitiesData = async (coord, codeType, date, lang) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const activitiesData = await GetAvailableActivity(coord, codeType, date, lang);
      dispatch({
        type: "ACTIVITIES_FETCH_SUCCESS",
        payload: activitiesData,
      });
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: "",
      });
    }
  };
  const updateActivityDataByUuid = async (ActivityUuid, lang) => {
    console.log(ActivityUuid);
    dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const activityData = await GetActivitiesByUuid(ActivityUuid, lang);
      dispatch({
        type: "ACTIVITY_UUID_FETCH_SUCCESS",
        payload: activityData,
      });
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: error,
      });
    }
  };

  const setLanguage = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
  };

  const fetchRequest = () => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
  };

  const fetchCompleted = () => {
    dispatch({ type: "DATA_FETCH_COMPLETED" });
  };
  // SETTA LA CATEGORIA SELEZIONATA
  const setSelectedCategory = (value) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: value });
  };
  //SETTA LA DATA ATTUALE E DI PARTENZA
  const setDateTo = (value) => {
    dispatch({ type: "SET_DATE_TO", payload: value });
  };

  //SETTA LA DATA DI RITORNO
  const setDateFrom = (value) => {
    dispatch({ type: "SET_DATE_FROM", payload: value });
  };

  const storeItemsOnLocal = (title, price, imgUrl) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push({ title: title, price: price, imgUrl: imgUrl });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const dataStore = {
    dataStore: state,
    updateCategoriesData,
    updateCityData,
    updateActivitiesData,
    updateActivityDataByUuid,
    fetchRequest,
    fetchCompleted,
    setSelectedCategory,
    setDateTo,
    setDateFrom,
    storeItemsOnLocal,
    setLanguage,
  };

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
};
