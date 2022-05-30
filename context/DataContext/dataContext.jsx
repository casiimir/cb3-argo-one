import {
  createContext,
  useContext,
  useReducer,
} from "react/cjs/react.production.min";

import dataReducer from "./dataReducer";

const initialState = {
  data: {},
  loading: false,
};

const DataContext = createContext(initialState);

export const useDataContext = useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const store = { dataStore: state };

  return <DataContext.Provider value={store}>{children}</DataContext.Provider>;
};
