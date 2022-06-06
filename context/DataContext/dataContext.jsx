import { createContext, useContext, useReducer } from "react";
import {
  GetAvaiableActivity,
  GetAvaiableExperience,
  GetCategories,
  GetCityById,
} from "../../utils/utils";

import dataReducer from "./dataReducer";

const initialState = {
  activities: [],
  experiences: { cities: [], city1: [], city2: [], city3: [] },
  categories: [],
  cityData: [],
  latLon: {
    lat: 38.114,
    lng: 13.355,
  },
  selectedCategory: "",
  date_to: "",
  date_from: "",
  loading: false,
  setControl: false,
};

const DataContext = createContext(initialState);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  //AGGIORNA I DATI CATEGORIES NEL CONTEXT CON UNA FETCH
  const updateCategoriesData = async (value) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const Categoriesdata = await GetCategories(value);
      dispatch({
        type: "CATEGORIES_FETCH_SUCCESS",
        payload: Categoriesdata,
      });
      console.log(Categoriesdata);
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: "",
      });
    }
  };
  //AGGIORNA I DATI CITYDATA NEL CONTEXT CON UNA FETCH
  const updateCityData = async (value) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
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
  const updateActivitiesData = async (coord, codeType, date) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
    try {
      const activitiesData = await GetAvaiableActivity(coord, codeType, date);
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
  const updateExperiencesData = async (cityIn) => {
    dispatch({ type: "DATA_FETCH_REQUEST" });
    console.log(cityIn);
    try {
      switch (cityIn) {
        case 24: {
          console.log(cityIn);
          const city1Data = await GetAvaiableExperience(cityIn);
          dispatch({
            type: "EXPERIENCE_CITY1_FETCH_SUCCESS",
            payload: city1Data,
          });
          break;
        }
        case 15: {
          const city2Data = await GetAvaiableExperience(cityIn);
          dispatch({
            type: "EXPERIENCE_CITY2_FETCH_SUCCESS",
            payload: city2Data,
          });
          break;
        }
        case 572:
          const city3Data = await GetAvaiableExperience(cityIn);
          dispatch({
            type: "EXPERIENCE_CITY3_FETCH_SUCCESS",
            payload: city3Data,
          });
          break;
        default:
          const citiesData = await GetAvaiableExperience(cityIn);
          dispatch({
            type: "EXPERIENCE_FETCH_SUCCESS",
            payload: citiesData,
          });
          break;
      }
    } catch (error) {
      dispatch({
        type: "DATA_FETCH_ERROR",
        payload: "",
      });
    }
  };
  // SETTA LA CATEGORIA SELEZIONATA
  const setSelectedCategory = (value) => {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: value });
  };
  //SETTA LA DATA ATTUALE E DI PARTENZA
  const setDateTo = (value) => {
    dispatch({ type: "SET_DATE_TO", payload: value });
  };

  const setDateFrom = (value) => {
    dispatch({ type: "SET_DATE_FROM", payload: value });
  };

  //SETTA LA DATA DI RITORNO

  const dataStore = {
    dataStore: state,
    updateCategoriesData,
    updateCityData,
    updateActivitiesData,
    updateExperiencesData,
    setSelectedCategory,
    setDateTo,
    setDateFrom,
  };

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
};
