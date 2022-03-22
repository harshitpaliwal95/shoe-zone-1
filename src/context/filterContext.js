import { useContext, useReducer, createContext } from "react";
import { filterReducer } from "../reducer/filterReducer";
const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const initialState = {
    product: [],
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const UseFilter = () => useContext(FilterContext);
export { UseFilter, FilterContextProvider };
