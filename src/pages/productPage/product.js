import { Navbar } from "../../components";
import "./product.css";
import { Filter, ProductCard } from "./componets";
import { useFilter } from "../../context/filterContext";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import {
  sortData,
  filterByCategory,
  latestProduct,
  ratingSlider,
} from "../../utils";

export function Product() {
  const { state } = useFilter();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProduct(response.data.products);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const defaultData = [...product];
  const newSortdata = sortData(defaultData, state.sortBy);
  const newCategory = filterByCategory(newSortdata, state.category);
  const filterData = latestProduct(newCategory, state.category);
  const newFilterData = ratingSlider(filterData, state.rating);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Filter />
        <main className="main-product">
          <div className="grid-three">
            {newFilterData.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
