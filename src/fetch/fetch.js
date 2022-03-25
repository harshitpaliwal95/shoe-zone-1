import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useFilter } from "../context/filterContext";
import { ACTION } from "../action/action";
export const FetchData = () => {
  const { dispatch } = useFilter();
  return useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const product = response.data.products;
        dispatch({ type: ACTION.GET_DATA, payload: product });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
};
