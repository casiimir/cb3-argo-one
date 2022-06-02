import {
  CITIES_FETCH_SUCCESS,
  CATEGORIES_FETCH_SUCCESS,
  ACTIVITIES_FETCH_SUCCESS,
  DATA_FETCH_REQUEST,
  DATA_FETCH_ERROR,
  DISCARD_ERROR,
  SET_SELECTED_CATEGORY,
  SET_DATE_TO,
  SET_DATE_FROM,
} from "../constants";

const dataReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case DATA_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_FETCH_SUCCESS:
      console.log("success", action);
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case CITIES_FETCH_SUCCESS:
      console.log("success", action);
      return {
        ...state,
        loading: false,
        cityData: action.payload,
        latLon: [action.payload.latitude, action.payload.longitude],
      };
    case ACTIVITIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: action.payload,
      };

    case DATA_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SET_DATE_TO:
      return {
        ...state,
        date_to: action.payload,
      };
    case SET_DATE_FROM:
      return {
        ...state,
        date_from: action.payload,
      };

    default:
      throw new Error("Controlla bene i parametri scelti");
  }
};

export default dataReducer;
