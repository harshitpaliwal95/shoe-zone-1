import { useContext, useReducer, createContext } from "react";
import { filterReducer } from "../reducer/filterReducer";
const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const initialState = {
    product: [],
    shortBy: null,
    rating: 1,
    category: {
      men: false,
      women: false,
      kid: false,
      latest: false,
    },
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterContextProvider };
