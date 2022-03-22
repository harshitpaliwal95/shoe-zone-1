import { useContext, useReducer } from "react";

const filterContext = useContext;

const filterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <filterContext.provider value={{ state, dispatch }}>
      {children}
    </filterContext.provider>
  );
};

const useFilter = useContext(filterContext);
export { useFilter, filterContextProvider };
