import axios, { Axios } from "axios";
import { useEffect } from "react";
import { UseFilter } from "../context/filterContext";
export const FetchData = () => {
  const { dispatch } = UseFilter();
  return useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const product = response.data.products;
        dispatch({ type: "GET_DATA", payload: product });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
};
